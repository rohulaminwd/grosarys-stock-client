import React from 'react';
import { Link } from 'react-router-dom';
import Cart from '../../components/Cart/Cart';
import useProducts from '../../hooks/useProducts';
import banner from '../../images/product (3).png'
import banner1 from '../../images/product (4).png'
import './Home.css'

const Home = () => {
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
                        product.slice(0, 6).map(p => <Cart 
                         key={p.id}
                         product={p}
                        ></Cart>)
                    }
                </div>
                <Link className='btn btn-primary fw-bold mt-5' to='/inventory'>Manage Inventory</Link>
            </div>
        </div>
    );
};

export default Home;