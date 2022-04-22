import React from 'react';
import {Link} from 'react-router-dom';
import slider_image1 from '../../Images/slider1.jpg';
import slider_image2 from '../../Images/slider2.jpg';
import HomeTopCategorie1 from '../../Images/shop-accessories.jpg';
import HomeTopCategorie2 from '../../Images/shop-fragrance.jpg';
import HomeTopCategorie3 from '../../Images/shop-slipper.jpg';
import offers from '../../Images/mens-sale.png';
/** Get The Look **/
import Gallery1 from '../../Images/gallery1.jpg';
import Gallery2 from '../../Images/gallery2.jpg';
import Gallery3 from '../../Images/gallery3.jpg';
import Gallery4 from '../../Images/gallery4.jpg';
import Gallery5 from '../../Images/gallery5.jpg';
import Gallery6 from '../../Images/gallery6.jpg';
/** Blog **/
import Blog1img from '../../Images/blog1.jpg';
import Blog2img from '../../Images/blog2.jpg';
import Blog3img from '../../Images/blog3.jpg';
/** Sliders **/
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import sllogo1 from '../../Images/logo01.png';
import sllogo2 from '../../Images/logo02.png';
import sllogo3 from '../../Images/logo03.png';
import sllogo4 from '../../Images/logo04.png';
import sllogo5 from '../../Images/logo05.png';
import sllogo6 from '../../Images/logo06.png';

let Home = (propsProduct)=>{
    let Products = propsProduct.product;
    let HomeTopAccessories = [
        {
            title:'SHOP ACCESSORIES',
            images:HomeTopCategorie1,
        },
        {
            title:'SHOP FRAGRANCE',
            images:HomeTopCategorie2,
        },
        {
            title:'SHOP SHOES',
            images:HomeTopCategorie3,
        }
    ]
    let HomegetLook = [
        {
            image:Gallery1
        },
        {
            image:Gallery2
        },
        {
            image:Gallery3
        },
        {
            image:Gallery4
        },
        {
            image:Gallery5
        },
        {
            image:Gallery6
        }
    ]
    let HomeBlog = [
        {
            image:Blog1img,
            title:'10 FASHION MOMENTS THAT RULED THE CATWALK',
            text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris elementum nulla quis ex auctor, cursus scelerisque urna eleifend. Maecenas vel laoreet erat, sed euismod purus. …',
        },
        {
            image:Blog2img,
            title:'THE HANDBAGS YOU WON’T REGRET INVESTING IN',
            text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris elementum nulla quis ex auctor, cursus scelerisque urna eleifend. Maecenas vel laoreet erat, sed euismod purus. …',
        },
        {
            image:Blog3img,
            title:'10 SHOES EVERY WOMAN SHOULD OWN',
            text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris elementum nulla quis ex auctor, cursus scelerisque urna eleifend. Maecenas vel laoreet erat, sed euismod purus. …',
        },
    ]
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        speed: 3000,
        autoplaySpeed: 3000,
        cssEase: "linear"
      };
    return (
        <>
            {/*** Carousel ***/}
            {/* {console.log(product.product)} */}
            <section className='sliders'>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col- px-0'>
                            <div className='gutter'>
                                <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                                    <div className="carousel-indicators">
                                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                    </div>
                                    <div className="carousel-inner">
                                        <div className="carousel-item active">
                                        <img src={slider_image1} className="d-block w-100" alt="..." />
                                        <div className="carousel-caption d-none d-md-block">
                                            <h1  className='carousel-title'>FASHION IS WHAT YOU BUY</h1>
                                            <p className='carousel-text'>Style is what you do with it</p>
                                            <Link to='shop' className="btn btn-dark rounded-0 py-2 px-4 product-btn">SHOP NOW</Link>
                                        </div>
                                        </div>
                                        <div className="carousel-item">
                                        <img src={slider_image2} className="d-block w-100" alt="..." />
                                        <div className="carousel-caption d-none d-md-block">
                                            <h1 className='carousel-title'>FASHION IS WHAT YOU BUY</h1>
                                            <p className='carousel-text'>Style is what you do with it</p>
                                            <button className="btn btn-dark rounded-0 py-2 px-4 product-btn">SHOP NOW</button>
                                        </div>
                                        </div>
                                    </div>
                                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                                        <i className="bi bi-arrow-left-circle-fill carousel-arrows"></i>
                                    </button>
                                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                                        <i className="bi bi-arrow-right-circle-fill carousel-arrows"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*** Accessories ***/}
            <section>
                <div className='container'>
                    <div className='row py-5'>
                        {
                            HomeTopAccessories.map((acce,index)=>{
                                return(
                                    <>
                                        <div className='col-md-4' key={index}>
                                            <div className='gutter'>
                                                <div className="card border-0">
                                                    <div className="card-body text-center pt-0">
                                                        <h4 className="card-text small-headings">{acce.title}</h4>
                                                    </div>
                                                    <img src={acce.images} className="card-img-top img-fluid" alt="..." />
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                )
                            })
                        }
                        
                    </div>
                </div>
            </section>
            {/*** Accessories ***/}
            <section style={{backgroundColor:'#C8C7CC'}}>
                <div className='container'>
                    <div className='row'>
                        <div className='col-'>
                            <div className='gutter'>
                                <div>
                                    <img src={offers} className="img-fluid" alt="..." />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*** Featured Products ***/}
            <section>
                <div className='container py-5 pb-0'>
                    <div className='row products-row'>
                        <div className='col-12 pb-4'>
                            <div className='gutter text-center'>
                                <h2 className='small-headings'>Featured Products</h2>
                            </div>
                        </div>
                    </div>

                    <div className='row products-row'>
                        {
                            Object.keys(Products).length>0?
                            <>
                                {
                                    Products.slice(1,5).map((elem,index)=>{
                                    return(
                                            <div className='col-3 pb-4' key={index}>

                                                <div className='gutter'>
                                                    <div className="card product border-0">
                                                        <div className='product-image'>
                                                            <img src={elem.pimage} className="card-img-top" alt="..." />
                                                        </div>
                                                        <div className="card-body text-center">
                                                            <p className="card-title product-title">{elem.pname}</p>
                                                            <p className="card-text product-price">$ {elem.pprice}.00</p>
                                                            <Link to="/product" className="btn btn-dark rounded-0 py-2 px-4 product-btn">View Product</Link>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        )
                                })
                            }   
                            </>: <> </>
                        }
                    </div>
                </div>
            </section>
            {/*** Get The look ***/}
            <section className='home-get-look'>
                <div className='container py-4'>
                    <div className='row products-row pt-3'>
                        <div className='col-12 pb-4'>
                            <div className='gutter text-center'>
                                <h2 className='small-headings'>Get The Look</h2>
                            </div>
                        </div>
                    </div>

                    <div className='row products-row'>
                        {
                            HomegetLook.map((im,index)=>{
                                return(
                                    <div className='col-md-4 pb-4' key={index}>
                                        <div className='gutter'>
                                            <img src={im.image} alt='...'/>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </section>
            {/*** Get The Scoop ***/}
            <section className='home-get-scoop'>
                <div className='container py-4'>
                    <div className='row products-row pt-3'>
                        <div className='col-12 pb-4'>
                            <div className='gutter text-center'>
                                <h2 className='small-headings'>Get The Scoop</h2>
                            </div>
                        </div>
                    </div>

                    <div className='row'>
                        {
                            // <pre>{JSON.stringify(HomeBlog)}</pre>
                            HomeBlog.map((blog,index)=>{
                                return(
                                    <div className='col-md-4 pb-4' key={index}>
                                        <div className='gutter'>
                                            <div className="card">
                                                <img src={blog.image} className="card-img-top" alt="..." />
                                                <div className="card-body">
                                                    <h2 className="card-title small-headings home-blog-heading">{blog.title}</h2>
                                                    <p className="card-text">{blog.text}</p>
                                                    <Link to="/" className="btn px-0 blog-btn">READ MORE</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                                
                    </div>
                </div>
            </section>
            {/*** Get The Scoop ***/}
            <section className='home-logos home-get-look'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12 px-0'>
                            <div className='gutter text-center'>
                                <Slider {...settings}>
                                    <div className="logo-slider">
                                        <img src={sllogo1} className='img-fluid' alt='...'/>
                                    </div>
                                    <div className="logo-slider">
                                        <img src={sllogo2} className='img-fluid' alt='...'/>
                                    </div>
                                    <div className="logo-slider">
                                        <img src={sllogo3} className='img-fluid' alt='...'/>  
                                    </div>
                                    <div className="logo-slider">
                                        <img src={sllogo4} className='img-fluid' alt='...'/>
                                    </div>
                                    <div className="logo-slider">
                                        <img src={sllogo5} className='img-fluid' alt='...'/>
                                    </div>
                                    <div className="logo-slider">
                                        <img src={sllogo6} className='img-fluid' alt='...'/>  
                                    </div>
                                </Slider>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home;
