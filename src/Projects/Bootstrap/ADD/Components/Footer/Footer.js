import React from 'react';
import { Link } from 'react-router-dom';

const Footer = ()=>{
    return (
        <>
            <footer>
                <section className='container-fluid bg-dark py-5'>
                    <div className='container footer-conatiner1'>
                        <div className='row pb-2'>
                            <div className='col'>
                                <nav className="navbar navbar-expand-lg navbar-light pt-0">
                                    <div className="container-fluid px-0">
                                        <div className="collapse navbar-collapse" id="navbarNav">
                                            <ul className="navbar-nav footer-navbar-nav w-100 justify-content-center">
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
                                <hr style={{color:'#fff'}} className='w-75 m-auto d-none d-sm-block'/>
                            </div>
                        </div>

                        <div className='row mt-1 mt-md-4 footer-contact-d col-container'>
                            <div className='col-md-4 p-0 px-2 col-items border'>
                                <div className='gutter d-flex flex-column text-center text-white p-2 py-3'>
                                    <p><i className="bi bi-pin-map-fill"></i></p>
                                    <h5>Address</h5>
                                    <p className='last-des'>Unit 1/ 53 Chandler Road, Boronia VIC 3155</p>
                                </div>
                            </div>

                            <div className='col-md-4 p-0 px-2 col-items border'>
                                <div className='gutter d-flex flex-column text-center text-white p-2 py-3'>
                                    <p><i className="bi bi-telephone"></i></p>
                                    <h5>Phone</h5>
                                    <p className='last-des'>0435946330</p>
                                </div>
                            </div>

                            <div className='col-md-4 px-2 col-items border'>
                                <div className='gutter col d-flex flex-column text-center text-white p-2 py-3'>
                                    <p><i className="bi bi-envelope"></i></p>
                                    <h5>Email</h5>
                                    <p className='last-des'>info@alldimensionsdesign.com.au</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                <section>
                    <div className='container-fluid btn-bg-color py-2'>
                        <div className='row py-1'>
                            <div className='col-12'>
                                <div className='gutter text-center'>
                                    <p className='m-0 copyRight'>Hosting & Affordable Website Design By ComX Copyright © 2021 All Rights Reserved.</p>
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
