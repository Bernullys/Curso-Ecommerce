import { useContext } from "react"
import { Link } from "react-router-dom"
import { ChevronLeftIcon } from "@heroicons/react/24/outline"
import { ShoppingCartContext } from "../../Context"
import Layout from "../../Components/Layout"
import OrdersCard from "../../Components/OrdersCard"

function MyOrders() {

  const context = useContext(ShoppingCartContext)


  return (
    <Layout>
      <div className="flex item-center justify-center relative w-80">
        <h1>My Orders</h1>
      </div>
      {
        context.order.map((order, index) => {
          <Link key={index} to={`/myorders/${order.id}`}>
            <OrdersCard
                totalPrice={order.totalPrice}
                totalProducts={order.totalProducts} />
          </Link>
        })
      }
    </Layout>
  )
}

export default MyOrders
