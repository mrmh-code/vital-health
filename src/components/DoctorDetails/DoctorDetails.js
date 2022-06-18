import React from 'react';

const DoctorDetails = (props) => {
    console.log(props)
    const {name,img,subject}=props.doctor
    return (
        <div>
            <div class="col">
    <div class="card shadow-none p-0  bg-white rounded">
      <img src={img} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">{name}</h5>
        <p class="card-text">{subject}</p>
      </div>
    </div>
  </div>
        </div>
    );
};

export default DoctorDetails;