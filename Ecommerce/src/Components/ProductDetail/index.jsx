import { useContext } from "react"
import { ShoppingCartContext } from "../../Context"
import { XCircleIcon } from "@heroicons/react/24/outline"
import "./styles.css"

const ProductDetail = () => {
    const context = useContext(ShoppingCartContext)
    
    return (
        <aside className={`${context.isProductDetailOpen ? "flex" : "hidden"} product-detail flex-col justify-content  fixed right-0 border border-black rounded-lg bg-white`} >
            <div className="flex justify-between items-center p-6">
                <h2 className="font-medium text-xl">Detail</h2>
                <div>
                    <XCircleIcon
                        className="h-6 w-6 text-black-500 cursor-pointer"
                        onClick={() => context.closeProductDetail()}/>
                </div>
            </div>
            <figure className="h-2/5 px-6">
                <img
                    className="h-full rounded-lg" 
                    src={context.productToShow.image} 
                    alt={context.productToShow.title} />
            </figure>
            <p className="flex flex-col p-6 pt-0">
                <span className="font-medium text-2xl mb-2">{context.productToShow.price}</span>
                <span className="font-medium text-md">{context.productToShow.title}</span>
                <span className="font-medium text-xs pb-10">{context.productToShow.description}</span>

            </p>
        </aside>
    )
}

export default ProductDetail