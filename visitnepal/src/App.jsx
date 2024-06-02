import { BrowserRouter, Route, Routes, } from "react-router-dom";
import Product from "./pages/Product";
import Pricing from "./pages/Pricing";
import HomePage from "./pages/HomePage";
import Pagenotfound from "./pages/Pagenotfound";
import AppLayout from "./pages/AppLayout";
import Login from "./pages/Login";

function App() {
  return(
  <>
  {/* Content placed here wil also be shown in the page */}
  <BrowserRouter>
  <Routes>
    <Route path='*' element={<Pagenotfound/>}></Route>
    <Route path="/" element={<HomePage/>}/>
    <Route path="product" element={<Product/>}/>
    <Route path="app" element={<AppLayout/>}/>
    <Route path="pricing" element={<Pricing/>}/>
    <Route path="login" element={<Login/>}/>
  </Routes>
   </BrowserRouter>
  </>
  )
}

export default App
