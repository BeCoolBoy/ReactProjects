import React from 'react';
import {Link} from 'react-router-dom';
import Logo from '../../Images/Logo.png';
import {useState} from 'react';

const Header = ()=>{
    let [navbar,setnavbar] = useState(false);
    const changebackground = ()=>{
        if(window.scrollY>=80){
            setnavbar(true)
        }else{
            setnavbar(false)
        }
    }
    window.addEventListener('scroll',changebackground)
    return (
        <>
        <header>
            <div className='container-fluid primary-bg-color secondary-header py-2 d-none d-sm-block'>
                <section className="container">
                    <div className='gutter d-flex justify-content-end'>
                        <p className='mb-0 me-3'>
                            <i className="bi bi-telephone text-white pe-2"></i>
                            <Link to="tel:0435 946 330">0435946330</Link>
                        </p>
                        <p className='mb-0'>
                            <i className="bi bi-envelope text-white pe-2"></i>
                            <Link to="mailto:info@alldimensionsdesign.com.au">info@alldimensionsdesign.com.au</Link>
                        </p>
                    </div>
                </section>
            </div>
            <div className="container-fluid primary-header">
                <section className="container px-0">
                    <nav className="navbar navbar-expand-lg navbar-light">
                        <div className="container-fluid px-0 d-flex" id="nav-container">
                            <Link className="navbar-brand" to="/">
                                <img src={Logo} alt='...' className='img-fluid'/>
                            </Link>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNav">
                                <ul className="navbar-nav w-100 justify-content-end">
                                    <li className="nav-item">
                                        <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="services">Services</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="projects">Projects</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="contact">Contact</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </section>
            </div>
        </header>
        </>
    )
}

export default Header;
