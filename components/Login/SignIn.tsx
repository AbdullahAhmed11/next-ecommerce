import React from "react"
import { FcGoogle, BsGithub } from "@/assets/icons"
import { useSession, signIn, signOut } from "next-auth/react"

function SignIn() {

    //google Hamdler fn
    async function handleGoogleSignin() {
        signIn('google', { callbackUrl: "http://localhost:3000/" })
    }

    //github handle fn
    async function handleGithubSignin() {
        signIn('github', { callbackUrl: "http://localhost:3000" })
    }


    return (
        <>
            <div className="flex flex-col gap-4">
                <button
                    className="flex items-center justify-center border-2 rounded-md p-3 gap-3 hover:bg-gray-50"
                    onClick={handleGoogleSignin}
                >
                    <span>Sign In with Google</span>
                    <FcGoogle className="text-2xl" />
                </button>
                <button
                    className="flex items-center justify-center border-2 rounded-md p-3 gap-3 hover:bg-gray-50"
                    onClick={handleGithubSignin}
                >
                    <span>Sign In with github</span>
                    <BsGithub className="text-2xl" />
                </button>
            </div>
        </>
    )
}
export default SignIn;