import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { TLoginFormValues } from "../components/Form/LoginForm/LoginFormSchema";
import { TRegisterFormValues } from "../components/Form/RegisterForm/RegisterFormSchema";
import { api } from "../services/api";

interface IUserContextProps {
    children: React.ReactNode;
}

interface IUser {
    email: string;
    name: string;
    id: number;
}

interface IUserLoginResponse {
    accessToken: string;
    user: IUser;
}

interface IUserRegisterResponse {
    accessToken: string;
    user: IUser;
}

interface IUserContext {
    user: IUser | null;
    userLogin: (formData: TLoginFormValues) => Promise<void>;
    userRegister: (formData: TRegisterFormValues) => Promise<void>;
    userLogout: () => void;
}

export const UserContext = createContext({} as IUserContext);

export const UserContextProvider = ({ children }: IUserContextProps) => {
    const [user, setUser] = useState<IUser | null>(null);
    const navigate = useNavigate();

    useEffect(() => {
        const loadUser = async () => {
            try {
                const token = localStorage.getItem("@TOKEN")
                const userId = localStorage.getItem("@USERID");

                if (!token) {
                    return
                }

                const { data } = await api.get(`/users/${userId}`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
                setUser(data)
            } catch (error) {
                console.error(error)
            }
        }

        loadUser()
    }, [])

    const userLogin = async (formData: TLoginFormValues) => {
        try {
            const { data } = await api.post<IUserLoginResponse>("/login", formData);
            localStorage.setItem("@TOKEN", data.accessToken);
            localStorage.setItem("@USERID", JSON.stringify(data.user.id));
            setUser(data.user);
            console.log("Login efetuado com sucesso");
            navigate("/shop");
        } catch (error) {
            console.log(error);
        }
    };

    const userRegister = async (formData: TRegisterFormValues) => {
        try {
            await api.post<IUserRegisterResponse>("/users", formData);
            console.log("Cadastro efetuado com sucesso");
            navigate("/");
        } catch (error) {
            console.log(error);
        }
    };

    const userLogout = () => {
        localStorage.removeItem("@TOKEN");
        localStorage.removeItem("@USERID");
        setUser(null);
        navigate("/");
    };

    return (
        <UserContext.Provider value={{ user, userLogin, userLogout, userRegister }}>
            {children}
        </UserContext.Provider>
    )
}