import { currentUser } from "@clerk/nextjs/server";
import prisma from "./prisma";

export const checkUser = async () => {
  const user = await currentUser();
  if (!user) {
    // throw new Error("You must be signed in to call this API");
    return null;
  }

  try{

    const loggedInUser = await prisma.user.findUnique({  
        where:{
            clerkUserId:user.id
        }
    })

    if(loggedInUser){
        return loggedInUser
    }

    const name = `${user.firstName} ${user.lastName ? user.lastName : ""}`  

    const newUser = await prisma.user.create({
        data:{
            clerkUserId:user.id,
            name:name,
            imageUrl:user.imageUrl,
            email:user.emailAddresses[0].emailAddress
        }
    })

    return newUser

  }catch(error){
    if (error instanceof Error) {
      console.log(error.message);
    } else {
      console.log(String(error));
    }
  }
 
}  