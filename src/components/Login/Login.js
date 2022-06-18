import React from 'react';
import { FaGoogle} from "react-icons/fa";
import { useHistory, useNavigate } from 'react-router-dom';
import { Link, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Home from '../Home/Home';
    const Background='https://images.pexels.com/photos/143654/pexels-photo-143654.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'



const Login = () => {
        const { singInGoogle,handleEmail,handlePassWord,processLogin,error}=useAuth();
    
        let location=useLocation();
        let navigate=useNavigate();
        let redirect_uri=location.state?.from || '/'
    
        const handleGoogleLoginIn=()=>{
            singInGoogle()
            .then(result =>{
              navigate(redirect_uri, { replace: true });
            })
          
           
        }

    return (
        <div>
          
               <section className="text-center">
 
               <div className="p-5 bg-image" style={{
                     backgroundImage: `url(${Background})`,
                     backgroundPosition: 'center',
                     backgroundSize: 'cover',
                     backgroundRepeat: 'no-repeat',
                     height: "300px"
                     }}></div>
              
             
               <div className="card mx-4 mx-md-5 shadow-5-strong" style={{
                     marginTop: " -100px",
                     background: "hsla(0, 0%, 100%, 0.8)",
                     backdropFilter: "blur(30px)",}}
                     >
                 <div className="card-body py-5 px-md-5">
             
                   <div className="row d-flex justify-content-center">
                     <div className="col-lg-8">
                       <h2 className="fw-bold mb-5">Sign up now</h2>
                       <form>
             
              
             
                         <div className="form-outline mb-4">
                           <input onBlur={handleEmail} type="email" id="form3Example3" className="form-control" />
                           <label className="form-label" htmlFor="form3Example3">Email address</label>
                         </div>
              
                         <div className="form-outline mb-4">
                           <input onBlur={handlePassWord} type="password" id="form3Example4" className="form-control" />
                           <label className="form-label" htmlFor="form3Example4">Password</label>
                         </div>
             
                        <p className='text-danger'>{error}</p>
             
                         <button onClick={processLogin} className="btn btn-primary  mb-4">
                           Register/login
                         </button>
             
                       
                         <div className="text-center">
                           <p>or Login with:</p>
                           <span onClick={handleGoogleLoginIn} className='btn btn-dark'><FaGoogle/></span>
                         </div>
                       </form>
                     </div>
                   </div>
                 </div>
               </div>
             </section> 
 
        </div>
    );
};

export default Login;