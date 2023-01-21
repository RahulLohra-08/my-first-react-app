import axios from 'axios'
import React,{useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreator } from '../services/actionCreators';
import SkeltonEcommerce from './SkeltonEcommerce';
import Cart from './Cart';

// import Product from './Product';

function EcommerceProducts(props) {
  console.log("props:", props)

  const cardItem = useSelector(state => state.cardItem)

  const dispatch = useDispatch()

  const{addToCart, removeToCart} = bindActionCreators(actionCreator, dispatch)

       
    const [allProduct, setAllProduct] = useState([])
    const [selectedCategory, setSelectedCategory] = useState([])
    const [displayProduct, setDisplayProduct] = useState([])

    const [categories, setCategory] = useState('')

    async function getAllProducts() {
      let result = await axios.get('http://localhost:3002/Products');
      setAllProduct(result.data);
      // console.log(result);
  }

    useEffect(() => {
        setTimeout(() => {
          getAllProducts();
          getCategories();
        }, 800);
    }, [])

    async function getCategories() {
      let result = await axios.get('http://localhost:3002/Products');
      setCategory(result);
      console.log("Categories:", result.data);
  }
  
  const {id, title, category, image, price} = allProduct;

  return (
    <>
    <h1>{category}</h1>
      { 
        Object.keys(allProduct).length === 0 ? <SkeltonEcommerce/> : 
      <div className="row" >
        <h3 className='text text-center'>Watch Stores</h3>
        {allProduct.map((prod)=> {
            return( 
            // <EcommerceList prod={prod}/>
            <div className='col-md-3 my-2 d-flex justify-content-center' key={id}>
   
            <div className="card container text-center" style={{width: "20rem", boxSizing: 'border-box'}}>
                <img src={prod.image} className="card-img-top img-thumbnail my-2 mx-auto" style={{width: "16rem"}} alt="..." />
                <div class="card-body">
                    <p className='text fs-5'>{prod.title}</p>
                    <h4 className='text'>{prod.price}</h4>
                    <h5 className='text'>{prod.category}</h5>
                    <a href={"/cart/"+ prod.id} className="btn btn-primary">
                    {`Read More`}</a>
                </div>
            </div>
        </div>
             )
            })
          }
      </div> 
      } 
    </>
  )
}
{/* <div className='' style={{display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh',  background: 'black', opacity: '1'}}> <div class="spinner-border text-warning" role="status"><span class="visually-hidden">Loading...</span></div></div> */}

export default EcommerceProducts