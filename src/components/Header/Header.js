import React from 'react';
import { FaGoogle,FaBacteria} from "react-icons/fa";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import useAuth from '../../hooks/useAuth';
 
 
 
const Header = () => {
    const {user,singInGoogle,logOut}=useAuth();
    let location=useLocation();
    let navigate=useNavigate();
    let redirect_uri=location.state?.from || '/'

    const handleGoogleLoginIn=()=>{
        singInGoogle()
        .then(result =>{
          navigate(redirect_uri, { replace: true });
        })
      
       
    }
   let activeStyle = {
        textDecoration: "none",
        fontWeight:"bold",
        color:'red'
      };
    return (
 <div>
    <header className='sticky-top'>
    <nav className="navbar p-3 navbar-expand-lg navbar-light bg-light rounded">
 
 <div className="container ">

   <span className="navbar-brand me-2">
     <img
       src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmnvd7bTKOpNSH7-xes4vSM4Zj1gO3Fwah3A&usqp=CAU"
       height="16"
       alt="MDB Logo"
       loading="lazy"
       style={{marginTop:"-1px"}}
     />
   </span>

   <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
     <span className="navbar-toggler-icon"></span>
   </button>


 
   <div className="collapse navbar-collapse" id="navbarSupportedContent">
  
     <ul className="navbar-nav me-auto mb-2 mb-lg-0">
       <li className="nav-item">
       <span> <FaBacteria/></span>
       </li>
     </ul>

       
     <div className="d-flex align-items-center">
       <NavLink
               to="/Home"
               style={({ isActive }) =>
                   isActive ? activeStyle : undefined
               } className="btn  px-3 me-2">
        Home
       </NavLink>
       
       <NavLink
               to="/doctor"
               style={({ isActive }) =>
                   isActive ? activeStyle : undefined
               } className="btn  px-3 me-2">
       Doctor
       </NavLink>

       <NavLink
               to="/news"
               style={({ isActive }) =>
                   isActive ? activeStyle : undefined
               } className="btn  px-3 me-2">
        News
       </NavLink>

    

      {user.email?  <><span className='p-2'> Hello {user.displayName || user.email.slice(0,7)}</span> <button className='btn btn-dark' onClick={logOut}>logOut</button> </>:
      <> <Link to='/login' type="button" className="btn btn-primary ms-5 me-2 ">
        Login/Register
       </Link>
       <span onClick={handleGoogleLoginIn}
         className="btn btn-dark px-3 icon-none"
         >
        <FaGoogle/>
         </span>
         </>} 
     </div>
   </div>
 
 </div>
</nav>
    </header>
 
        </div>
    );
};

export default Header;