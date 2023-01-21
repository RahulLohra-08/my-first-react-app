import React,{useEffect, useState} from 'react'
import axios from 'axios'

function Login(props) {

    console.log("login",props)

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
      

    let login = async(event) => {
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

            // if()
            


        } catch (error) {
            setSaveError(error.message);
        }
    }

    useEffect(() => {
      console.log(inputValidate);
    }, [inputValidate])
    
  return (
    <div className="d-flex justify-content-center bg-dark">
        <div className="card my-3 border border-success" style={{width: "18rem"}}>
            {/* <img src="..." className="card-img-top" alt="..." /> */}
            <div className="card-body">
                <h5 className="card-title text-center text-success">User Login</h5> <hr className='border border-start-0 border-end-0 border-top-0 border-info'/>
                <form onSubmit={login}>
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label ">Email</label>
                        <input type="email" className="form-control border border-start-0 border-end-0 border-info" name='email' id="exampleInputEmail1" aria-describedby="emailHelp" onChange={handleInput}/>
                        {inputValidate.addUser && !inputValidate.email && (<div id="emailHelp" className="form-text" style={{
                          color: "red",
                          padding: "2px",
                          backgroundColor: "#ffcccc",
                          borderRadius: "8px",
                        }}>We'll never share your email with anyone else.</div>)}
                    </div>
                    <div className="mb-3">
                        <label for="password" className="form-label">Password</label>
                        <input type="password" className="form-control border border-start-0 border-end-0 border-info" name='password' id="password" onChange={handleInput}/>
                        {inputValidate.addUser && !inputValidate.password && (<div id="password" className="form-text"
                        style={{
                            color: "red",
                            padding: "2px",
                            backgroundColor: "#ffcccc",
                            borderRadius: "8px",
                          }}>Please enter corect password</div>)}
                    </div>

                    <button type="submit" className="btn btn-primary text-center my-2" style={{width: "100%"}} >Login</button>
                    <div><h6 className='text-center'>Or</h6></div>
                    <a href='/signup'  className="btn bg-success text-center text-white" style={{width: "100%"}}>Sign Up</a>
                    
                </form>
            </div>
        </div>
    </div>
  )
}

export default Login