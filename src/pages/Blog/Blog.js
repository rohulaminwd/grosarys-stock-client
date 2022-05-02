import React from 'react';
import './blog.css'

const Blog = () => {
    return (
        <div className='container my-5'>
            <h2 className='my-5 text-primary'>Question and Answer</h2>
            <div className="answer text-start">
                <div className="ans" data-aos="zoom-in-right" data-aos-duration="800">
                    <h6 className='text-danger fw-bold'>Why are you using firebase? What other options do you have to implement authentication?</h6>
                    <div className="my-3">
                        <p>Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords and many option so Everything can be made useful if
                             you use your mind, can’t it be?  Like the machine is doing with the men.
                             many option implement authentication that Express, Node js, Next js, php, laravel etc. 
                             </p>
                    </div>
                </div>
                <div className="ans" data-aos="zoom-in-left" data-aos-duration="800">
                    <h6 className='text-danger fw-bold'>What other services does firebase provide other than authentication..?</h6>
                    <div className="my-3">
                        <p>However, any platform as comprehensive as Firebase is bound to lack advanced features.Cloud Firestore, Cloud Functions, Authentication, 
                            Hosting, Cloud Storage, Google Analytics, Predictions, Cloud Messaging, 
                            Dynamic Links, Remote Config etc. </p>
                    </div>
                </div>
            </div>
            <div className="row text-start ans my-5" data-aos="zoom-in-up" data-aos-duration="1000">
                <h6 className='text-danger fw-bold'>Difference between authorization and authentication..?</h6>
                <div className="col-md-6">
                    <div className="">
                    <p className='text-center fw-bold'>Authorization</p>
                    <p>1. Authentication verifies who the user is.</p>
                    <p>2. Authentication is the first step of a good identity and access management process.</p>
                    <p>3. Authentication is visible to and partially changeable by the user..</p>
                    </div>
                </div>
                <div className="col-md-6 border-start border-3">
                    <div className="">
                    <p className='text-center fw-bold'>Authentication</p>
                    <p>1. Authorization determines what resources a user can access.</p>
                    <p>2. Authorization always takes place after authentication.</p>
                    <p>3. Authorization isn’t visible to or changeable by the user..</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;