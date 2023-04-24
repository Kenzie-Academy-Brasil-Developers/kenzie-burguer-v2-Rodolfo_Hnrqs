import { createContext } from "react";

export const UserContext = createContext({});

interface IUserContextProps{
    children: React.ReactNode;
}

export const UserContextProvider = ({children}: IUserContextProps) => {
    return(
        <UserContext.Provider value={{}}>
            {children}
        </UserContext.Provider>
    )
}