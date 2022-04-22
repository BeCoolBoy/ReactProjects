import React,{useState,useEffect,useRef} from 'react'

let Contact = ()=>{
    const [formHeight,setformHeight]=useState(0);
    
    let rightFormcol = useRef(null);
    useEffect(()=>{
      let fmHeight = rightFormcol.current.offsetHeight;
      setformHeight(fmHeight);
    },[])
    return (
        <>
          <section>
                <div className='container py-5'>
                    <div className='row'>
                        <div className='col-'>
                            <div className='gutter text-center'>
                                <h2 className='small-headings'>Contact</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*** Contact ***/}
            <section className='contact-sec'>
                <div className='container pb-5'>
                    <div className='row'>

                        <div className='col-md-6'>
                            <div className='gutter'>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d497698.6600654742!2d77.35073026990406!3d12.954517015853252!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1640846415611!5m2!1sen!2sin" style={{width:'100%',height:`${formHeight}px`}} title='Location'></iframe>
                            </div>
                        </div>

                        <div className='col-md-6 c-form-column' ref={rightFormcol}>
                            <div className='gutter'>
                              <form>
                                <div className="mb-3">
                                  <label className="form-label">Name</label>
                                  <input type="text" name='cname' className="form-control rounded-0" />
                                </div>
                                <div className="mb-3">
                                  <label className="form-label">Email</label>
                                  <input type="email" name='cemail' className="form-control rounded-0" />
                                </div>
                                <div className="mb-3">
                                  <label className="form-label">Subject</label>
                                  <input type="text" name='csubject' className="form-control rounded-0" />
                                </div>
                                <div className="mb-3">
                                  <label className="form-label">Message</label>
                                  <textarea name='cname' className="form-control rounded-0"></textarea>
                                </div>
                                <button type="submit" className="btn btn-dark rounded-0 py-2 px-4 mt-3 product-btn form-control">SUBMIT</button>
                              </form>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact;
