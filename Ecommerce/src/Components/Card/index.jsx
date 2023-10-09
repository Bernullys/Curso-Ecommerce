import { useContext } from "react"
import { ShoppingCartContext } from "../../Context"
import { PlusIcon, CheckCircleIcon } from "@heroicons/react/24/outline"


const Card = ({ id, price, title, image, category, description }) => {
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

    const renderIcon = (id) => {
        //if there are products in the cart then it shows a check icon and if not it shows plus icon for adding items into the cart
        const isInCart = context.cartProducts.filter(product => product.id === id).length > 0
        if (isInCart) {
            return (
                <div 
                    className="absolute top-0 right-0 flex justify-center items-center m-2 p-1 bg-black">
                    <CheckCircleIcon className="h-6 w-6 text-white"/>
                </div>
            )
        } else {
            return (
                <div 
                    className="absolute top-0 right-0 flex justify-center items-center m-2 p-1"
                    onClick={(event) => {
                        event.stopPropagation()
                        addProductsToCart({ id, price, title, image, category, description })
                        }
                    }>
                    <PlusIcon className="h-6 w-6 text-black-500"/>
                </div>
            )
        }
    }

    return (
        <div
            className="bg-white cursor-pointer w-56 h-60 rounded-lg"
            onClick={() => showProduct({ id, price, title, image, category, description })}>
            <figure className="relative mb-2 w-full h-4/5">
                <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-sm m-2 px-3 py-0.5">{ category }</span>
                <img src= { image } alt= { description } className="w-full h-full object-cover rounded-lg" />
                {renderIcon(id)}  
            </figure>
            <p className="flex justify-between">
                <span className="text-sm font-light">{ title }</span>
                <span className="text-lg font-medium">{ price }</span>
            </p>
        </div>
    )
}
//in the renderIcon: If I use id as an argument tells me undefined... and console is warning me to use a unique key for each child
//I had to put it in the props in Home so now works well
export default Card