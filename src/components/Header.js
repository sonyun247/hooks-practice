import React, { useContext } from "react";
import { UserContext, useUser } from "./Context";

const Header = () => {
    const { name, userState } = useUser();
    return (
        <header>{name}, {userState ? "true" : "false"} </header>
    )
}

export default Header;