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
        <div className="grid h-screen grid-rows-[auto_1fr_auto]">
            {isLoading && <Loader/>}
            {/* {true && <Loader/>} */}
                <Header />
                <div className="overflow-scroll">
                <main className="max-w-3xl mx-auto">
                <Outlet/>
                </main>
                </div>
                <CartOverview/>  
        </div>
    )
}
export default AppLayout
