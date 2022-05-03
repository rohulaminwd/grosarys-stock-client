import React from 'react';

const AddItem = () => {
    return (
        <div>
            <div className="update-item my-5">
                <h4 className='update-header'>Add Item</h4>
                <form action="">
                    <input type="text" name='name' className='form-control mb-3' placeholder='Product name' required />
                    <input type="text" name='supplier' className='form-control mb-3' placeholder='Supplier name' required />
                    <input type="text" name='img' className='form-control mb-3' placeholder='Upload img' required />
                    <textarea type="text" name='description' className='form-control mb-3' cols="5" rows="2" placeholder='Product description' required />
                </form>
                <div className="d-flex align-items-center justify-content-between p-3 link-item">
                    <button type='submit' className='btn w-50 mx-auto cart-btn fw-bold rounded-pill'>add item</button>
                </div>
            </div>
        </div>
    );
};

export default AddItem;