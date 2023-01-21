import React from "react";
// import PlaceDetails from "./compoments/PlaceDetails"

export default function Place(props) {
const loading=true;
 

  // let toggleStyle = (props) => {
  //   alert("hello");
  //    if(props.item.available=='false'){
  //     document.querySelector('#toggle').style.backgroundColor= 'red';
  //    }
  // }

  return (
    <>
    
    <div className="col-md-3" >
      
      <div className="card">
        <img src={props.item.imgurl} className="card-img-top"></img>

        <div className="card-body">
          <i className="bi bi-star-fill"><span><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-half"></i><i className="bi bi-star"></i></span></i>
          <h4 className="card-title">{props.item.title}</h4>
          <p className="card-title">{'Best Time: '+ props.item.best_Time}</p>
          
          
            {/* <div className="card-body"> </div> */}
         
         {/* tarnary operator ka use karke bnaye hai, agar place available nhi hai yani false ho to, Not Avialable show karna chaieye. */}

         {/* {props.item.available ? <button className="btn btn-primary  my-2"  id="toggle" >Read More</button> : "Not Available" }  */}
         {props.item.available ? <a href={ props.item.id} className="btn btn-primary my-2" >Read More</a> : "Not Available"}

        </div>
      </div>
    </div>
    </>
  );
}
