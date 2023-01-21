import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreator } from '../services/actionCreators';

function EcommerceList(props) {
    // console.warn("props: name", props)

    const cardItem = useSelector(state => state.cardItem)

    const dispatch = useDispatch()

    const{addToCart, removeToCart} = bindActionCreators(actionCreator, dispatch)

    const {id, title, price, category, image} = props.prod;


  return (
    <div className='col-md-3 my-2 d-flex justify-content-center' style={{}} key={id}>
   
        <div className="card container text-center" style={{width: "20rem", boxSizing: 'border-box'}}>
            <img src={props.prod.image} className="card-img-top img-thumbnail my-2 mx-auto" style={{width: "16rem"}} alt="..." />
            <div class="card-body">
                <p className='text fs-5'>{title}</p>
                <h4 className='text'>{price}</h4>
                <h5 className='text'>{category}</h5>
                <a href="#" className="btn btn-primary" onClick={()=>{addToCart(1)}}>
                {`Add To Cart`}</a>
            </div>
        </div>
    </div>
  )
}

export default EcommerceList