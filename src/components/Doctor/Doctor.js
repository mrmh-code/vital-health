import React, { useEffect, useState } from 'react';
import DoctorDetails from '../DoctorDetails/DoctorDetails';
import Appointment from '../Appointment/Appointment'
import './Doctor.css'
const Doctor = () => {
    const [Doctors,setDoctor]=useState([]);

    useEffect(()=>{
        fetch('./doctor.json')
        .then(res => res.json())
        .then(data => setDoctor(data))
    },[])


    return (
        <div>
            <section className='bg-doctor'>
    
                    <p className='d-flex justify-content-center' style={{fontSize:'20px',paddingTop:'3rem'}}><span style={{color: "#37D9A5",}}>Home / </span> <span  className='ps-3'> Doctor</span></p>

                    
                    <h1 className='text-white d-flex justify-content-center' style={{marginTop:'30px', paddingTop:"0px"}}>Our Doctor</h1>
                  

            </section>
        <section className='doctor'>
            <div className='doctor-section'>
            <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-5">
            {
               Doctors.map(doctor =><DoctorDetails
               key={doctor.id}
               doctor={doctor}
               />) 
             }
            </div>
            </div>
       
        </section>

        <section className='doctor'>
            <div className='doctor-section'>
            <div class="row row-cols-sm-1 row-cols-md-2 row-cols-lg-3 g-5">
            {
               Doctors.map(doctor =><DoctorDetails
               key={doctor.id}
               doctor={doctor}
               />) 
             }
            </div>
            </div>
       
        </section>
           
         {<Appointment/>}
        </div>
    );
};

export default Doctor;