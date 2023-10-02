import { NavLink } from "react-router-dom"

const NavBar = () => {

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
                <li>
                    🚖0
                </li>
            </ul>
        </nav>
    )
}

export default NavBar