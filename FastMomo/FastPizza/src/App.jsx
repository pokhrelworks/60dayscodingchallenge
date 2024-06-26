//We will be using react router function createBrowserRouter() to create a BrowserRouter component. This component will be used to wrap the App component. This will allow us to use the BrowserRouter component in the App component.
import Home from "./ui/Home"
import Menu,{loader as menuLoader} from "./features/menu/Menu"
import Cart from "./features/cart/Cart"
import CreateOrder, {action as createOrderAction} from "./features/order/CreateOrder"
import Order, {loader as orderLoader} from "./features/order/Order"
import AppLayout from "./ui/AppLayout"
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Error from "./ui/Error"


//In the react version 6.4 we use createBrowserRouter() function to create a BrowserRouter component. This component will be used to wrap the App component. This will allow us to use the BrowserRouter component in the App component.

const router=createBrowserRouter([


  {
    element:<AppLayout/>,
    //This way any error will directly be shown in the Error component.
    errorElement: <Error/>,
    
    children:[
    {
    path: "/",
    element:<Home/>
  },
  {
    path:"/menu",
    element:<Menu/>,
    loader:menuLoader,
    errorElement: <Error/>,
  },
  {
    path:"/cart",
    element:<Cart/>
  },
  {
    path:"/order/new",
    element:<CreateOrder/>,
    action:createOrderAction,
  },
  {
    path:"/order/:orderId",
    element:<Order/>,
    loader: orderLoader,
    errorElement: <Error/>,
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
