import React,{useState,useEffect} from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';

const Shop = ()=>{
    const [search,setsearch] = useState('');
    let updateSearch = (e)=>{
        setsearch(e.target.value);
        //console.log(search);
    }
    const [products,setproducts] = useState([])
    useEffect(()=>{
        Axios.get("http://localhost:3005/produtcshopstart")
             .then((response)=>{
                 //console.log(response.data)
                 setproducts(response.data)
             })
             .catch()
    },[])
    return (
        <>
            <section>
                <div className='container py-5'>
                    <div className='row'>
                        <div className='col-'>
                            <div className='gutter text-center'>
                                <h2 className='small-headings'>SHOP</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className='container pb-4'>
                    <div className='row'>
                        <div className='col d-flex justify-content-between'>
                            <div className='gutter'>
                                <p>Shwing all {products.length} items</p>
                            </div>
                            <div className='gutter'>
                                <select onChange={updateSearch} className='form-control rounded-0 border-dark text-center shop-select'>
                                    <option value="">All Categories</option>
                                    <option value="Jacket">Jacket</option>
                                    <option value="Shoes">Shoes</option>
                                    <option value="Accessories">Accessories</option>
                                    <option value="Handbags">Handbags</option>
                                    <option value="Shorts">Shorts</option>
                                    <option value="Tops">Tops</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className='container pb-4 shop-products'>
                    <div className='row products-row'>
                        {
                            Object.keys(products).length>0?
                            <>
                                {
                                products.filter((elem)=>{return elem.pcategory.toLocaleLowerCase().includes(search.toLocaleLowerCase())}).map((elem,index)=>{
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
                            </>:<></>
                        }

                    </div>
                </div>
            </section>
        </>
    )
}

export default Shop;
