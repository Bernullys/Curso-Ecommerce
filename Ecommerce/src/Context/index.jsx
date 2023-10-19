import { createContext, useState, useEffect } from "react"

export const ShoppingCartContext = createContext() //create a global state

//to provide the others with the information createContex use a provider
//here we are going to create a component that will return the provider. It has to be a wrapper which contains all the application

export const ShoppingCartProvider = ({ children }) => {
    //Shopping cart - Increment quantity
    const [count, setCount] = useState(0)

    //to activate the product detail - Open/Close
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)
    const openProductDetail = () => setIsProductDetailOpen(true)
    const closeProductDetail = () => setIsProductDetailOpen (false)

    //product detail - Show product
    const [productToShow, setProductToShow] = useState({})

    //to add the product to the shopping cart
    const [cartProducts, setCartProducts] = useState([])

    //to activate the checkout side menu - Open/Close
    const [isChekcoutSideMenuOpen, setIsChekcoutSideMenuOpen] = useState(false)
    const openChekcoutSideMenu = () => setIsChekcoutSideMenuOpen(true)
    const closeChekcoutSideMenu = () => setIsChekcoutSideMenuOpen(false)

    //this function is for the shopping car order
    const [order, setOrder] = useState([])

    //refactoring home fetch
    const [items, setItems] = useState(null)
    //to use when filtering
    const [filteredItems, setFilteredItems] = useState(null)


    //to put in a state what is typed on the input by title
    const [searchByTitle, setSearchByTitle] = useState("")

    //to put in a state what is typed on the input by category
    const [searchByCategory, setSearchByCategory] = useState(null)

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

    const filteredItemsByTitle = (items, searchByTitle) => {
      return items?.filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
    }
    
    const filteredItemsByCategory = (items, searchByCategory) => {
      return items?.filter(item => item.category.toLowerCase().includes(searchByCategory.toLowerCase()))
    }

    const filterBy = (searchType, items, searchByTitle, searchByCategory) => {
      if (searchType === "BY_TITLE") {
        return filteredItemsByTitle(items, searchByTitle)
      }
      if (searchType === "BY_CATEGORY") {
        return filteredItemsByCategory(items, searchByCategory)
      }
      if (searchType === "BY_TITLE_AND_CATEGORY") {
        return filteredItemsByCategory(items, searchByCategory).filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
      }
      if (!searchType) {
        return items
      }
    }

    useEffect(() => {
      if(searchByTitle && searchByCategory) setFilteredItems(filterBy("BY_TITLE_AND_CATEGORY",items, searchByTitle, searchByCategory))
      if(searchByTitle && !searchByCategory) setFilteredItems(filterBy("BY_TITLE",items, searchByTitle, searchByCategory))
      if(!searchByTitle && searchByCategory) setFilteredItems(filterBy("BY_CATEGORY",items, searchByTitle, searchByCategory))
      if(!searchByTitle && !searchByCategory) setFilteredItems(filterBy(null,items, searchByTitle, searchByCategory))

    }, [items, searchByTitle, searchByCategory])


    return ( 
        <ShoppingCartContext.Provider value={{ //this does read and set count from children
            count,
            setCount,
            openProductDetail,
            closeProductDetail,
            isProductDetailOpen,
            productToShow,
            setProductToShow,
            cartProducts,
            setCartProducts,
            isChekcoutSideMenuOpen,
            openChekcoutSideMenu,
            closeChekcoutSideMenu,
            order,
            setOrder,
            items,
            setItems,
            searchByTitle,
            setSearchByTitle,
            filteredItems,
            setFilteredItems,
            searchByCategory,
            setSearchByCategory
        }}>
            { children }
        </ShoppingCartContext.Provider>

    )
}


