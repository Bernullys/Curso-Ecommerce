import { PlusIcon } from "@heroicons/react/24/outline"
import { useContext } from "react"
import { ShoppingCartContext } from "../../Context"

const Card = ( {price, title, image, category, description }) => {
    const context = useContext(ShoppingCartContext) // here we are telling it: we want you to read the global state
    return (
        <div className="bg-white cursor-pointer w-56 h-60 rounded-lg">
            <figure className="relative mb-2 w-full h-4/5">
                <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-sm m-2 px-3 py-0.5">{ category }</span>
                <img src= { image } alt= { description } className="w-full h-full object-cover rounded-lg" />
                <div 
                    className="absolute top-0 right-0 flex justify-center items-center m-2 p-1"
                    onClick={() => context.setCount(context.count + 1)}>
                    <PlusIcon className="h-6 w-6 text-black-500 border-solid"/>
                </div>
            </figure>
            <p className="flex justify-between">
                <span className="text-sm font-light">{ title }</span>
                <span className="text-lg font-medium">{ price }</span>
            </p>
        </div>
    )
}

export default Card