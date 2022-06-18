import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { FaPhoneAlt} from "react-icons/fa";
const team=[
    {
        "id": 0,
        "name": "Wizdom Jack",
        "phone": "+0123435353",
        "description": "Lorem ipsum dolor sit amet, consectetu radipisi cing elitBeatae autem aperiam nequ quaera molestias voluptatibus harum ametipsa.",
        "img": "https://i.ibb.co/s6xKTvj/person-1.jpg"
    },
    {
        "id": 1,
        "name": "Adams Collier",
        "phone": "+0123435453",
        "description": "Lorem ipsum dolor sit amet, consectetu radipisi cing elitBeatae autem aperiam nequ quaera molestias voluptatibus harum ametipsa.",
        "img": "https://i.ibb.co/XSFQP2T/person-2.jpg"
    },
    {
        "id": 2,
        "name": "Diego Simmons",
        "phone": "+0123435353",
        "description": "Lorem ipsum dolor sit amet, consectetu radipisi cing elitBeatae autem aperiam nequ quaera molestias voluptatibus harum ametipsa.",
        "img": "https://i.ibb.co/YWYGCxC/person-3.jpg"
    },

    {
        "id": 3,
        "name": "Roger Adams",
        "phone": "+0123435353",
        "description": "Lorem ipsum dolor sit amet, consectetu radipisi cing elitBeatae autem aperiam nequ quaera molestias voluptatibus harum ametipsa.",
        "img": "https://i.ibb.co/5vJDcht/person-4.jpg"
    }
]


const MemberDetails = () => {
    const {teamsID}=useParams();
    
     
    
    return (
        <div>
           <div class="card" style={{width: "25rem",margin:"3rem auto"}}>
  <img src={team[teamsID].img} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">{team[teamsID].name}</h5>
    <p class="card-text mb-4">{team[teamsID].description}</p>
   
        <span className='btn btn-success px-3 icon-none'> {<FaPhoneAlt/> }</span>
       <span className='h4 p-2'> {team[teamsID].phone}</span>
       <h5 className='mt-3'>Contact Time: <span className='h6 text-danger ms-3'>9AM to 6PM</span> </h5>
  </div>
</div>

    
        <div className='d-flex justify-content-center'><Link to='/home' className="btn btn-success ">Go to Home </Link></div>
        </div>
    );
};

export default MemberDetails;