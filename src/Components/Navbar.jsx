import React, { use } from 'react';
import { NavLink } from 'react-router';
import userImg from "../assets/user.png"
import { Link } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';
const Navbar = () => {
    const {user,logOut} = use(AuthContext);
    const handleLogOut =()=>{
       logOut().then(()=>{
        alert("log Out Successful")
       })
       .catch((error)=>{
        const errorMessage = error.errorMessage
        alert(errorMessage)
       })
    }
    return (
        <div className='flex justify-between items-center'>
        <div className="">{user && user.email}</div>
        <div className="nav flex gap-5 text-accent">
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/about'>About</NavLink>
            <NavLink to='/career'>Career</NavLink>
        </div>
        <div className="login-btn flex items-center gap-5">
            <img className='w-12 rounded-full' src={`${user? user.photoURL: userImg}`} alt="" />
            {user ? <button onClick={handleLogOut} className='btn btn-primary px-10'>Log Out</button>: <Link to="/auth/login"  className='btn btn-primary px-10'>Login</Link> }
            
        </div>
       
        </div>
    );
};

export default Navbar;