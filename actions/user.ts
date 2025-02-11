"use server";

import prisma from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";

export async function updateUser(data: any) {
  const { userId } = await auth();

  if (!userId) {
    throw new Error("User not authenticated");
  }

  const user = await prisma.user.findUnique({
    where: {
      clerkUserId: userId,
    },
  });

  if (!user) {
    throw new Error("User not found");
  }

  try {
    const result = await prisma.$transaction(
      async (tx) => {
        //find if the indusries exists
        let industryInsight = await tx.industryInsight.findUnique({
            where:{
                industry: data.industry
            }
        })
        // if industry doesn't exist, create it with default values - will repace with ai later
        if(!industryInsight){
            industryInsight = await tx.industryInsight.create({
                data:{
                    industry: data.industry,
                    salaryRanges:[],
                    growthRate:0,
                    demandLevel:"MEDIUM",
                    topSkills:[],
                    marketOutlook:"NEUTRAL",
                    keyTrends:[],
                    recommendedSkills:[],
                    nextUpdate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
                }
            })
        }
        // update the user
        const updatedUser = await tx.user.update({
            where:{
                id:user.id
            },
            data:{
                industry: data.industry,
                experience: data.experience,
                bio: data.bio,
                skills: data.skills
            }
        })

        return {updatedUser, industryInsight}
      },
      {
        timeout: 10000,
      }
    );
  } catch (err) {
    throw new Error(err instanceof Error ? err.message : String(err));
  }
}

export async function getUserOnboardingStatus() {
    const { userId } = await auth();
    if (!userId) throw new Error("Unauthorized");
  
    const user = await prisma.user.findUnique({
      where: { clerkUserId: userId },
    });
  
    if (!user) throw new Error("User not found");
  
    try {
      const user = await prisma.user.findUnique({
        where: {
          clerkUserId: userId,
        },
        select: {
          industry: true,
        },
      });
  
      return {
        isOnboarded: !!user?.industry,
      };
    } catch (error) {
      console.error("Error checking onboarding status:", error);
      throw new Error("Failed to check onboarding status");
    }
  }