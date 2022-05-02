import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loading = () => {
    return (
        <div style={{height: '50vh' }} className='w-100 d-flex align-items-center justify-content-center'>
            <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        </div>
    );
};

export default Loading;