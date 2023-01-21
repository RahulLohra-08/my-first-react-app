import React,{useEffect} from 'react'
import { useSelector } from 'react-redux';

export default function CartDetails(props) {
  // props.preventDefault();

  const cardItem = useSelector((state) => state.cardItem);

  useEffect(() => {
    console.log('card details',cardItem);
  }, [cardItem]);

  

  return (
    <>

        {cardItem.map((itm) => {
          <div>{itm.title}</div>;
          <div>{itm.price}</div>;
        })}

        <div>
          <div className="card mb-3 my-3 mx-3" style={{maxWidth: "540px"}}>
            <div className="row g-0">
              <div className="col-md-4">
                <img src="..." className="img-fluid rounded-start" alt="..." />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">Card Details</h5>
                  <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}
