import axios from 'axios';
import React,{useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'

import { actionCreator } from "../services/actionCreators";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";

function Cart() {

  const cardItem = useSelector((state)=>state.cardItem);

  const dispatch = useDispatch()

  const{addToCart, removeToCart} = bindActionCreators(actionCreator, dispatch)



    const { id }  = useParams();

    const [product, setProduct] = useState('')

    async function getProducts() {
        let result = await axios.get(`http://localhost:3002/Products/${id}`);
        if(result) setProduct(result.data);
        console.log(result.data);
    }


    useEffect(() => {
      getProducts();
    }, [])

    const { title, category, price, image} = product;
    

  return (
    <div>
        <div className="row d-flex justify-content-center align-item-center my-4" > 
            <div className="card col-md-4 "  style={{ }}>
                    <img src={image} className="card-img-top" style={{width: "18rem"}} alt="..."/>
                    <div className="card-body" style={{minHeight: '200px'}}>
                        {/* {product.rating && <i className="bi bi-star-fill">{` ${product.rating.rate} Buyer: ${product.rating.count}`}</i>} */}
                        <h4 className="card-title">{title}</h4>
                        <h5 className="card-title">{`Price ${price}`}</h5>
                        {/* <p className="card-text">{product.description}</p> */}
                        <h4 className="card-text">{category}</h4>
                    </div>
            </div>
            <div className='col-md-6'>
              <a href={"/cart-details/"+ id} className="btn btn-primary" onClick={()=>addToCart(1)}>Add To Cart</a>
            </div>
        </div>
    </div>
  )
}

export default Cart