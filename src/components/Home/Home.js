import React, { useEffect, useState } from 'react';
import './Home.css'
import DoctorImag from '../../img/bg-doctor.png'
import TeamMember from '../TeamMember/TeamMember';
import Appointment from '../Appointment/Appointment';
import LatestNews from '../LatestNews/LatestNews';
import { Link } from 'react-router-dom';
 
 

const Home = () => {
    const [members,setMember]=useState([]);
    useEffect(()=>{
        fetch('./tem.json')
        .then(res =>res.json())
        .then(data=>setMember(data))
    },[])


    const [blogs, setBlogs]=useState([]);

    useEffect(()=>{
        fetch('./blog.json')
        .then(res=> res.json())
        .then(data => setBlogs(data))
    }, [])
    
  
    return (
        <div>
           <div className='header-bg'>
           <div className='row row-cols-1 row-cols-sm-1 row-cols-md-1 row-cols-lg-2   header'>
                <div className='home-left'>
                    <h3>Welcome to Your Health <br/> Center</h3>
                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Accusantium aperiam earum ipsa eius, inventore nemo labore eaque porro consequatur ex aspernatur. Explicabo, excepturi accusantium! Placeat voluptates esse ut optio facilis!</p>

                    <button type="button" className="btn btn-primary px-4">Learn More</button>
                </div>

                <div className='row-cols-sm-12 img-responsive'>
                    <img src={DoctorImag} alt="" />
                </div>
            </div>
           </div>

            <section className='our-team'>
                <h2>Our Tem Member</h2>
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
                {
                    members.map(mem => <TeamMember
                    key={mem.id} 
                    member={mem}
                    />)
                }
                </div>
            </section>
            
            <section className='latest-news'>
               <div className='latest-container'>
               <h1 className='d-flex justify-content-center pb-5'>Latest News</h1>
                <div className="row   row-cols-sm-1 row-cols-md-2 row-cols-lg-3 g-5">
                {
                    blogs.map(blog => <LatestNews
                    key={blog.id}
                    blog={blog}
                    />
               
                    )
                }
                </div>
                <div className='d-flex justify-content-center pt-5'><Link to='/news' className='btn btn-primary'>Read More</Link></div>
               </div>


            </section>
           


           {
            <Appointment/>
           }

           <section>

           </section>
            
        </div>
    );
};

export default Home;