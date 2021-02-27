import React, { useContext } from "react";
import { useFn, UserContext, useUser } from "./Context";
import Header from "./Header";

const Home = () => {
    const { name, userState } = useUser();
    const { changeState } = useFn();
    return (
        <div>
            <Header />
            <h1>hi, {name}, your state: {userState ? "true" : "false"}</h1>
            <button onClick={changeState}>change it</button>
        </div >
    )
}

export default Home;