import { NavLink } from "react-router-dom"

const NavBar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink to='/'>
                        Shopi
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/all'>
                        All
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/clothes'>
                        Clothes
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/electronics'>
                        Electronics
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/fornitures'>
                        Fornitures
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/toys'>
                        Toys
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/others'>
                        Others
                    </NavLink>
                </li>
            </ul>
            <ul>
                <li>
                    <NavLink to='/'>
                        badr@gmail.com
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/myorders'>
                        My Orders
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/myaccount'>
                        My Account
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/signin'>
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