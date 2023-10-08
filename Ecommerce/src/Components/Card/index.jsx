import { useContext } from "react"
import { PlusIcon } from "@heroicons/react/24/outline"
import { ShoppingCartContext } from "../../Context"

const Card = ({ price, title, image, category, description }) => {
    const context = useContext(ShoppingCartContext) // here we are telling it: we want you to read the global state
    
    //this function will send the information of each card to the product detail section
    const showProduct = (productInfo) => {
        context.openProductDetail()
        context.setProductToShow(productInfo)
    }

    //this function is to add the information of each card to the shopping cart
    const addProductsToCart = (productData) => {
        context.setCount(context.count + 1)
        context.setCartProducts([...context.cartProducts, productData])
        context.closeProductDetail()
        context.openChekcoutSideMenu()
        console.log(context.cartProducts)
    }

    return (
        <div
            className="bg-white cursor-pointer w-56 h-60 rounded-lg"
            onClick={() => showProduct({ price, title, image, category, description })}>
            <figure className="relative mb-2 w-full h-4/5">
                <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-sm m-2 px-3 py-0.5">{ category }</span>
                <img src= { image } alt= { description } className="w-full h-full object-cover rounded-lg" />
                <div 
                    className="absolute top-0 right-0 flex justify-center items-center m-2 p-1"
                    onClick={(event) => {
                        event.stopPropagation()
                        addProductsToCart({ price, title, image, category, description })
                        }
                    }>
                    <PlusIcon className="h-6 w-6 text-black-500"/>
                </div>
            </figure>
            <p className="flex justify-between">
                <span className="text-sm font-light">{ title }</span>
                <span className="text-lg font-medium">{ price }</span>
            </p>
        </div>
    )
}

export default Card