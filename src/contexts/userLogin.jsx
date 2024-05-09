import { createContext, useState } from "react";

export const UserLoginContext = createContext()

export const UserLoginProvider = ({children}) => {
    const [loggedUser, setLoggedUser] = useState("grumpy19")

    return (
    <UserLoginContext.Provider value={{ loggedUser, setLoggedUser}}>
        {children}
    </UserLoginContext.Provider>
    );
}