import React from "react";
import { useSelector } from "react-redux";
import Navbar from "./Navbar";
// import Title from "./Title";
// import Rating from "./Rating";
// import axios from "axios";

export default function(props) {

    // const cardItem = useSelector(state => state.cardItem);

    return(
        <>
        
        <div className="container col-md-3">
            {/* <Title text={props.product.title}  /> */}
          
            {/* <img src={props.product.image} alt=""  /> */}

            <div className="card container my-2">
                
                <img src={props.product.image} className="card-img-top " height="250px" alt="..." style={{width: "14rem"}} />
                
                <div className="card-body mx-2">
                <i className="bi bi-star-fill">{` ${props.product.rating.rate} Buyer: ${props.product.rating.count}`}</i>
                    <h4 className="card-title">{props.product.title.substring(0, 10)}</h4>
                    <h5>{`Price $ ${props.product.price}`}</h5>
                    <p className="card-text">{props.product.description.substring(0, 150)}</p>
                    <h4 className="card-text">{props.product.category}</h4>
                    <a href={'/product/'+ props.product.id}  className="btn btn-primary">Read More</a>
                </div>
            </div>

            {/* <table className="table table-striped table-hover">
                ...
            </table> */}
                
                
                {/* {
                    props.product.rating.map((rating)=>{
                        <Rating />
                    })
                } */}

          
        </div>
        </>
    );
}