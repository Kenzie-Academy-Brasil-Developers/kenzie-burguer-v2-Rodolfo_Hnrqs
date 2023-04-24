import { useContext } from "react"
import { Navigate, Outlet } from "react-router-dom"
import { CartContextProvider } from "../../providers/CartContext"
import { UserContext } from "../../providers/UserContext"


export const ProtectedRoutes = () => {
    const { user } = useContext(UserContext)

    if (!user) {
        return <Navigate to="/" />
    }

    return (
        <CartContextProvider>
            <Outlet />
        </CartContextProvider>
    )
}