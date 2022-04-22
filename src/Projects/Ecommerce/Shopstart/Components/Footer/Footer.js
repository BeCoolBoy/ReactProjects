import React from 'react';
import {Link} from 'react-router-dom';
let Footer = ()=>{
    return(
        <>
            <footer className='bg-dark'>
                <section className='pt-5 pb-2'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-'>
                                <div className='gutter'>
                                    <div className='text-center'>
                                        <Link to="/" className='social-icons'><i className="bi bi-facebook"></i></Link>
                                        <Link to="/" className='social-icons'><i className="bi bi-instagram"></i></Link>
                                        <Link to="/" className='social-icons'><i className="bi bi-twitter"></i></Link>
                                    </div>
                                    <nav className="navbar navbar-expand-lg footer-nav pt-3">
                                        <div className="container-fluid">
                                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                            <span className="navbar-toggler-icon"></span>
                                            </button>
                                            <div className="collapse navbar-collapse" id="navbarNav">
                                                <ul className="navbar-nav w-100 justify-content-center">
                                                    <li className="nav-item">
                                                        <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                                                    </li>
                                                    <li className="nav-item">
                                                        <Link className="nav-link" to="/">About</Link>
                                                    </li>
                                                    <li className="nav-item">
                                                        <Link className="nav-link" to="/">Shop</Link>
                                                    </li>
                                                    <li className="nav-item">
                                                        <Link className="nav-link" to="/">Categories</Link>
                                                    </li>
                                                    <li className="nav-item">
                                                        <Link className="nav-link" to="/">Gallery</Link>
                                                    </li>
                                                    <li className="nav-item">
                                                        <Link className="nav-link" to="/">Contact</Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </nav>
                                </div>
                            </div>

                        </div>
                        
                    </div>
                </section>
                <section className='bg-light'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col- py-2'>
                                <div className='gutter text-center py-1'>
                                    <span>©shopStore Simple e-commerce design with React JS</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </footer>
        </>
    )
}
export default Footer;