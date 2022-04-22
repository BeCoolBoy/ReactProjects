import React,{useRef,useState} from 'react';
import {Link} from 'react-router-dom';

let  Header = ()=>{
    const sickky = useRef(null);
    const [navabartop,setnavabartop] = useState(false);
    let ScrollHandler = ()=>{
        if(window.scrollY>=350){
            setnavabartop(true);
        }else{
            setnavabartop(false);
        }
    }
    window.addEventListener('scroll',ScrollHandler);
    return (
        <>
           <header>
                <section className='bg-dark py-2 secondary-header'>
                    <div className="container">
                        <div className="row">

                            <div className="col-6 px-0">
                                <div className='gutter'>
                                    <div>
                                        <Link to='/' className='social-icons'><i className="bi bi-facebook"></i></Link>
                                        <Link to='/' className='social-icons'><i className="bi bi-instagram"></i></Link>
                                        <Link to='/' className='social-icons'><i className="bi bi-twitter"></i></Link>
                                    </div>
                                </div>
                            </div>

                            <div className="col-6 px-0">
                                <div className='gutter'>
                                    <div className='float-end'>
                                        <Link to='/' className='social-icons s_r'>Sign In</Link>
                                        <Link to='/' className='social-icons s_r'>Register</Link>
                                        <Link to='/' className='social-icons'><span className="badge rounded-0">0</span></Link>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                <section className='py-2 primary-header'>
                    <div className="container pt-2">
                        <div className="row logo-row pt-4">

                            <div className="col- px-0">
                                <div className='gutter text-center'>
                                    <h2 className='logo'>shopstar!</h2>
                                    <p className='logo-description'>A Classic Never Goes out of Style</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                <section className={navabartop?"nav-header sticky-navbar border-bottom border-4 border-dark":"nav-header border-bottom border-4 border-dark"} ref={sickky} >
                    <div className="container pb-2">
                        <div className="row logo-row">

                            <div className="col- px-0">
                                <div className='gutter'>
                                    <nav className="navbar navbar-expand-lg navbar-light py-0">
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
                                                        <Link className="nav-link" to="about">About</Link>
                                                    </li>
                                                    <li className="nav-item">
                                                        <Link className="nav-link" to="shop">Shop</Link>
                                                    </li>
                                                    <li className="nav-item">
                                                        <Link className="nav-link" to="categories">Categories</Link>
                                                    </li>
                                                    <li className="nav-item">
                                                        <Link className="nav-link" to="gallery">Gallery</Link>
                                                    </li>
                                                    <li className="nav-item">
                                                        <Link className="nav-link" to="contact">Contact</Link>
                                                    </li>
                                                    <li className="nav-item">
                                                        <span className="nav-link" style={{cursor:'pointer'}}><i className="bi bi-search text-success"></i></span>
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

            </header> 
        </>
    )
}

export default Header;
