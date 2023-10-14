import { useContext } from "react"
import Layout from "../../Components/Layout"
import Card from "../../Components/Card"
import Skeleton from "../../Components/Skeleton"
import ProductDetail from "../../Components/ProductDetail"
import { ShoppingCartContext } from "../../Context"


function Home() {

  const context = useContext(ShoppingCartContext)


  return (
    <Layout>
      Home
      <section className="grid gap-24 grid-cols-4 w-full max-w-screen-lg">
        {
          context.items?.length > 0 ? (
            context.items?.map(product => (
              <Card 
                key={product.id}
                id={product.id}
                category={product.category}
                image={product.image}
                description={product.description}
                price={product.price}
                title={product.title}
              />
            ))
          ) : (
            <section className="flex">
              <div>
                {Array.from({length: 10}).map((_, index) => (
                  <Skeleton key={index} />
                ))}
              </div>
              <div>
                {Array.from({length: 10}).map((_, index) => (
                  <Skeleton key={index} />
                ))}
              </div>
              <div>
                {Array.from({length: 10}).map((_, index) => (
                  <Skeleton key={index} />
                ))}
              </div>
              <div>
                {Array.from({length: 10}).map((_, index) => (
                  <Skeleton key={index} />
                ))}
              </div>
            </section>
          )
        }
      </section>
      <ProductDetail />
    </Layout>
  )
}

export default Home
