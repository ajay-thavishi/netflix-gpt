import { useNavigate } from "react-router-dom"
import { signOut } from "firebase/auth"
import { useSelector } from "react-redux"

import { auth } from "../util/firebase"

const Header = () => {
    const navigate = useNavigate()
    const userInfo = useSelector((item) => item.userInfo)

    const handleLogout = () => {
        signOut(auth)
            .then(() => {
                navigate("/")
            })
            .catch((error) => {
                console.log("Error signing out:", error)
            })
    }

    return (
        <div className="absolute px-12 py-2 bg-gradient-to-b from-black w-screen flex justify-between items-center">
            <img
                src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-07-01/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
                alt="logo"
                className="w-52"
            />
            {userInfo && (
                <div className="flex gap-2 items-center">
                    <img src={userInfo.photoURL} alt="user-logo" className="w-12 h-12 rounded-full" />
                    <button
                        className="border border-red-500 bg-red-500 text-white px-2 py-1 rounded-md h-10"
                        onClick={handleLogout}
                    >
                        Log Out
                    </button>
                </div>
            )}
        </div>
    )
}

export default Header
