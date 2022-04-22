import React from 'react';
import {Link} from 'react-router-dom';

const Contact = ()=>{
    let Location = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3150.0151069008944!2d145.2897995150637!3d-37.859936944459385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad63b678623baeb%3A0x21078c56f44fc459!2sUnit%201%2F53%20Chandler%20Rd%2C%20Boronia%20VIC%203155%2C%20Australia!5e0!3m2!1sen!2sin!4v1614755466006!5m2!1sen!2sin';
    return (
        <>
            <section className='breadcrumb-sec d-flex align-items-center'>
                <div  className='container'>
                    <div  className='row text-white'>
                        <div  className='col-12 text-center'>
                            <h1 className='lg-heading'>Contact</h1>
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb justify-content-center">
                                    <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                                    <li className="breadcrumb-item active" aria-current="page">Contact</li>
                                </ol>
                            </nav>
                        </div> 
                    </div>  
                </div>
            </section>

            <section>
                <div  className='container my-5'>

                    <div className='row mt-5 col-container contact-contact'>

                        <div className='col-md-4 p-0 px-2 col-items border'>
                            <div className='gutter d-flex flex-column text-center p-2 py-3'>
                                <p><i class="bi bi-pin-map-fill primary-text-color"></i></p>
                                <h5>Address</h5>
                                <p className='last-des'>Unit 1/ 53 Chandler Road, Boronia VIC 3155</p>
                            </div>
                        </div>

                        <div className='col-md-4 p-0 px-2 col-items border'>
                            <div className='gutter d-flex flex-column text-center p-2 py-3'>
                                <p><i className="bi bi-telephone primary-text-color"></i></p>
                                <h5>Phone</h5>
                                <p className='last-des'>0435946330</p>
                            </div>
                        </div>

                        <div className='col-md-4 px-2 col-items border'>
                            <div className='gutter col d-flex flex-column text-center p-2 py-3'>
                                <p><i className="bi bi-envelope primary-text-color"></i></p>
                                <h5>Email</h5>
                                <p className='last-des'>info@alldimensionsdesign.com.au</p>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            <section>
            <div  className='container my-5'>

                <div className='row mt-5 col-container contact-contact'>

                    <div className='col-12 col-md-6 m-auto px-2'>
                        <div className='gutter'>
                            <h5 className='text-center'>For all enquiries please do not hesitate to send us a message</h5>
                        </div>
                    </div>
                </div>

                <div className='row mt-3 col-container contact-contact'>

                    <div className='col-12 col-md-9 m-auto p-0 border'>
                        <div className='gutter p-3 p-md-5'>
                            <form>
                                <div className="mb-3">
                                    <input type="text" className="form-control" placeholder='Your Name*'/>
                                </div>
                                <div className="mb-3">
                                    <input type="email" className="form-control" placeholder='Your Email*'/>
                                </div>
                                <div className="mb-3">
                                    <input type="text" className="form-control" placeholder='Your Number*'/>
                                </div>
                                <div className="mb-3">
                                    <input type="text" className="form-control" placeholder='Subject*'/>
                                </div>
                                <div className="mb-3">
                                    <input type="email" className="form-control" placeholder='Your Name*'/>
                                </div>
                                <div className="mb-4">
                                    <textarea className='form-control' placeholder='Message' ></textarea>
                                </div>
                                <div className="">
                                    <button className='btn rounded-pill btn-bg-color'>Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
            </section>

            <section className='c-map'>
                <div  className='container-fluid'>
                    <div  className='row'>
                        <div  className='col-12 p-0'>
                        <iframe src={Location} title="Location"></iframe>
                        </div> 
                    </div>  
                </div>
            </section>
        </>
    )
}

export default Contact;
