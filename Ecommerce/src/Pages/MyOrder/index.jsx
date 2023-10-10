import { useContext } from "react"
import { Link } from "react-router-dom"
import { ShoppingCartContext } from "../../Context"
import { ChevronLeftIcon } from "@heroicons/react/24/outline"

import Layout from "../../Components/Layout"
import OrderCard from "../../Components/OrderCard"

function MyOrder () {

    const context = useContext(ShoppingCartContext)

    return (
        <Layout>
            <div className="flex item-center justify-center relative w-80 mb-6 mt-6">
                <Link to="/myorders" className="absolute left-0">
                    <ChevronLeftIcon className="h-6 w-6 text-black cursor-pointer" />
                </Link>
                <h1>My Order</h1>
            </div>
            <div className="flex flex-col w-80">
                {
                    context.order?.slice(-1)[0].products.map(product => (
                        <OrderCard
                            key={product.id}
                            id={product.id}
                            title={product.title}
                            price={product.price}
                            image={product.image}
                        />
                    ))
                }
            </div>
        </Layout>
    )
}

export default MyOrder