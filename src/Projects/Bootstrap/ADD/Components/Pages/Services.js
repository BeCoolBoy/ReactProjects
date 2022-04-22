import React from 'react';
import { Link } from 'react-router-dom';

const Services = ()=>{
    return (
        <>
            <section className='breadcrumb-sec d-flex align-items-center'>
                <div  className='container'>
                    <div  className='row text-white'>
                        <div  className='col-12 text-center'>
                            <h1 className='lg-heading'>Services</h1>
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb justify-content-center">
                                    <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                                    <li className="breadcrumb-item active" aria-current="page">Services</li>
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
                            <h4 className='sm-heading'>BUILDING ENGINEERING SERVICES</h4>
                            <h1 className='lg-heading'>The Services</h1>
                        </div> 
                    </div>

                    <div  className='row py-3'>

                        <div  className='col-12'>
                            <div className='gutter text-content'>
                                <p>All Dimensions Design offers design, implementation, commissioning and post occupancy investigation of building engineering services in all forms of commercial, industrial and residential buildings. The engineering disciplines offered by the practice include:</p>
                                <div className='d-flex home-services-list'>
                                    <i className="bi bi-asterisk"></i>
                                    <p>Mechanical (Heating, Ventilation & Air Conditioning)</p>
                                </div>
                                <div className='d-flex home-services-list'>
                                    <i className="bi bi-asterisk"></i>
                                    <p>Vertical Transportation</p>
                                </div>
                                <div className='d-flex home-services-list'>
                                    <i className="bi bi-asterisk"></i>
                                    <p>Hydraulics & Civil Services [ TBC ]</p>
                                </div>
                                <div className='d-flex home-services-list'>
                                    <i className="bi bi-asterisk"></i>
                                    <p>Electrical (Power & Lighting) [ TBC ]</p>
                                </div>
                                <div className='d-flex home-services-list'>
                                    <i className="bi bi-asterisk"></i>
                                    <p>Voice & Data Communications [ TBC ]</p>
                                </div>
                                <div className='d-flex home-services-list'>
                                    <i className="bi bi-asterisk"></i>
                                    <p>Security & Audio Visual Services [ TBC ]</p>
                                </div>
                                <div className='d-flex home-services-list mb-3'>
                                    <i className="bi bi-asterisk"></i>
                                    <p>Fire Protection [ TBC ]</p>
                                </div>
                                <p>An area in which we have been particularly active in recent times is due diligence inspections and the investigation and reporting on problems with existing building services on behalf of either the building owner or tenant</p>
                            </div>
                        </div> 
                    </div>
                    
                    <div  className='row py-3 mt-3'>
                        <div  className='col-12 text-center'>
                            <h4 className='sm-heading'>PROFESSIONAL SUPPORT STAFF</h4>
                            <h1 className='lg-heading'>Our Team</h1>
                        </div> 
                    </div>

                    <div  className='row py-3 pb-0'>
                        <div  className='col-12'>
                            <div className='text-content'>
                                <p>In order to meet the fluctuating workload that is inherent in the building industry we have established a collaborative group of experienced senior engineers and para-professional support staff.</p>
                                <p>After consultation with our clients we assemble a project team with the most appropriate skill set to address all aspects of the client’s brief and ultimately achieve the project’s goal. All Dimensions Consulting shoulders the overall responsibility for the delivery of all projects undertaken. This approach enables us to minimise business overheads and thereby provide our clients with a competitive fee structure.</p>
                            </div>
                        </div> 
                    </div>
                    
                </div>
            </section>
        </>
    )
}

export default Services;
