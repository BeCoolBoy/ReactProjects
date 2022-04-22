import React,{useState} from 'react';
/** Gallery **/
import Gallery1 from '../../Images/gallery1.jpg';
import Gallery2 from '../../Images/gallery2.jpg';
import Gallery3 from '../../Images/gallery3.jpg';
import Gallery4 from '../../Images/gallery4.jpg';
import Gallery5 from '../../Images/gallery5.jpg';
import Gallery6 from '../../Images/gallery6.jpg';

let Gallery = ()=>{
    const GalleryImages = [
        {image:Gallery1},
        {image:Gallery2},
        {image:Gallery3},
        {image:Gallery4},
        {image:Gallery5},
        {image:Gallery6},
    ]
    const [mymodal,setmymodal] = useState(false);
    const [modalImg,setmodalImg] = useState('');
    
    const toggleHandler = (bnd)=>{
        setmymodal(!mymodal);
        setmodalImg(bnd);
    }
    return (
        <>
            <section>
                <div className='container py-5'>
                    <div className='row'>
                        <div className='col-'>
                            <div className='gutter text-center'>
                                <h2 className='small-headings'>Gallery</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*** Contact ***/}
            <section className='gallery-sec'>
                <div className='container pb-5'>
                    <div className='row'>
                        {
                           GalleryImages.map((im,index)=>{
                               return(
                                <div className='col-md-4 pb-4' key={index}>
                                    <div className='gutter gallery-gutter overflow-hidden' onClick={toggleHandler.bind(this,im.image)}>
                                        <img src={im.image} alt='...' className='img-fluid'/>
                                    </div>
                                </div> 
                               )
                           }) 
                        }
                        

                    </div>
                </div>
            </section>
            {/*** Popup ***/}
            {
                (mymodal)?<>
                    <div className='mypopup-container'>
                        <div className='mypopup-overlay' onClick={toggleHandler}></div>
                        <div className='my-popup-content'>
                            <img src={modalImg} className='img-fluid' alt='...'/>
                            <div className='close' onClick={toggleHandler}>
                                <i className="bi bi-x-circle text-danger "></i>
                            </div>
                        </div>
                    </div>
                </>:<></>
            }
        </>
    )
}

export default Gallery;
