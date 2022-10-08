
import React from 'react'
import "./App.css"
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Admin from './pages/admin/Admin';
import ShowCustomers from './pages/customer/showCustomer';
import ShowUsers from './pages/user/showUsers';
import User from './pages/user/User';
import Navbar from './components/navbar/Navbar'
import DeleteUser from './pages/user/deleteUser';
import Payment from './components/Payment/Payment';
import Home from './components/Home/Home';
import Product from './pages/product/Product';





function App () {
  return (
    <div className='App'>
    <BrowserRouter>
        
      <Routes>
      <Route path='/' element ={<Home/>}></Route>  
      <Route path='/admin' element ={<Admin/>}></Route>
      {/* <Route path ='/orders' element={<ShowOrders/>}></Route> */}
      <Route path='/showCustomers' element ={<ShowCustomers/>}></Route> 
      <Route path='/showUsers' element ={<ShowUsers/>}></Route>
      <Route path='/users' element ={<User/>}></Route>
      <Route path='/deleteUser' element ={<DeleteUser/>}></Route> 
      <Route path='/payment' element ={<Payment/>}></Route>  
      <Route path='/product' element ={<Product/>}></Route> 

      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App

