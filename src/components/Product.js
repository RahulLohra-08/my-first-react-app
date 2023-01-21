import { React, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { actionCreator } from "../services/actionCreators";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import Navbar from "./Navbar";

// get data from local storage
// const getLocalCartData = ()=> {
//   let newCartData = localStorage.getItem('cardItems')
//   if(newCartData === [] ){
//     return []
//   } else {
//     return JSON.parse(newCartData)
//   }
// }

export default function Product(props) {

  const cardItem = useSelector((state)=>state.cardItem);   

  const dispatch = useDispatch()

  const{addToCart, removeToCart} = bindActionCreators(actionCreator, dispatch)

  const [product, setProduct] = useState([]);  //

  const { id } = useParams();

  async function getProduct() {
    let result = await axios.get("https://fakestoreapi.com/products/"+ id);
    if (result) setProduct(result.data);
  }

  useEffect(() => {
    getProduct();
  }, []);

    // set Data from local storage.
    useEffect(() => {
      localStorage.setItem('cardItems', JSON.stringify(cardItem))
     }, [cardItem])
  

  return(
     <>
         {/* {console.log(product)} */}
        <div className="row container my-4">
            <div className="col-md-4">
              <img src={product.image} className="card-img-top " height="100%" style={{width: "100%"}} alt={product.title}/>
            </div>
            <div className="card col-md-7 text-center mx-3" style={{ display: "flex", justifyContent: "center", alignItems: "center"}}>
                    <div className="card-body col-md-6" style={{minHeight: '200px'}}>
                        {product.rating && <i className="bi bi-star-fill">{` ${product.rating.rate} Buyer: ${product.rating.count}`}</i>}
                        <h4 className="card-title">{product.title}</h4>
                        <h5 className="card-title">{`Price ${product.price}`}</h5>
                        <p className="card-text">{product.description}</p>
                        <h4 className="card-text">{product.category}</h4>
                        <a className="btn btn-primary my-2"
                         onClick={()=>{
                            addToCart(product)
                         }} 
                        >Add To Cart{cardItem.length}</a>
                    </div>
            </div>
        </div>
    </>);
}
