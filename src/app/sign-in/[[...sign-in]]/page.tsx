import { SignIn } from "@clerk/nextjs";
 
export default function Page() {
  return <>
  <div className="flex justify-start items-center flex-col" >
    <div>
     <h1 className="my-4 mb-3 text-3xl">Sign in Page</h1>
    </div>

    <div>
    <SignIn />
    </div>
  </div>
  </>;
}