import React from 'react';
import './Update.css'

const UpdaeteItem = () => {
    return (
        <div>
            <div className="update-item">
                <h4 className='text-primary mb-4'>Update Item</h4>
                <form action="">
                    <input type="text" name='name' className='form-control mb-3' placeholder='Product name' required />
                    <input type="text" name='supplier' className='form-control mb-3' placeholder='Supplier name' required />
                    <input type="text" name='img' className='form-control mb-3' placeholder='Upload img' required />
                    <textarea type="text" name='description' className='form-control mb-3' cols="5" rows="2" placeholder='Product description' required />
                </form>
            </div>
        </div>
    );
};

export default UpdaeteItem;