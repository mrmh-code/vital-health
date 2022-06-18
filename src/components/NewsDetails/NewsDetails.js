import React from 'react';

const NewsDetails = (props) => {
    const {name,img,description,id}=props.blog
    console.log(props)
    return (
        <div>
           <div class="col-4 mt-4" style={{float:'left',width:'25rem', display:"block"}}>
           <div className="col" style={{marginLeft:"50px",marginRight:"50px"}}>
   <div className="border border-$gray-100 pb-4 ">
      <img src={img} className="card-img-top pb-2" alt="..."/>
   
        <h6 className='text-info mt-3 pb-2 p-1'>{description}</h6>
       
        <span className='p-1'>{name} </span> <small className="text-muted ms-2">updated {id} mins ago</small>
      </div>
  </div>
  </div>
        </div>
    );
};

export default NewsDetails;