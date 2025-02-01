import React from 'react'
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/Header';
import Body from './components/Body';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductDetailPage from './components/ProductDetailPage';
import CartPage from './components/CartPage';
import { ToastContainer } from 'react-toastify';
import Footer from './components/Footer';
import PaymentOptions from './components/PaymentOptions';
import ScrollToTop from './utils/ScrollToTop';
import StudentDiscount from './components/StudentDiscount';
import TermsAndConditions from './components/TermsAndConditions';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';

const App = () => {
 return (
  <BrowserRouter basename="/testwebsite">
      <ScrollToTop/>
      <Header/>
      <ToastContainer />
    <Routes>
      <Route path='/' element={<Body/>}/>
      <Route path='/product/:productId' element={<ProductDetailPage/>}/>
      <Route path='/about' element={<AboutUs/>}/>
      <Route path='/contact' element={<ContactUs/>}/>
      <Route path="/cart" element={<CartPage />} />
      <Route path="/payment-options" element={<PaymentOptions/>} />
      <Route path="/student-discount" element={<StudentDiscount/>} />
      <Route path="/terms-and-conditions" element={<TermsAndConditions/>} />
    </Routes>
    <Footer/>
  </BrowserRouter>
  )
}

export default App