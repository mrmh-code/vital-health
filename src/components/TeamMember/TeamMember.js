import React from 'react';
import { Link } from 'react-router-dom';

const TeamMember = (props) => {
    const {name,img,description,id}=props.member;
    return (
        <div>
             <div className="col shadow-lg me-5 p-3 mb-5 bg-body rounded">

        <img src={img} className="w-50 rounded-circle" style={{marginLeft:'50px'}} alt="..."/>
     
     <h5 className="card-title ms-5 mt-3">{name}</h5>
         <p className="card-text  m-auto">{description}</p>
         <Link to={`/team/${id}`} className='btn btn-primary p-1 ms-5 mt-4'>Details me</Link>
        </div>
        </div>
    );
};

export default TeamMember;