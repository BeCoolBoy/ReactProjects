import React from 'react';
import Banner from '../../Images/banner-image.jpg';

const Home = ()=>{
    return (
        <>
            <section>
                <div  className='container-fluid' id="slider">
                    <div  className='row'>
                        <div  className='col-12 px-0'>
                            <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img src={Banner} className="w-100" alt="..." />
                                    </div>
                                </div>
                            </div>
                        </div> 
                    </div> 
                </div>
            </section>

            <section>
                <div  className='container my-5'>
                    <div  className='row py-3'>
                        <div  className='col text-center'>
                            <h4 className='sm-heading'>PROVIDE HIGH QUALITY </h4>
                            <h1 className='lg-heading'>The Consultancy </h1>
                        </div> 
                    </div> 

                    <div  className='row py-3 pb-0'>
                        <div  className='col'>
                            <div className='text-content'>
                                <p>All Dimensions Design Consulting was formed by Gus Affara in 2019 as an independant consultacy driven to provide high quality specialist advice and design in the field of building services engineering.</p>
                                <p>Gus is a mechanical enginner, registered with the Institute of Engineers Australia. He is a registered building practitioner (RBP) in victoria. Gus has over 20 years of extensive experience related to most sectors of the building services industry.</p>
                                <p>All Dimensions Design main operation goal is to rectify the ongoing design issues caused by some tier 1 & Tier 2 consulting engineers who became less consultative and more about profit margins.</p>
                                <p>All Dimensions Design is fully committed to provide high quality, cost effective and personalised service to a broader range of clients and sub-contractors.</p>
                            </div>
                        </div> 
                    </div> 
                </div>
            </section>

            <section>
                <div  className='container my-md-5 mb-4'>
                    <div  className='row py-3 pt-0'>
                        <div  className='col text-center'>
                            <h4 className='sm-heading'>BUILDING ENGINEERING SERVICES</h4>
                            <h1 className='lg-heading'>The Services</h1>
                        </div> 
                    </div> 

                    <div  className='row py-3'>
                        <div  className='col'>
                            <div className='gutter'>
                                <h4>Mechanical HVAC Services:</h4>
                            </div>
                        </div> 
                    </div> 

                    <div  className='row py-3 pt-0'>
                        <div  className='col-md-6'>
                            <div className='gutter'>
                                <div className='d-flex home-services-list'>
                                    <i className="bi bi-asterisk"></i>
                                    <p>Refrigeration Plants.</p>
                                </div>
                                <div className='d-flex home-services-list'>
                                    <i className="bi bi-asterisk"></i>
                                    <p>Chilled Water & Boiler Plants.</p>
                                </div>
                                <div className='d-flex home-services-list'>
                                    <i className="bi bi-asterisk"></i>
                                    <p>Clean Room And Laboratory Systems Design.</p>
                                </div>
                                <div className='d-flex home-services-list'>
                                    <i className="bi bi-asterisk"></i>
                                    <p>Smoke Exhaust And Fire Management Systems.</p>
                                </div>
                                <div className='d-flex home-services-list'>
                                    <i className="bi bi-asterisk"></i>
                                    <p>Commercial Kitchen Systems Include UV Equipment.</p>
                                </div>
                            </div>
                        </div>

                        <div  className='col-md-6'>
                            <div className='gutter'>
                                <div className='d-flex home-services-list'>
                                    <i className="bi bi-asterisk"></i>
                                    <p>Building Codes Consultation.</p>
                                </div>
                                <div className='d-flex home-services-list'>
                                    <i className="bi bi-asterisk"></i>
                                    <p>Diesel Engines And Gas Turbines.</p>
                                </div>
                                <div className='d-flex home-services-list'>
                                    <i className="bi bi-asterisk"></i>
                                    <p>Air Conditioning, Heating & Ventilation.</p>
                                </div>
                                <div className='d-flex home-services-list'>
                                    <i className="bi bi-asterisk"></i>
                                    <p>Co-Generation And Tri-Generation Case Study.</p>
                                </div>
                                <div className='d-flex home-services-list'>
                                    <i className="bi bi-asterisk"></i>
                                    <p>Peer Review – To All Major Commercial Projects.</p>
                                </div>
                            </div>
                        </div> 

                        <div  className='row py-3 pb-0 mt-4'>
                            <div  className='col'>
                                <div className='gutter text-center'>
                                    <button className='btn rounded-pill btn-bg-color'>Read More</button>
                                </div>
                            </div> 
                        </div> 
                    </div> 
                </div>
            </section>
        </>
    )
}

export default Home;
