import React from 'react';
import { Link } from 'react-router-dom';
import Cart from '../../components/Cart/Cart';
import useProducts from '../../hooks/useProducts';
import banner from '../../images/product (3).png'
import banner1 from '../../images/product (4).png'
import './Home.css'

const Home = ({handleUpdate}) => {
    const [product, setProduct] = useProducts()
    
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
                <Link className='btn btn-primary fw-bold mt-5' to='/inventory'>Manage Inventory</Link>
            </div>
        </div>
    );
};

export default Home;