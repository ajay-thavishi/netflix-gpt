import { useState, useRef } from "react"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"

import Header from "./Header"
import { checkValidData } from "../util/validate"
import { auth } from "../util/firebase"
import { addUserInfo } from "../util/userInfoSlice"

const Login = () => {
    const [isLoginForm, setIsLoginForm] = useState(true)
    const [errorMessage, setErrorMessage] = useState(null)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const name = useRef(null)
    const email = useRef(null)
    const password = useRef(null)

    // console.log(name)
    // console.log(email)
    // console.log(password)

    const resetForm = () => {
        if (!isLoginForm) {
            name.current.value = ""
        }
        email.current.value = ""
        password.current.value = ""
        setErrorMessage(null)
    }

    const toggleForm = () => {
        setIsLoginForm(!isLoginForm)
        resetForm()
    }

    const handleOnClickButton = (e) => {
        debugger
        // Prevent the default form submission behavior like page reload
        e.preventDefault()

        // Validate the form data
        const nameValue = isLoginForm ? null : name.current.value
        const emailValue = email.current.value
        const passwordValue = password.current.value

        const message = checkValidData(nameValue, emailValue, passwordValue, isLoginForm)
        setErrorMessage(message)

        if (message) return

        // Sign up logic
        if (!isLoginForm) {
            createUserWithEmailAndPassword(auth, emailValue, passwordValue)
                .then((userCredentail) => {
                    // User signed up successfully
                    const user = userCredentail.user
                    console.log("User signed up:", user)
                    // Update the user's profile with display name and photo URL
                    updateProfile(user, {
                        displayName: nameValue,
                        photoURL: "https://avatars.githubusercontent.com/u/203337732?v=4",
                    })
                        .then(() => {
                            const { uid, email, displayName, photoURL } = user
                            dispatch(addUserInfo({ uid, email, displayName, photoURL }))
                            navigate("/browse")
                            resetForm()
                        })
                        .catch((error) => setErrorMessage(error.message))
                })
                .catch((error) => {
                    // Handle errors here
                    console.log("Error signing up:", error)
                    const errorCode = error.errorCode
                    const errorMessage = error.message
                    setErrorMessage(errorCode + "-" + errorMessage)
                })
        }

        // Sign in logic
        else {
            signInWithEmailAndPassword(auth, emailValue, passwordValue)
                .then((userCredential) => {
                    const user = userCredential.user
                    console.log("User signed in:", user)
                    navigate("/browse")
                    resetForm()
                })
                .catch((error) => {
                    const errorCode = error.code
                    const errorMessage = error.message
                    setErrorMessage(errorCode + "-" + errorMessage)
                    console.log("Error signing in:", error)
                })
        }
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
                        ref={name}
                    />
                )}

                <input
                    type="email"
                    placeholder="Email or mobile number"
                    className="my-2 p-4 border border-black w-full rounded-md bg-gray-700"
                    ref={email}
                />
                <input
                    type="password"
                    placeholder="Password"
                    className="my-2 p-4 border border-black w-full rounded-md bg-gray-700"
                    ref={password}
                />
                <p className="text-red-600 text-lg font-bold py-2">{errorMessage}</p>
                <button
                    className="my-4 p-2 border border-red-500  bg-red-600 w-full rounded-md"
                    onClick={handleOnClickButton}
                >
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
