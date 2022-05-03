import React from 'react';
import { Link } from 'react-router-dom';
import Cart from '../../components/Cart/Cart';
import useProducts from '../../hooks/useProducts';
import './Inventory.css'

const Inventory = () => {
    const [product, setProduct] = useProducts()
    return (
        <div>
            <div className="top-section container my-5">
                <div className="all-item">
                    <h5 className='fw-bold'>All Item: 12</h5>
                </div>
                <Link to='/additem' className="add-item btn">
                    <h5 className='fw-bold'>Add item</h5>
                </Link>
                <Link to='/myitem' className="my-item btn">
                    <h5 className='fw-bold'>My Item</h5>
                </Link>
            </div>
            <div className="my-5">
                <div className="container products-container">
                    {
                        product.map(p => <Cart 
                         key={p.id}
                         product={p}
                        ></Cart>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Inventory;