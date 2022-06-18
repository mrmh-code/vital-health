import React, { useEffect, useState } from 'react';
import NewsDetails from '../NewsDetails/NewsDetails';
import {FaSearch} from "react-icons/fa";
 
const News = () => {
    const [blogs, setBlogs]=useState([]);

    useEffect(()=>{
        fetch('./blog.json')
        .then(res=> res.json())
        .then(data => setBlogs(data))
    }, [])
    return (
        <div>
           <div className='row'>
     
            <div className="col-8 one-news">
           
            {
                
                 blogs.map(blog => <NewsDetails
                    key={blog.id}
                    blog={blog}
                    />)
              
            }
            
            {
                
                blogs.map(blog => <NewsDetails
                   key={blog.id}
                   blog={blog}
                   />)
             
           }
            </div>
            <div className='col-4 '>
            
                <div className="card"  style={{width: '23rem'}}>
                    <h2 className='mb-1 '>Search</h2>
                    <span className='ms-1 mb-3' style={{width:"5rem", padding:"2px", background:"#198754"}}></span>
                <div class="input-group">
                    <div className=''> 
                    <input type="text" className='p-1 mt-1' placeholder="Type a key hit enter"/>
                    <span className='btn btn-success pt-1 pb-1 icon-none'>{<FaSearch/>}</span>
                    </div>
                    
                </div>
                </div>

                <div className="card" style={{width: '23rem'}}>
                    <h2 className='mb-1'>Categories</h2>
                    <span className='ms-1 mb-3' style={{width:"5rem", padding:"2px", background:"#198754"}}></span>

                <div className='mt-4 mb-4'>
                <span className='p-3 px-4 bg-light'>Food <span className='ms-2 p-1 bg-success  rounded-pill text-white'>12</span></span>  <span className='p-3 ms-4 px-4 bg-light'>Dish <span className='ms-2 p-1 bg-success  rounded-pill text-white'>2</span></span>  
                </div>

                <div className='mt-4 mb-4'>
                <span className='p-3 px-4 bg-light'> Dessa<span className='ms-2 p-1 bg-success  rounded-pill text-white'>37</span></span>  <span className='p-3 ms-4 px-4 bg-light'>drinks <span className='ms-2 p-1 bg-success  rounded-pill text-white'>42</span></span>  
                </div>


                <div className='mt-4 mb-4'>
                <span className='p-3 px-4 bg-light'>Ocassion <span className='ms-2 p-1 bg-success  rounded-pill text-white'>14</span></span> 
                </div>

            

                
                
                </div>

                <div className="card" style={{width: '23rem'}}>
                    <h2 className='mb-3  mb-1'>Tag cloud</h2>
                 
                    <span className='ms-1 mb-3' style={{width:"5rem", padding:"2px", background:"#198754"}}></span>

                    <div>
                        <span className='border border-1 p-2 ms-3  rounded-pill'>dish</span>
                        <span className='border border-1 p-2 ms-3  rounded-pill'>menu</span>
                        <span className='border border-1 p-2 ms-3  rounded-pill'>food</span>
                        <span className='border border-1 p-2 ms-3  rounded-pill'>sweet</span>
                        
                    </div>

                    <div className='mt-4'>
                        <span className='border border-1 p-2 ms-3  rounded-pill'>todo</span>
                        <span className='border border-1 p-2 ms-3  rounded-pill'>drinks</span>
                        <span className='border border-1 p-2 ms-3  rounded-pill'>menu</span>
                        
                        
                    </div>
                </div>

                <div className="card" style={{width: '23rem'}}>
                    
                    <h2 className='mb-2'>Paragraph</h2>
                    <span className='ms-1 mb-3' style={{width:"5rem", padding:"2px", background:"#198754"}}></span>
                    <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate cumque excepturi at odit, eveniet eaque distinctio molestiae expedita illo quibusdam.</p>
                </div>
                </div>
            </div>
     
        </div>
    );
};

export default News;