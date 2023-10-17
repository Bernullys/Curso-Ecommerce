import { useContext } from "react"
import Layout from "../../Components/Layout"
import Card from "../../Components/Card"
import Skeleton from "../../Components/Skeleton"
import ProductDetail from "../../Components/ProductDetail"
import { ShoppingCartContext } from "../../Context"


function Home() {

  const context = useContext(ShoppingCartContext)

  const renderView = () => {
    if (context.searchByTitle?.length > 0) {
      if (context.filteredItems?.length > 0) {
        return (
          context.filteredItems?.length > 0 ? (
            context.filteredItems?.map(product => (
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
        )
      } else {
        return (
          <div>We don't have that item</div>
        )
      }
    } else {
      return (
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
      )
    }
  }


  return (
    <Layout>
      
      <div className="flex items-center justify-center relative w-80 mb-4">
        <h1 className="font-medium text-xl">Exclusive Products</h1>
      </div>
      <input
        type="text"
        placeholder="Search a product"
        className="rounded-lg border border-black w-80 p-4 mb-4 focus:outline-none"
        onChange={(event) => context.setSearchByTitle(event.target.value)} />

      <section className="grid gap-24 grid-cols-4 w-full max-w-screen-lg">
        {
          renderView()
        }
      </section>
      <ProductDetail />
    </Layout>
  )
}

export default Home
