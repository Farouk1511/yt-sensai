import { SignIn } from "@clerk/nextjs";

const Page = () => {
    return (
        <SignIn withSignUp={true}/>
    );
    }
export default Page;