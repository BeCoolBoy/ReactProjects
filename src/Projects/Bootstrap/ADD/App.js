import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Pages/Home';
import Services from './Components/Pages/Services';
import Projects from './Components/Pages/Projects';
import Contact from './Components/Pages/Contact';
import Footer from './Components/Footer/Footer';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';

const App = ()=>{
    return (
        <>
            <Router>
                <Header />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/services' element={<Services />} />
                    <Route path='/projects' element={<Projects />} />
                    <Route path='/contact' element={<Contact />} />
                </Routes>
                <Footer /> 
            </Router>
            
        </>
    )
}
export default App;
