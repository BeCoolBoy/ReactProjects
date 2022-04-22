import React from 'react';
import {Link} from 'react-router-dom';

const Projects = ()=>{
    return (
        <>
            <section className='breadcrumb-sec d-flex align-items-center'>
                <div  className='container'>
                    <div  className='row text-white'>
                        <div  className='col-12 text-center'>
                            <h1 className='lg-heading'>Projects</h1>
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb justify-content-center">
                                    <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                                    <li className="breadcrumb-item active" aria-current="page">Projects</li>
                                </ol>
                            </nav>
                        </div> 
                    </div>  
                </div>
            </section>

            <section>
                <div  className='container my-5'>
                    <div  className='row py-3'>
                        <div  className='col-12 text-center'>
                            <h4 className='sm-heading'>OUR PROJECT HISTORY</h4>
                            <h1 className='lg-heading'>Project History</h1>
                        </div> 
                    </div> 

                    <div  className='row py-3'>
                        <div  className='col-12'>
                            <div className='gutter'>
                                <h4>Including But Not Limited To:</h4>
                            </div>
                        </div> 
                    </div> 

                    <div  className='row py-3 pt-0'>
                        <div  className='col-12 col-md-6'>
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
                                <div className='d-flex home-services-list'>
                                    <i className="bi bi-asterisk"></i>
                                    <p>Cleanaway HVAC Services – Dandenong South.</p>
                                </div>
                                <div className='d-flex home-services-list'>
                                    <i className="bi bi-asterisk"></i>
                                    <p>Close Control Clean Rooms – Dulux.</p>
                                </div>
                                <div className='d-flex home-services-list'>
                                    <i className="bi bi-asterisk"></i>
                                    <p>Epping Secondary College – Epping.</p>
                                </div>
                            </div>
                        </div>

                        <div  className='col-12 col-md-6'>
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
                                <div className='d-flex home-services-list'>
                                    <i className="bi bi-asterisk"></i>
                                    <p>Australian National University – (Major Developments) – Canberra.</p>
                                </div>
                                <div className='d-flex home-services-list'>
                                    <i className="bi bi-asterisk"></i>
                                    <p>Deakin University – (Major Developments) Geelong Campus.</p>
                                </div>
                                <div className='d-flex home-services-list'>
                                    <i className="bi bi-asterisk"></i>
                                    <p>Cleanrooms Facilities (Major Development).</p>
                                </div>
                            </div>
                        </div> 

                        <div  className='row py-3 pb-0 mt-4'>
                            <div  className='col-12'>
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

export default Projects;
