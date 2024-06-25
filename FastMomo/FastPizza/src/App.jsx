//We will be using react router function createBrowserRouter() to create a BrowserRouter component. This component will be used to wrap the App component. This will allow us to use the BrowserRouter component in the App component.
import Home from "./ui/Home"
import Menu from "./features/menu/Menu"
import Cart from "./features/cart/Cart"
import CreateOrder from "./features/order/CreateOrder"
import Order from "./features/order/Order"
import AppLayout from "./ui/AppLayout"
import { RouterProvider, createBrowserRouter } from "react-router-dom"


//In the react version 6.4 we use createBrowserRouter() function to create a BrowserRouter component. This component will be used to wrap the App component. This will allow us to use the BrowserRouter component in the App component.


const router=createBrowserRouter([
  {
    element:<AppLayout/>,
    children:[
    {
    path: "/",
    element:<Home/>
  },
  {
    path:"/menu",
    element:<Menu/>,
  },
  {
    path:"/cart",
    element:<Cart/>
  },
  {
    path:"/order/new",
    element:<CreateOrder/>
  },
  {
    path:"/order/:id",
    element:<Order/>
  }
]
  }
])

function App() {
  return (
    <RouterProvider router={router}/>
  )
}
export default App
