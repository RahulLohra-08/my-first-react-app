import React, {useState} from 'react'
import Dashboard from './Dashboard/Dashboard'
import Sidebar from './Dashboard/Sidebar'
import SkeltonEcommerce from './SkeltonEcommerce'
// import ShowLoader from './ShowLoader'

export default function About(props) {

    console.log("props", props)

    const [myStyle, setMyStyle] = useState({
            color: 'black',
            backgroundColor: 'white'
        }
    )
    
    const [btnText, setBtnText] = useState("Enable Dark Mode")

    let toggleButton = (props) => {
       if (myStyle.color == 'black') {
            setMyStyle({
                color: 'white',
                backgroundColor: 'black',
                border: '1px solid black'
            })
            setBtnText("Enable Light Mode");
       } else {
        setMyStyle({
            color: 'black',
            backgroundColor: 'white'
        })
        setBtnText("Enable Dark Mode");
       }
    }


  return (
    <>
     {/* <Dashboard/> */}
    <div className='container my-3'>
        <h2>About</h2>
        <div className="accordion" id="accordionExample">
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" style={myStyle} data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    Accordion Item #1
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                    <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" style={myStyle} data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    Accordion Item #2
                </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                    <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" style={myStyle} data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        Accordion Item #3
                    </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={myStyle}>
                        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                    </div>
                </div>
            </div>
        </div>
        <button className='btn btn-primary my-2 mb-8' onClick={toggleButton}>{btnText}</button>
        {/* <ShowLoader/> */}

       
        {/* <SkeltonEcommerce/> */}

        {/* <div>
            <button className='btn btn-primary mx-2' onClick={()=>
               props.addToCartHandler({price:1000, name:'i phone 11'})}
            >Show Loader</button>
                    <span>Show True or False </span>
            <button className='btn btn-primary' >Hide Loader</button>
        </div> */}
    </div>
    
     </>
  )
}
