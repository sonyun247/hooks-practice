import React, { useContext, useState } from "react";

export const UserContext = React.createContext();

const UserContextProvider = ({ children }) => {
    const [user, setUser] = useState({
        name: "jay",
        userState: false
    });
    const changeState = () => setUser({ ...user, userState: true })
    return (
        <UserContext.Provider value={{ user, fn: { changeState } }}>
            {children}
        </UserContext.Provider>
    )
}

export const useUser = () => {
    const { user } = useContext(UserContext);
    return user;
}
export const useFn = () => {
    const { fn } = useContext(UserContext);
    return fn;
}

export default UserContextProvider;