import React,{useState,useEffect} from 'react';
import Axios from 'axios';
import './App.css';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Shop from './Components/Pages/Shop';
import Categories from './Components/Pages/Categories';
import Contact from './Components/Pages/Contact';
import Gallery from './Components/Pages/Gallery';
import Product from './Components/Pages/Product';
import Home from './Components/Pages/Home';
import About from './Components/Pages/About';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';

const App = ()=>{
    const [products,setproducts] = useState([]);
    useEffect(()=>{
            Axios.get("http://localhost:3005/productshopstart")
                 .then((res)=>{
                    setproducts(res.data)
                 })
                 .catch()

    },[])
    return(
        <>

           <Router>
               <Header />
                    <Routes>
                        <Route path='/' element={<Home product={products}/>}/>
                        <Route path='/shop' element={<Shop  product={products}/>}/>
                        <Route path='/categories' element={<Categories />}/>
                        <Route path='/contact' element={<Contact />}/>
                        <Route path='/gallery' element={<Gallery />}/>
                        <Route path='/product' element={<Product />}/>
                        <Route path='/about' element={<About />}/>
                    </Routes>
               <Footer />
           </Router>
           
        </>
    )
}
export default App;