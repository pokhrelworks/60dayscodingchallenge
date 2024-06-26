import { Outlet, useNavigation } from "react-router-dom"
import CartOverview from "../features/cart/CartOverview"
import Header from "./Header"
import Loader from "./Loader";

function AppLayout() {

 
    //useNavigation is a hook that returns the current navigation state of the app. It is used to check if the app is loading or not.
    const navigation = useNavigation();
    const isLoading = navigation.state === "loading";
    // console.log(navigation);    

    return (
        <div className="layout">
            {isLoading && <Loader/>}
                <Header />
                <main>
                <Outlet/>
                </main>
                <CartOverview/>  
        </div>
    )
}
export default AppLayout
