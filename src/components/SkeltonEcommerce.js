import React,{useState, useEffect} from 'react'
import axios from 'axios'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

function SkeltonEcommerce() {
    const [allProduct, setAllProduct] = useState([])

    async function getAllProducts() {
        let result = await axios.get('http://localhost:3002/Products');
        setAllProduct(result.data);
        // console.log(result);
    }

    useEffect(() => {
      getAllProducts();
    }, [])
    

  return (
    <SkeletonTheme>
        <section>
                <div className="row" >
                <h3 className='text text-center'><Skeleton/></h3>
                {allProduct.map((prod)=> {
                    return( 
                    // <EcommerceList prod={prod}/>
                    <div className='col-md-3 my-2 d-flex justify-content-center' style={{}}>
        
                    <div className="card container text-center" style={{width: "20rem", boxSizing: 'border-box'}}>
                    <Skeleton width={250} height={270}/>
                        <div class="card-body">
                            <h5 className='text fs-5'><Skeleton/></h5>
                            <h4 className='text'><Skeleton/></h4>
                            <h5 className='text'><Skeleton/></h5>
                            <h5 className='text'><Skeleton width={110} height={35}/></h5>
                            
                        </div>
                    </div>
                </div>
                    )
                    })
                }
            </div>
        </section>
    </SkeletonTheme>
  )
}

export default SkeltonEcommerce