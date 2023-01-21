import { React, useEffect, useState } from "react";

export default function StudentForm() {
  
  let inputData = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    address: "",
    address2: "",
    city: "",
    state: "",
    zip: "",
    check: "",
  };
  // const [counter, setCounter] = useState(0);

  const [inputValidate, setInputValidate] = useState({
    formSubmitted: false,
    firstName: false,
    lastName: false,
    email: false,
    password: false,
    address: false,
    address2: false,
    city: false,
    state: false,
    zip: false,
    check: false,
  });

  //------ css used here --------//
  let myStyle = {
    backgroundColor: "#2B312C ",
    padding: "1px",
    borderRadius: "8px",
    color: "white",
  };

  let formData = {
    padding: "5px",
  };

  let hed1 = {
    marginTop: "0px",
    backgroundColor: "#191101  ",
    padding: "3px",
    color: "white",
    borderRadius: "5px",
  };
//-----------------------------//

  let handleInput = (event) => {
    const { name, value, type, checked } = event.target;
    if (type === "checkbox") {
      inputData[name] = checked;
    } else {
      inputData[name] = value;
    }

    inputValidate[name] = value ? true : false; //input me khuch value hoga to true nhi to false ho. or usse name me assign kardenge

    let obj = JSON.parse(JSON.stringify(inputValidate));  //inputValidate const lia hai islia direct change nhi kar sakte h. islia uska COPY bana lia 
    obj[name] = value ? true : false;   // copy banye hua value me change karenge to const ko effect nhi karegea

    setInputValidate(obj); // input ki value update kara diye
  };
  // useEffect(() => {
  //   console.log("Counter Value" + counter);
  // },[counter]);

  useEffect(() => {
    console.log("Value Updated:", inputValidate);
  }, [inputValidate]);

  const handleSubmit = (event) => {
    event.preventDefault();
    let obj = JSON.parse(JSON.stringify(inputValidate));
    obj.formSubmitted = true;
    console.log(obj)
    setInputValidate(obj);
  };

  return (
    <div className="container" style={myStyle}>
      {console.log(inputValidate)}
      <form
        name="myForm"
        onSubmit={handleSubmit}
        className="row g-2"
        style={formData}
      >
        <h2 className="text-center" style={hed1}>
          Registration Form
        </h2>
        <div className="col-md-6">
          <label htmlFor="inputFname" className="form-label">
            First Name
          </label>
          <input
            type="text"
            className="form-control"
            id="inputFname"
            onChange={handleInput}
            name="firstName"
          />
          {inputValidate.formSubmitted && !inputValidate.firstName && (
            <div style={{color: "red", backgroundColor: "#ffcccc", marginTop: "2px", padding: "2px", borderRadius: "5px"}}>* Please enter first name</div>
          )}
        </div>
        <div className="col-md-6">
          <label htmlFor="inputLname" className="form-label">
            Last Name
          </label>
          <input
            type="text"
            className="form-control"
            id="inputLname"
            onChange={handleInput}
            name="lastName"
          />
          {inputValidate.formSubmitted && !inputValidate.lastName && (<div style={{color: "red", backgroundColor: "#ffcccc", marginTop: "2px", padding: "2px", borderRadius: "5px"}}>*Please enter last name</div>)}
       
        </div>
        <div className="col-md-6">
          <label htmlFor="inputEmail4" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="inputEmail4"
            onChange={handleInput}
            name="email"
          />
          {inputValidate.formSubmitted && !inputValidate.email && (
            <div style={{color: "red", backgroundColor: "#ffcccc", marginTop: "2px", padding: "2px", borderRadius: "5px"}}>* Please enter email</div>
          )}
        </div>
        <div className="col-md-6">
          <label htmlFor="inputPassword4" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="inputPassword4"
            onChange={handleInput}
            name="password"
          />
           {inputValidate.formSubmitted && !inputValidate.password && (
            <div style={{color: "red", backgroundColor: "#ffcccc", marginTop: "2px", padding: "2px", borderRadius: "5px"}}>* Please enter correct password</div>
          )}
        </div>

        <div className="col-12">
          <label htmlFor="inputAddress" className="form-label">
            Address
          </label>
          <input
            type="text"
            className="form-control"
            id="inputAddress"
            placeholder="1234 Main St"
            onChange={handleInput}
            name="address"
          />
           {inputValidate.formSubmitted && !inputValidate.address && (
            <div style={{color: "red", backgroundColor: "#ffcccc", marginTop: "2px", padding: "2px", borderRadius: "5px"}}>* Please enter address</div>
          )}
        </div>

        <div className="col-12">
          <label htmlFor="inputAddress2" className="form-label">
            Address 2
          </label>
          <input
            type="text"
            className="form-control"
            id="inputAddress2"
            placeholder="Apartment, studio, or floor"
            onChange={handleInput}
            name="address2"
          />
           {inputValidate.formSubmitted && !inputValidate.address2 && (
            <div style={{color: "red", backgroundColor: "#ffcccc", marginTop: "2px", padding: "2px", borderRadius: "5px"}}>* Please enter address2</div>
          )}
        </div>
        <div className="col-md-6">
          <label htmlFor="inputCity" className="form-label">
            City
          </label>
          <input
            type="text"
            className="form-control"
            id="inputCity"
            onChange={handleInput}
            name="city"
          />
           {inputValidate.formSubmitted && !inputValidate.city && (
            <div style={{color: "red", backgroundColor: "#ffcccc", marginTop: "2px", padding: "2px", borderRadius: "5px"}}>* Please enter your city</div>
          )}
        </div>
        <div className="col-md-4">
          <label htmlFor="inputState" className="form-label">
            State
          </label>
          <select
            id="inputState"
            className="form-select"
            onChange={handleInput}
            name="state"
            >
            <option selected>Choose...</option>
            <option selected>Jharkhand</option>
            <option>Kolkata</option>
            <option>Banglore</option>
            <option>Pune</option>
            <option>Uterpradesh</option>
          </select>
            {inputValidate.formSubmitted && !inputValidate.state && (
              <div style={{color: "red", backgroundColor: "#ffcccc", marginTop: "2px", padding: "2px", borderRadius: "5px"}}>*Please choose your state</div>
            )}
        </div>
        <div className="col-md-2">
          <label htmlFor="inputZip" className="form-label">
            Zip
          </label>
          <input
            type="text"
            className="form-control"
            id="inputZip"
            onChange={handleInput}
            name="zip"
          />
           {inputValidate.formSubmitted && !inputValidate.zip && (
            <div style={{color: "red", backgroundColor: "#ffcccc", marginTop: "2px", padding: "2px", borderRadius: "5px"}}>* Zip missing</div>
          )}
        </div>
        <div className="col-12">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="gridCheck"
              onChange={handleInput}
              name="check"
            />
            
            <label className="form-check-label" for="gridCheck">
              Select Term and Condition  {inputValidate.formSubmitted && !inputValidate.check && (
            <div style={{color: "red", backgroundColor: "#ffcccc", marginTop: "2px", padding: "2px", borderRadius: "5px"}}>* Please checked Terms and Condition</div>
          )}
            </label>
          </div>
        </div>
        <div className="col-12">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
