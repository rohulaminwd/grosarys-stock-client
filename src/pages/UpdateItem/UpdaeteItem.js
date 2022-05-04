import React from 'react';
import { Link } from 'react-router-dom';
import './Update.css'

const UpdaeteItem = ({updateProduct}) => {
    const {img, name, price, title, seller, stock} = updateProduct
    return (
        <div className='my-5 container'>
            <div className="row d-flex justify-content-between align-items-center">
                <div className="col-md-6">
                    <div className='update-cart'>
                        <div className="cart-img p-3">
                            <img src={img} className='img-fluid' alt="" />
                        </div>
                        <div className="text-start p-3">
                            <h5>{name}</h5>
                            <p>{title}</p>
                            <div className="d-flex align-items-center justify-content-between">
                                <h5 className='fw-bold text-primary'>{seller}</h5> 
                                <div className="quantity btn fw-bold">{stock}</div>  
                                {/* <div className="d-flex align-items-center justify-content-center border rounded-pill">
                                    <span className='cursor p-2 mx-1 fw-bold'>-</span>
                                    <span className='cursor p-2 mx-1 fw-bold'>1</span>
                                    <span className='cursor p-2 mx-1 fw-bold'>+</span>
                                </div> */}
                            </div>
                            <div className="d-flex align-items-center justify-content-between mt-4">
                                <h5 className='fw-bold text-danger'>${price}</h5>
                                <button className='btn cart-btn fw-bold rounded-pill'>delivered</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-5">
                    <div className="update-item">
                        <h4 className='update-header'>Update Quantity and Link</h4>
                        <form action="" className='form-item'>
                            <div className="update-quantity">
                                <input type="text" name='name' className='quantity-input' placeholder='Quantity' required />
                                <input className='quantity-btn btn btn-danger' type="submit" value="Add Quantity" />
                            </div>
                        </form>
                        <div className="d-flex align-items-center justify-content-between p-3">
                            <Link to='/additem' className='btn cart-btn fw-bold rounded-pill'>Add Item</Link>
                            <button className='btn cart-btn fw-bold rounded-pill'>My Item</button>
                            <button className='btn cart-btn fw-bold rounded-pill'>Manage Item</button>
                        </div>
                        <div className="d-flex align-items-center justify-content-between p-3 link-item">
                         <button className='btn w-50 mx-auto cart-btn fw-bold rounded-pill'>delivered</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdaeteItem;