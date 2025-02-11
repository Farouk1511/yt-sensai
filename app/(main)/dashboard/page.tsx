import { getUserOnboardingStatus } from "@/actions/user";
import { redirect } from "next/navigation";

const Page = async () => {   
    
    const {isOnboarded} = await getUserOnboardingStatus()

    if(isOnboarded){
        redirect("/onboarding")
    }
    return (
        <div>
            <h1>Dashboard</h1>
        </div>
    );
}       

export default Page;