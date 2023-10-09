import { useContext } from "react"
import { ShoppingCartContext } from "../../Context"
import { XCircleIcon } from "@heroicons/react/24/outline"
import OrderCard from "../../Components/OrderCard"
import { totalPrice } from "../../utils"
import "./styles.css"

const CheckoutSideMenu = () => {
    const context = useContext(ShoppingCartContext)

    const handleDelete = (id) => {
        const filteredProducts = context.cartProducts.filter(product => product.id != id)
        context.setCartProducts(filteredProducts)
    }

    const handleCheckout = () => {
        const orderToAdd = {
            date: "01.02.23",
            products: context.cartProducts,
            totalProducts: context.cartProducts.length,
            totalPrice: totalPrice(context.cartProducts),
        }
        context.setOrder([...context.order, orderToAdd])
        context.setCartProducts([])
    }
    
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
            <div className="px-6 overflow-y-scroll flex-1">
                {
                    context.cartProducts.map(product => (
                        <OrderCard
                            key={product.id}
                            id={product.id}
                            title={product.title}
                            price={product.price}
                            image={product.image}
                            handleDelete={handleDelete}
                        />
                    ))
                }
            </div>
            <div className="px-6">
                <p className="flex justify-between items-center mb-2">
                    <span className="font-light">Total:</span>
                    <span className="font-medium text-2xl">${totalPrice(context.cartProducts)}</span>
                </p>
                <button
                    className="w-full bg-black py-3 text-white rounded-lg mb-6"
                    onClick={() => handleCheckout()}>Checkout</button>
            </div>
        </aside>
    )
}

export default CheckoutSideMenu