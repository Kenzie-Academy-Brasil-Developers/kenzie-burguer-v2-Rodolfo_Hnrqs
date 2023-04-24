import { createContext, useEffect, useState } from "react";
import { api } from "../services/api";

interface ICartContextProps {
    children: React.ReactNode;
}

export const CartContext = createContext({})

export const CartContextProvider = ({ children }: ICartContextProps) => {
    const [productList, setProductList] = useState([]);
    const [cartList, setCartList] = useState([]);

    const addProductToCart = (productId) => {
        const newCartProduct = productList.find(product => product.id === productId)
        const newCartList = [...cartList, newCartProduct]
        if (!cartList.some(cartProduct => cartProduct.id === productId)) {
            setCartList(newCartList)
            console.log("Produto adicionado ao carrinho")
        } else {
            console.log("Este produto já foi adicionado")
        }
    }

    useEffect(() => {
        async function loadProducts() {
            const token = localStorage.getItem("@TOKEN")
            try {
                const response = await api.get('/products', {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                setProductList(response.data);
            } catch (error) {
                console.log(error);
            }
        }
        loadProducts();
    }, [])

    return (
        <CartContext.Provider value={{ productList, addProductToCart, cartList }}>
            {children}
        </CartContext.Provider>
    )
} 