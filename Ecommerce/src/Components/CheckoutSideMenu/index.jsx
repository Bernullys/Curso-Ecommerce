import { useContext } from "react"
import { ShoppingCartContext } from "../../Context"
import { XCircleIcon } from "@heroicons/react/24/outline"
import OrderCard from "../../Components/OrderCard"
import "./styles.css"

const CheckoutSideMenu = () => {
    const context = useContext(ShoppingCartContext)
    
    return (
        <aside className={`${context.isChekcoutSideMenuOpen ? "flex" : "hidden"} checkout-side-menu flex-col justify-content  fixed right-0 border border-black rounded-lg bg-white`} >
            <div className="flex justify-between items-center p-6">
                <h2 className="font-medium text-xl">My Order</h2>
                <div>
                    <XCircleIcon
                        className="h-6 w-6 text-black-500 cursor-pointer"
                        onClick={() => context.closeChekcoutSideMenu()}/>
                </div>
            </div>
            <div className="px-6">
                {
                    context.cartProducts.map(product => (
                        <OrderCard
                            key={product.id}
                            title={product.title}
                            price={product.price}
                            image={product.image}
                        />
                    ))
                }
            </div>

        </aside>
    )
}

export default CheckoutSideMenu