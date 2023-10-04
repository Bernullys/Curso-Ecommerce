import { createContext } from "react"

const ShoppingCartContext = createContext() //create a global state

//to provide the others with the information createContex use a provider
//here we are going to create a component that will return the provider. It has to be a wrapper which contains all the application

export const ShoppingCartProvider = ({ children }) => {
    return (
        <ShoppingCartContext.Provider>
            { children }
        </ShoppingCartContext.Provider>

    )
}


