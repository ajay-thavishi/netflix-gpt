import { useEffect } from "react"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { useDispatch } from "react-redux"
import { onAuthStateChanged } from "firebase/auth"

import { addUserInfo, removeUserInfo } from "../util/userInfoSlice"
import { auth } from "../util/firebase"

import Login from "./Login"
import Browse from "./Browse"

const Body = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            debugger
            console.log("User state changed:", user)
            if (user) {
                const { uid, displayName, email, photoURL } = user
                dispatch(addUserInfo({ uid: uid, displayName: displayName, email: email, photoURL: photoURL }))
            } else {
                dispatch(removeUserInfo())
            }
        })
    }, [])

    const appRoute = createBrowserRouter([
        {
            path: "",
            element: <Login />,
        },
        {
            path: "/browse",
            element: <Browse />,
        },
    ])

    return (
        <div>
            <RouterProvider router={appRoute} />
        </div>
    )
}

export default Body
