import React from 'react';
import { Link } from 'react-router-dom';
import {AiOutlineDelete} from 'react-icons/ai'
import './cart.css'

const Cart = ({product}) => {
    const {img, title, name, price, quantity,} = product
    return (
        <div className='cart'>
            <div className="cart-img p-3">
                <img src={img} className='img-fluid' alt="" />
            </div>
            <div className="cart-details text-start p-3">
                <h5>{name}</h5>
                <p>{title}</p>
                <div className="d-flex align-items-center justify-content-between">
                    <h5 className='fw-bold text-primary'>Supler Name</h5> 
                    <div className="quantity btn fw-bold">1</div>  
                    <div className="d-flex align-items-center justify-content-center border rounded-pill">
                        <span className='cursor p-2 mx-1 fw-bold'>-</span>
                        <span className='cursor p-2 mx-1 fw-bold'>1</span>
                        <span className='cursor p-2 mx-1 fw-bold'>+</span>
                    </div>
                </div>
                <div className="d-flex align-items-center justify-content-between mt-4">
                    <h5 className='fw-bold text-danger'>${price}</h5>
                    <Link to='/update' className='btn cart-btn fw-bold rounded-pill'>Update</Link>
                    <div className='btn delete-btn fw-bold rounded-pill'><AiOutlineDelete /></div>
                </div>
            </div>
        </div>
    );
};

export default Cart;