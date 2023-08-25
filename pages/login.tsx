import React from 'react'
import SignIn from '@/components/Login/SignIn'
import { useSession, signIn, signOut } from "next-auth/react"
import Router from "next/router"


function Login() {
    const { data: session } = useSession()
    if (session) {
        // return (
        //     <>
        //         Signed in as {session.user?.email} <br />
        //         <button onClick={() => signOut()}>Sign out</button>
        //     </>
        // )
        Router.push("/")
    }
    return (
        <>
            <div className='flex items-center justify-center mt-40'>
                <SignIn />
            </div>
        </>
    )
}
export default Login;