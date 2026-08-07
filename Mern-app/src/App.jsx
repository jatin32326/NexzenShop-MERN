import { BrowserRouter, Route, Router, Routes } from "react-router-dom"
import Header from "./components/headers"
import Home from "./pages/Home"
import ProductListing from "./components/ProductListing"
import Footer from './components/Footer'
import ProductDetails from "./components/ProductDetails"
import Login from "./pages/Login"
import Register from "./pages/Register"
import { createContext, useEffect, useState } from "react"
import CartPage from "./pages/Cart"
import Verify from "./pages/verify/verifyEmail"

import toast, { Toaster } from 'react-hot-toast';
import ForgotPassword from "./pages/ForgotPassword"
import CheckOut from "./pages/Checkout"
import MyAccount from "./pages/MyAccount"
import MyList from "./pages/MyList"
import MyOrder from "./pages/OrderPage"
import { fetchDataFromApi } from "./utils/api"
import Address from "./pages/MyAccount/address"



export const MyContext = createContext();

export default function App() {

  const [openCartPanel, setOpenCartPanel] = useState(false);
  const [isLogin,setIsLogin]=useState(false)
  const [userData,setUserData]= useState(null)
  const apiUrl = import.meta.env.VITE_API_URL

  const toggleDrawer = (newOpen) => () => {
    setOpenCartPanel(newOpen);
  };

  useEffect(()=>{

    const token=localStorage.getItem("accessToken")

    if(token !== undefined && token !== null && token !== ""){
      setIsLogin(true)

      fetchDataFromApi(`/api/user/user-details?token=${token}`).then((res)=>{
        console.log(res)
        setUserData(res.data)

        })


    }else{
      setIsLogin(false)
    }


  },[isLogin])

  const openToastBox = (status,msg) =>{
    if(status==="success"){
      toast.success(msg)
    }
    if(status==="error"){
      toast.error(msg)
    }
  }

  const values = {
    setOpenCartPanel,
    toggleDrawer,
    openCartPanel,
    openToastBox,
    isLogin,
    setIsLogin,
    userData,
    setUserData
  }

  return (
    <div>
      <BrowserRouter>
      <MyContext.Provider value={values}>
       <Header />
       <Routes>
        <Route path={"/"} exact={true} element={<Home/>}/>
        <Route path={"/productListing"} exact={true} element={<ProductListing/>}/>
        <Route path={"/productDetails/:id"} exact={true} element={<ProductDetails/>}/>
        <Route path={"/login"} exact={true} element={<Login/>}/>
        <Route path={"/register"} exact={true} element={<Register/>}/>
        <Route path={"/cart"} exact={true} element={<CartPage/>}/>
        <Route path={"/verify"} exact={true} element={<Verify/>}/>
        <Route path={"/forgot-password"} exact={true} element={<ForgotPassword/>}/>
        <Route path={"/checkout"} exact={true} element={<CheckOut/>}/>
        <Route path={"/my-account"} exact={true} element={<MyAccount/>}/>
        <Route path={"/my-list"} exact={true} element={<MyList/>}/>
        <Route path={"/my-orders"} exact={true} element={<MyOrder/>}/>
        <Route path={"/address"} exact={true} element={<Address/>}/>
        
       </Routes>
       <Footer/>
       </MyContext.Provider>
      </BrowserRouter>

      <Toaster />

    </div>


  )
}


