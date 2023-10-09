import { useState, useEffect } from "react"
import Layout from "../../Components/Layout"
import Card from "../../Components/Card"
import Skeleton from "../../Components/Skeleton"
import ProductDetail from "../../Components/ProductDetail"

function Home() {

  const [items, setItems] = useState(null)

  useEffect(() => {
    const allProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products")
        const data = await response.json()
        console.log(`These are all products ${data}`, data)
        setItems (data)
      } catch (error) {
        console.log(`Oh Oh there is an error ${error}`)
      }
    }
    allProducts()
  }, [])

  return (
    <Layout>
      Home
      <section className="grid gap-24 grid-cols-4 w-full max-w-screen-lg">
        {
          items?.length > 0 ? (
            items?.map(product => (
              <Card 
                key={product.id}
                category={product.category}
                image={product.image}
                description={product.description}
                price={`$${product.price}`}
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
