import { useRoutes, BrowserRouter } from 'react-router-dom';
import Home from '../Home/index';
import MyAccount from '../MyAccount/index';
import MyOrders from '../MyOrders/index';
import MyOrder from '../MyOrder';
import SignIn from '../SignIn/index';
import NotFound from '../NotFound/index';
import NavBar from '../../Components/Navbar/index'
import './App.css';

const AppRoutes = () => {
  let routes = useRoutes ([
    { path: '/', element:<Home /> },
    { path:'myaccount', element:<MyAccount /> },
    { path:'myorders', element: <MyOrders />},
    { path: 'myorder', element: <MyOrder /> },
    { path: 'signin', element: <SignIn /> },
    { path: '/*', element: <NotFound /> }
  ])
  return routes;
}

function App() {

  return (
    <BrowserRouter>
      <AppRoutes />
      <NavBar />
    </BrowserRouter>
  )
}

export default App
