import { useSelector } from "react-redux"

import Header from "./Header"

const Browse = () => {
    const userInfo = useSelector((store) => store.userInfo)
    console.log("userInfo:", userInfo)

    return (
        <div>
            <Header />
        </div>
    )
}

export default Browse
