import { useState } from "react"

import Header from "./Header"

const Login = () => {
    const [isLoginForm, setIsLoginForm] = useState(true)

    const toggleForm = () => {
        setIsLoginForm(!isLoginForm)
    }

    return (
        <div className="relative">
            <Header />
            <div>
                <img
                    src="https://assets.nflxext.com/ffe/siteui/vlv3/05e91faa-6f6d-4325-934e-5418dcc2567b/web/IN-en-20250630-TRIFECTA-perspective_159086b1-425f-435b-bcd5-1ed8039cdef9_large.jpg"
                    alt="banner"
                />
            </div>
            <form className="bg-black bg-opacity-80 px-12 py-8 w-1/3 absolute top-[20%] left-1/3 rounded-lg text-white">
                <h1 className=" text-3xl font-bold my-2">{isLoginForm ? "Sign In" : "Sign Up"}</h1>
                {!isLoginForm && (
                    <input
                        type="text"
                        placeholder="Full Name"
                        className="my-2 p-4 border border-black w-full rounded-md bg-gray-700"
                    />
                )}

                <input
                    type="email"
                    placeholder="Email or mobile number"
                    className="my-2 p-4 border border-black w-full rounded-md bg-gray-700"
                />
                <input
                    type="password"
                    placeholder="Password"
                    className="my-2 p-4 border border-black w-full rounded-md bg-gray-700"
                />
                <button className="my-4 p-2 border border-red-500  bg-red-600 w-full rounded-md">
                    {isLoginForm ? "Sign In" : "Sign Up"}
                </button>
                <span className="text-gray-400">{isLoginForm ? "New to Neflix?" : "Already have the account?"}</span>
                <span className="hover:underline cursor-pointer" onClick={toggleForm}>
                    {isLoginForm ? "Sign up now." : "Sign in now."}
                </span>
            </form>
        </div>
    )
}

export default Login
