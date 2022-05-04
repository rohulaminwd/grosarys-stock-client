import React from 'react';
import './AddItem.css'

const AddItem = () => {

    const hendelProductAdd = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const seller = e.target.seller.value;
        const img = e.target.img.value;
        const stock = e.target.stock.value;
        const price = e.target.price.value;
        const title = e.target.title.value;
        const product = {name, seller, img, stock, price, title}
        console.log(product)
        
        // send data to the server
        fetch('http://localhost:5000/product', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
        .then (res => res.json())
        .then (data => {
            console.log('SUCCESS DATA LOADE',data)
            e.target.reset();
            alert('product added successfully')
        })
        
    }
    return (
        <div>
            <div className="update-item my-5">
                <h4 className='update-header'>Add Item</h4>
                <form onSubmit={hendelProductAdd} action="">
                    <div className="form-item">
                        <input type="text" name='name' className='form-control mb-3' placeholder='Product name' required />
                        <input type="text" name='seller' className='form-control mb-3' placeholder='Supplier name' required />
                        <input type="text" name='img' className='form-control mb-3' placeholder='Upload img' required />
                        <input type="number" name='stock' className='form-control mb-3' placeholder='Quantity Stock' required />
                        <input type="number" name='price' className='form-control mb-3' placeholder='Price' required />
                        <textarea type="text" name='title' className='form-control mb-3' cols="5" rows="2" placeholder='Product description' required />
                    </div>
                    <div className="d-flex align-items-center justify-content-between p-3 link-item">
                        <button type="submit" className='btn w-50 mx-auto cart-btn fw-bold rounded-pill'>add item</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddItem;