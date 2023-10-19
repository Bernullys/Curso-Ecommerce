import { useContext } from "react"
import { NavLink } from "react-router-dom"
import { ShoppingCartContext } from "../../Context"
import { ShoppingCartIcon } from "@heroicons/react/24/outline"

const NavBar = () => {
    
    const context = useContext(ShoppingCartContext)
    const activeStyle = 'underline underline-offset-4'

    return (
        <nav className="flex justify-between items-center fixed z-10 w-full py-5 px-8 text-xl font-light top-0">
            <ul className="flex items-center gap-8">
                <li className="font-semibold text-4xl">
                    <NavLink 
                        to='/'> 
                        Shopi
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to='/all'
                        onClick={() => context.setSearchByCategory()}
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined   
                        }
                    >
                        All
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to='/clothes'
                        onClick={() => context.setSearchByCategory("clothes")}
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined   
                        }
                    >
                        Clothes
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to='/electronics'
                        onClick={() => context.setSearchByCategory("electronics")}
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined   
                        }
                    >
                        Electronics
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to='/fornitures'
                        onClick={() => context.setSearchByCategory("fornitures")}
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined   
                        }
                    >
                        Fornitures
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to='/toys'
                        onClick={() => context.setSearchByCategory("toys")}
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined   
                        }
                    >
                        Toys
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to='/others'
                        onClick={() => context.setSearchByCategory("others")}
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined   
                        }
                    >
                        Others
                    </NavLink>
                </li>
            </ul>
            <ul className="flex items-center gap-8">
                <li className="text-black/60">
                    badr@gmail.com
                </li>
                <li>
                    <NavLink 
                        to='/myorders'
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined   
                        }
                    >
                        My Orders
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to='/myaccount'
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined   
                        }
                    >
                        My Account
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to='/signin'
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined   
                        }
                    >
                        Sign In
                    </NavLink>
                </li>
                <li className="flex items-center">
                    <ShoppingCartIcon className="h-6 w-6 text-black-500"/>
                    <div>
                        {context.count}
                    </div> 
                </li>
            </ul>
        </nav>
    )
}

export default NavBar