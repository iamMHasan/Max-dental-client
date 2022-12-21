import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom'
import { AuthContext } from '../context/AuthProvider';
import logo from '../assets/favicon.png'

const Navbar = () => {
    const { logOutUser, user } = useContext(AuthContext)
    const handleLogOut = () => {
        logOutUser()
            .then(() => {
                localStorage.removeItem('kenoBeco')
            })
            .catch(e => console.log(e))
    }
    const menuItems = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/blog'>Blog</Link></li>
        {
            user?.uid ?
                <>
                    <li><Link to='/myreviews'>My reviews</Link></li>
                    <li><Link to='/addservice'> Add service</Link></li>
                    <li><Link onClick={handleLogOut} to='/register'>Log Out</Link></li>
                </>
                :
                <>
                    <li><Link to='/login'>Login</Link></li>
                    <li><Link to='/register'>Register</Link></li></>
        }

    </>
    return (
        <div className="navbar p-0 ">
            <div className="navbar-start">
                <Link to='/'>
                    <div className='flex items-center'>
                        <img className='mr-3' src={logo} alt="" />
                        <p>Rayn's Dental</p>
                    </div>
                </Link>
                <div className="dropdown">
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <Link className="btn btn-ghost normal-case text-xl"><img alt="" /></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>
            <div className="navbar-end">
                <img className='w-[40px] mr-3 h-[40px] rounded-full' src={user?.photoURL} alt="" />
                <p>{user?.displayName}</p>
            </div>
        </div>
    );
};

export default Navbar;