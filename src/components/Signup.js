import axios from 'axios'
import React, { useState, useEffect } from 'react'
import WarningStatus from './Warning'


function Signup(props) {

  console.log('signup', props)

    const [inputData, setInputData] = useState({
        // id: "",
        name: "",
        email: "",
        password: "",
        mobile: ""
    })

    const [inputValidate, setInputValidate] = useState({
        addUser: false,
        id: false,
        name: false,
        email: false,
        password: false,
        mobile: false
    })

    const [show, setShow] = useState(false)
    const handleShow = () => setShow(true);
    const handleHide = () => setShow(false);

    const [saveError, setSaveError] = useState('')

    const [users, setUsers] = useState([])

    const handleInput = (event) =>{

        // console.log(event.target.value)
        const {name, value, type, checked} = event.target

        if(type === 'checkbox') {
            inputData[name] = checked;
        } else {
            inputData[name] = value;
        }

        let obj = JSON.parse(JSON.stringify(inputData));
        setInputData(obj);
        console.log(obj)

        inputValidate[name] = value ? true : false;
        let myObject= JSON.parse(JSON.stringify(inputValidate))
        setInputValidate(myObject)
    }

    useEffect(() => {
        console.log(inputData);
      }, [inputData]);


     async function getUserData() {
        const result = await axios.get("http://localhost:4001/User-Data",
        inputData);
        setUsers(result.data);
        console.log(result.data);
      }

      useEffect(() => {
        getUserData()
      }, [])
      

    let handleSubmit = async(event) => {
        try {
            event.preventDefault();
            var validationData = JSON.parse(JSON.stringify(inputValidate));
            validationData.addUser = true
            setInputValidate(validationData);
            console.log(inputData)

            let valid = true

            Object.keys(inputValidate).map((item)=>{
                if(inputValidate[item] === false) valid = false 
            });

            console.log(valid);

            // if(!valid) {
            //     alert("Invalid input");
            //     return
            // }
            let result = await axios.post('http://localhost:4001/User-Data',inputData);
            getUserData();
            handleHide();


        } catch (error) {
            setSaveError(error.message);
        }
    }

    useEffect(() => {
      console.log(inputValidate);
    }, [inputValidate])
    


    // let myStyle = {
    //     backgroundImage: 'url("https://images.unsplash.com/photo-1501471984908-815b996862f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MjB8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60")',
    //     width: "100",
    //     height: "500px",
    //     backgroundRepeat: "no-repeat"
    // }

  return (
    <>
    <div className="d-flex justify-content-center bg-dark">
        <div className="card my-3 border border-info" style={{width: "18rem"}}>
            {/* <img src="..." className="card-img-top" alt="..." /> */}
            <div className="card-body">
                <h5 className="card-title text-center text-success">User Register</h5><hr className='border border-start-0 border-end-0 border-top-0 border-success' />
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input type="text" className="form-control border border-start-0 border-end-0 border-success" id="name" name='name' onChange={handleInput} />
                        {inputValidate.addUser && !inputValidate.name && (<div id="name" name='name' className="form-text" style={{
                          color: "red",
                          padding: "2px",
                          backgroundColor: "#ffcccc",
                          borderRadius: "8px",
                        }}>*Please enter your name</div>)}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="email" className="form-control border border-start-0 border-end-0 border-success" id="email" name='email' aria-describedby="emailHelp" onChange={handleInput}/>
                        {inputValidate.addUser && !inputValidate.email && (<div id="emailHelp" name='email' className="form-text" 
                        style={{
                          color: "red",
                          padding: "2px",
                          backgroundColor: "#ffcccc",
                          borderRadius: "8px",
                        }}>We'll never share your email with anyone else.</div>)}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" className="form-control border border-start-0 border-end-0 border-success" id="password" name='password' onChange={handleInput}/>
                        {inputValidate.addUser && !inputValidate.password && (<div id="name" name='pasword' className="form-text" 
                        style={{
                          color: "red",
                          padding: "2px",
                          backgroundColor: "#ffcccc",
                          borderRadius: "8px",
                        }}>*Please enter your password</div>)}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="mobile" className="form-label">Mobile</label>
                        <input type="text" className="form-control border border-start-0 border-end-0 border-success" id="mobile"  name='mobile' onChange={handleInput}/>
                        {inputValidate.addUser && !inputValidate.mobile && (<div id="name" name='mobile' className="form-text" 
                        style={{
                          color: "red",
                          padding: "2px",
                          backgroundColor: "#ffcccc",
                          borderRadius: "8px",
                        }}>*Please enter your mobile</div>)}
                    </div>
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" name='checked' onChange={handleInput}/>
                        {inputValidate.addUser && !inputValidate.checked && (<div id="name" name='name' className="form-text" 
                        style={{
                          color: "red",
                          padding: "2px",
                          backgroundColor: "#ffcccc",
                          borderRadius: "8px",
                        }}>*Please select terms & conditions</div>)}
                        <label className="form-check-label text-danger" htmlFor="exampleCheck1" checked >Select Terms & Condition</label>
                    </div>
                    {saveError && (<WarningStatus text={saveError} type="alert alert-danger"/>)}
                    <button type="submit" className="btn bg-success text-white" style={{}}>Sign Up</button>
                </form>
            </div>
        </div>
    </div>
    </>
  )
}

export default Signup