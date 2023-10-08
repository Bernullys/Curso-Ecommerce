import { createContext, useState } from "react"

export const ShoppingCartContext = createContext() //create a global state

//to provide the others with the information createContex use a provider
//here we are going to create a component that will return the provider. It has to be a wrapper which contains all the application

export const ShoppingCartProvider = ({ children }) => {
    //Shopping cart - Increment quantity
    const [count, setCount] = useState(0)

    //to activate the product detail - Open/Close
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)
    const openProductDetail = () => setIsProductDetailOpen(true)
    const closeProductDetail = () => setIsProductDetailOpen (false)

    //product detail - Show product
    const [productToShow, setProductToShow] = useState({})

    //to add the product to the shopping cart
    const [cartProducts, setCartProducts] = useState([])


    return (
        <ShoppingCartContext.Provider value={{ //this does read and set count from children
            count,
            setCount,
            openProductDetail,
            closeProductDetail,
            isProductDetailOpen,
            productToShow,
            setProductToShow,
            cartProducts,
            setCartProducts,
        }}>
            { children }
        </ShoppingCartContext.Provider>

    )
}


