import { useState } from 'react';
import { userData } from '../../library/dummydata';
import {Link} from "react-router-dom";
import './Navbar.scss';
function Navbar(){
    const [open,setOpen]=useState(false);
    const user = true;
return (
    <>
        <nav>
            <div className="left">
                <Link to="/" className='link logo'>
                    <img src="/logo.png" alt=""/>
                    <span>MyPlace</span>
                    </Link>
                <Link to="/" className='link'>Home</Link>
                <Link to="/" className='link'>About</Link>
                <Link to="/" className='link'>Contacts</Link>
                <Link to="/" className='link'>Agents</Link>
            </div>
            <div className="right">
            {user ? (<div className='user'>
                <img src={userData.img} alt=""/>
                <span>{userData.name}</span>
             
                <Link  className='link profile' to="/profile" >
                    <div className='notification'>3</div>
                    <span>Profile</span>
                </Link>
               
            </div>):(
                <>
                <Link to="/" className='link'>Sign in</Link>
                <Link to="/" className='link register'>Sign up</Link>
                </>
                )}
                <div className="menuIcon" onClick={()=>setOpen(!open)}>
                    <img src="/menu.png" alt=""/>
                </div>
                <div className={open?"menu active":"menu"} >
                <Link to="/" className='link'>Home</Link>
                <Link to="/" className='link'>About</Link>
                <Link to="/" className='link'>Contacts</Link>
                <Link to="/" className='link'>Agents</Link>
                <Link to="/" className='link'>Sign in</Link>
                <Link to="/" className='link'>Sign up</Link>

                </div>
            </div>
        </nav>
    </>
);
}

export default Navbar;