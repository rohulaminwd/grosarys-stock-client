import React, {useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import {FiShoppingCart} from 'react-icons/fi'
import { Link, NavLink } from 'react-router-dom';
import logo from '../../images/logo.png'
import "./navbar.css"
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';
import {HiOutlineLogout} from 'react-icons/hi'
import {FaUserEdit} from 'react-icons/fa'
import {CgProfile} from 'react-icons/cg'
import {BiMessageAltAdd} from 'react-icons/bi'
import {AiOutlineFileProtect} from 'react-icons/ai'
import {AiOutlinePropertySafety} from 'react-icons/ai'


const Navbars = () => {
    
const [toggle, setToggle] = useState('none');

    const [user] = useAuthState(auth)
    const SignOut = () => {
        signOut(auth)
    }
    
const displayTaggle = () => {
    if(toggle === 'none'){
        setToggle('block')
    }else{
        setToggle('none')
    }
}

console.log(toggle)
    return (
        <div>
            <Navbar bg="" className='bg-nav' expand="lg">
                <Container>
                    <Navbar.Brand as={Link} to='/'>
                        <img src={logo} className='logo' alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto d-flex align-items-center">
                        <NavLink className={({ isActive }) => isActive? 'actived-link' : 'linkd'} to="/">Home</NavLink>
                        <NavLink className={({ isActive }) => isActive? 'actived-link' : 'linkd'} to="/blog">Blog</NavLink>
                        {
                            user ?
                            <>  
                                <NavLink className={({ isActive }) => isActive? 'actived-link' : 'linkd'} to="/inventory">ManageItem</NavLink>
                                <NavLink className={({ isActive }) => isActive? 'actived-link' : 'linkd'} to="/additem">AddItem</NavLink>
                                <NavLink className={({ isActive }) => isActive? 'actived-link' : 'linkd'} to="/myitem">MyItem</NavLink>
                                <div onClick={() => displayTaggle()} className='user-profile ms-4'>
                                    <img src={user?.photoURL} className='img-fluid opacity-10 cursor' alt="" />
                                    <CgProfile className='fs-2 opacity-1 text-danger mt-1'></CgProfile>
                                    <div className='edite-profile' style={{display: toggle}}>
                                        <div className="profile">
                                            <div className="p-img cursor">
                                                <img src={user?.photoURL} className='img-fluid' alt="" />
                                            </div>
                                            <h6 className='m-2'>{user?.displayName}</h6>
                                        </div>
                                        <h6 className='cursor'><FaUserEdit /> Edite profile</h6>
                                        <Link className='text-decoration-none d-block text-primary fw-bold' to='/inventory'><AiOutlineFileProtect /> Manage Item</Link>
                                        <Link className='text-decoration-none d-block text-primary fw-bold' to='/myitem'><AiOutlinePropertySafety /> My Item</Link>
                                        <Link className='text-decoration-none d-block text-primary fw-bold' to='/additem'><BiMessageAltAdd /> Add Item</Link>
                                        <h6 className='cursor fw-bold text-danger' onClick={SignOut}><HiOutlineLogout /> LogOut</h6>
                                    </div>
                                </div>
                            </>
                            :
                            <NavLink className="fw-bold ms-2" to="/login">
                                <button className='btn text-light rounded-pill fw-bold sign-btn'>login</button>
                            </NavLink>
                        }
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Navbars;