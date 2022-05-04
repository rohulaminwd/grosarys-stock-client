import React from 'react';
import { Link } from 'react-router-dom';
import {FaHandsHelping} from 'react-icons/fa'
import {GrDeliver} from 'react-icons/gr'
import {GiCardDiscard} from 'react-icons/gi'
import {BsEmojiSmile} from 'react-icons/bs'
import {Ri24HoursFill} from 'react-icons/ri'
import useProducts from '../../hooks/useProducts';
import banner from '../../images/product (3).png'
import support from '../../images/support.png'
import './Home.css'

const Home = ({handleUpdate}) => {
    const [product, setProduct] = useProducts()
    console.log(product.length)
    
    return (
        <div>
            <div className="banner row">
                <div className="col-md-6">
                    <div className="">
                        <h3>Start the shop</h3>
                        <h3>Start the shop</h3>
                        <h3>Start the shop</h3>
                        <h3>Start the shop</h3>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="img">
                        <img src={banner} className='img-fluid' alt="" />
                    </div>
                </div>
            </div>

            <div className="inventory my-5">
                <h3 className='fw-bold text-primary my-4'>Our Manage Items</h3>
                <div className="container inventory-container">
                    {
                        product.slice(0, 6).map(p => <div className='update-cart'>
                            <div className="cart-img p-3">
                                <img src={p.img} className='img-fluid' alt="" />
                            </div>
                            <div className="text-start p-3">
                                <h5>{p.name}</h5>
                                <p>{p.title}</p>
                                <div className="d-flex align-items-center justify-content-between">
                                    <h5 className='fw-bold text-primary'>Seller: {p.seller}</h5> 
                                    <div className="quantity btn fw-bold">{p.stock}</div> 
                                </div>
                                <div className="d-flex align-items-center justify-content-between mt-4">
                                    <h5 className='fw-bold text-danger'>${p.price}</h5>
                                    <Link onClick={() => handleUpdate(p)} to='/update' className='btn cart-btn fw-bold rounded-pill'>Update</Link>
                                </div>
                            </div>
                        </div>)
                    }
                </div>
                <h1>all item: {product.length}</h1>
                <Link className='btn btn-primary fw-bold mt-5' to='/inventory'>Manage Inventory</Link>
            </div>

            <div className="newCollection py-5 my-5">
                <h2 className='mb-4 text-primary'>What We Provide?</h2>
                <div className="container provide-container">
                    <div data-aos="zoom-in-down" 
                        data-aos-duration="1000"
                        className="provider text-start">
                        <div className="d-flex align-items-center justify-content-center  mb-3">
                            <div className="img-provider">
                                <div className='display-5 fw-bold'><FaHandsHelping /></div>
                            </div>
                            <div className="fw-bold me-auto">
                                <h4>Easy Returns</h4>
                                <p className='text-muted mb-0'>best service</p>
                            </div>
                        </div>
                        <div className="pt-3 border-top border-2">
                            <p>Knowledge base that organized collection system</p>
                            <Link className='text-decoration-none fw-bold' to='/'>VIEW MORE</Link>
                        </div>
                    </div>

                    <div data-aos="zoom-in-down" 
                        data-aos-duration="1000"
                        className="provider text-start">
                        <div className="d-flex align-items-center justify-content-center  mb-3">
                            <div className="img-provider">
                                <div className='display-5 fw-bold'><GrDeliver /></div>
                            </div>
                            <div className="fw-bold me-auto">
                                <h4>Free Delivery</h4>
                                <p className='text-muted mb-0'>best service</p>
                            </div>
                        </div>
                        <div className="pt-3 border-top border-2">
                            <p>Free delivery organized collection system</p>
                            <Link className='text-decoration-none fw-bold' to='/'>VIEW MORE</Link>
                        </div>
                    </div>

                    <div data-aos="zoom-in-down" 
                        data-aos-duration="1000"
                        className="provider text-start">
                        <div className="d-flex align-items-center justify-content-center  mb-3">
                            <div className="img-provider">
                                <div className='display-5 fw-bold'><GiCardDiscard /></div>
                            </div>
                            <div className="fw-bold me-auto">
                                <h4>Daily Discount</h4>
                                <p className='text-muted mb-0'>best service</p>
                            </div>
                        </div>
                        <div className="pt-3 border-top border-2">
                            <p>Daily Discount that organized collection system</p>
                            <Link className='text-decoration-none fw-bold' to='/'>VIEW MORE</Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="online-support py-5">
                <div className="container row d-flex justify-content-between align-items-center">
                    <div className="col-md-5">
                        <div className="img">
                            <img src={support} className='img-fluid' alt="" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="text-start">
                            <div className="">
                                <h1>Ganic Online Support</h1>
                                <p>Tamin ipsum is simply dummy the prinng and tysetting industry. Lorem ipsum has been the industry's standard dummy that everince prinng when unknown printer took galley.</p>
                            </div>
                            <div className="d-flex emo">
                                <div className="border-end border-2 pe-2">
                                    <p>AROUND THE CLOCK SUPPORT</p>
                                    <div className="text-success d-flex"><BsEmojiSmile className='display-4' /> <h1 className='text-secondary ms-3'>98.9%</h1></div>
                                </div>
                                <div className="px-2 emo">
                                    <p>CUSTOMER HAPPINESS RATING</p>
                                    <div className="d-flex text-success"><Ri24HoursFill className='display-4' /> <h1 className='text-secondary ms-3'>24/7</h1></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;