import React, { useState, useEffect } from "react";
import { json } from "react-router-dom";
import axios from "axios";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import Success from "../Success";
import WarningStatus from "./Warning";

// import LoadingOverlay from 'react-loading-overlay'


export default function Employes(props) {
  <Success type="success" text="Add successfully" />;

  // ---------For redux --------------//
  // const loading = useSelector((state) =>  state.loading);

  // console.log(loading);

  // const dispatch = useDispatch();
  // const {showLoader, hideLoader} = bindActionCreators(actionCreater, dispatch);


  //----------------------//

  //for showing changes
  const [inputData, setInputData] = useState({
    id: "",
    name: "",
    email: "",
    hire_date: "",
    mobile: "",
  });

  // const [isActive, setIsActive] = useState(false)

  //--------- For validation purpose-------------//
  const [inputValidate, setInputValidate] = useState({
    addEmployee: false,
    name: false,
    email: false,
    hire_date: false,
    mobile: false,
  });

  //handle add show & hide
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //handle EditEmployee show hide
  const [editShow, setEditShow] = useState(false);
  const editHandleClose = () => setEditShow(false);
  const editHandleShow = () => setEditShow(true);

  //For error Validation
  const [saveError, setSaveError] = useState("");

  const [employee, setEmployee] = useState([]);

  const [editingEmployee, setEditingEmployee] = useState({
    id: "",
    name: "",
    email: "",
    hire_date: "",
    mobile: "",
  });

  const { id, name, email, hire_date, mobile } = editingEmployee;

  //-----handle Input changes, handle input- Validation-----------//
  const handleInput = (event) => {
    const { name, value, type, checked } = event.target;
    if (type === "checkbox") {
      inputData[name] = checked;
    } else {
      inputData[name] = value;
      // setEditingEmployee({...editingEmployee, [event.target.name]: event.target.value}) //employee ke data ko edit kr sakte hai ab
    }

    let inputObj = JSON.parse(JSON.stringify(inputData));
    setInputData(inputObj);

    inputValidate[name] = value ? true : false; // for Validation

    let obj = JSON.parse(JSON.stringify(inputValidate));
    setInputValidate(obj);
  };

  //------UseEffect state-------------//
  useEffect(() => {
    console.log(inputData);
  }, [inputData]);

  useEffect(() => {
    console.log("Editing Data");
    console.log(editingEmployee);
  }, [editingEmployee]);

  useEffect(() => {
    console.log(inputValidate);
  }, [inputValidate]);

  //--------for getting employee data---------------//
  async function getEmployeeDetails() {

    const result = await axios.get(
      "http://localhost:3001/Employees",
      inputData
    );
    setEmployee(result.data);
    console.log(result);
  }

  useEffect(() => {
    getEmployeeDetails();
  }, []);

  //-------Handle submited && employee data ko insert karna----------//
  //-----------Add Employee Data-----------//

  let handleSubmit = async (event) => {
    try {
      event.preventDefault(); // bar bar refresh na ho usko rokne ke lia
      var validationData = JSON.parse(JSON.stringify(inputValidate));
      validationData.addEmployee = true;
      setInputValidate(validationData);

      console.log(inputData);

      let valid = true;
      Object.keys(inputValidate).map((item) => {
        if (inputValidate[item] === false) valid = false;
      });

      console.log(valid);
      if (!valid) {
        alert("Invalid input");
        return;
      }

      let result = await axios.post(
        "http://localhost:3001/Employees",
        inputData
      );
      getEmployeeDetails();
      handleClose();
    } catch (ex) {
      setSaveError(ex.message);
    }
  };

  //------------Edit Employee Data--------------//

  let handleEditInput = (event) => {
    const { name, value, type, checked } = event.target;
    if (type === "checkbox") {
      editingEmployee[name] = checked;
    } else {
      editingEmployee[name] = value;

      // setEditingEmployee({...editingEmployee, [event.target.name]: event.target.value}) //employee ke data ko edit kr sakte hai ab
    }
    let inputObj = JSON.parse(JSON.stringify(editingEmployee));
    setEditingEmployee(inputObj);

    inputValidate[name] = value ? true : false; // for Validation

    let obj = JSON.parse(JSON.stringify(inputValidate));
    setInputValidate(obj);
  };

  async function loadEditData(id) {
    try {
      let result = await axios.get("http://localhost:3001/Employees/" + id);
      setEditingEmployee(result.data);
      console.log(result.data);
      editHandleShow();
    } catch (err) {
      setSaveError(err.message);
    }
  }

  const submitEmoloyee = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:3001/Employees/${id}`, editingEmployee);
    getEmployeeDetails();
    editHandleClose();
  };

  //--------Delete Employee Data--------------//

  const deleteEmployee = async (id) => {
    await axios.delete(`http://localhost:3001/Employees/${id}`);
    submitEmoloyee();
    getEmployeeDetails();
  };

  return (
    <>
    {/* <Spinner/> */}
    {/* <Spinner/> */}

    {/* <button className="btn btn-primary mx-2">Show Loader {loading}</button> */}
    {/* <button className="btn btn-primary" onClick={()=>{hideLoader(false)}}>Hide</button> */}

      <button
        type="button"
        // data-bs-toggle="modal" data-bs-target="#exampleModal"
        className="btn btn-primary my-2 mx-2 border-0"
        onClick={handleShow}
        style={{ background: "#009933" }}
        >
        Add Employee
      </button>
      {/* <button onClick={updateEmployee}>Loader Show</button> */}
      {/* <!-- Modal --> */}
      {show && (
        <div
        className="modal fade show d-block"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="false"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Add Employee
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={handleClose}
                  ></button>
              </div>

              <div className="modal-body">
                {/*---------- form data ------------------------- */}
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="exampleInputName" className="form-label">
               
                      Employee Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputName"
                      aria-describedby="emailHelp"
                      name="name"
                      onChange={handleInput}
                      // required
                    />
                    {inputValidate.addEmployee && !inputValidate.name && (
                      <div
                        id="emailHelp"
                        className="form-text"
                        style={{
                          color: "red",
                          padding: "2px",
                          backgroundColor: "#ffcccc",
                          borderRadius: "8px",
                        }}
                        required
                      >
                        *Please enter your name
                      </div>
                    )}
                  </div>

                  <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                      Email address
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      name="email"
                      onChange={handleInput}
                      // required
                    />
                    {inputValidate.addEmployee && !inputValidate.email &&(
                      <div
                        id="emailHelp"
                        className="form-text"
                        style={{
                          color: "red",
                          padding: "2px",
                          backgroundColor: "#ffcccc",
                          borderRadius: "8px",
                        }}
                        // required
                      >
                        We'll never share your email with anyone else.
                      </div>
                    )}
                  </div>
                  <div className="mb-3">
                    <label htmlFor="hireDate" className="form-label">
                      Hire Date
                    </label>
                    <input
                      type="date"
                      className="form-control"
                      id="hireDate"
                      aria-describedby="emailHelp"
                      name="hire_date"
                      onChange={handleInput}
                      // required
                    />
                    {inputValidate.addEmployee && !inputValidate.hire_date && (
                      <div
                        id="emailHelp"
                        className="form-text"
                        style={{
                          color: "red",
                          padding: "2px",
                          backgroundColor: "#ffcccc",
                          borderRadius: "8px",
                        }}
                      >
                        *Please enter employer hire date
                      </div>
                    )}
                  </div>
                  <div className="mb-3">
                    <label htmlFor="mobileNo" className="form-label">
                      Mobile Number
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="mobileNo"
                      name="mobile"
                      onChange={handleInput}
                      // required
                    />
                    {inputValidate.addEmployee && !inputValidate.mobile && (
                      <div
                        id="emailHelp"
                        className="form-text"
                        style={{
                          color: "red",
                          padding: "2px",
                          backgroundColor: "#ffcccc",
                          borderRadius: "8px",
                        }}
                      >
                        *Please enter your mobile no
                      </div>
                    )}
                  </div>
                  {saveError && (
                    <WarningStatus text={saveError} type="alert alert-danger" />
                  )}
                  <button type="submit" className="btn btn-primary">
                    Add Employee
                  </button>
                </form>
              </div>
              {/* ------------------------------------------------------------ */}
            </div>
          </div>
        </div>
      )}

      <div className="container data">
        {employee && (
          <table className="table table-striped table-hover">
            <thead>
              <tr style={{ backgroundColor: "#ac3973" }}>
                <th>Id</th>
                <th>Name</th>
                <th>Email</th>
                <th>Hire Date</th>
                <th>Mobile Number</th>
                <th>Edit & Delete</th>
              </tr>
            </thead>
            <tbody>
              {employee.map &&
                employee.map((employee) => {
                  return (
                    <tr
                      key={"employee" + employee.id}
                      style={{ backgroundColor: "#d6d6c2" }}
                    >
                      <td>{employee.id}</td>
                      <td>{employee.name}</td>
                      <td>{employee.email}</td>
                      <td>{employee.hire_date}</td>
                      <td>{employee.mobile}</td>
                      <td>
                        {/* <!-- Button trigger modal --> */}
                        <button
                          type="button"
                          className="btn mx-2"
                          style={{
                            backgroundColor: "green",
                            width: "80px",
                            color: "white",
                          }}
                          onClick={() => {
                            loadEditData(employee.id);
                          }}
                        >
                          Edit
                        </button>

                        {/* <!-- Modal --> */}

                        {editShow && (
                          <div
                            className="modal fade show d-block"
                            id="exampleModal"
                            tabIndex="-1"
                            aria-labelledby="exampleModalLabel"
                            aria-hidden="false"
                          >
                            <div className="modal-dialog">
                              <div className="modal-content">
                                <div className="modal-header">
                                  <h5
                                    className="modal-title"
                                    id="exampleModalLabel"
                                  >
                                    Edit Employee Details
                                  </h5>
                                  <button
                                    type="button"
                                    className="btn-close"
                                    onClick={editHandleClose}
                                  ></button>
                                </div>
                                <div className="modal-body">
                                  {/*--------- Employee Form  -----------*/}
                                  <form onSubmit={submitEmoloyee}>
                                    <div className="mb-3">
                                      <label
                                        htmlFor="name"
                                        className="form-label"
                                      >
                                        Name
                                      </label>
                                      <input
                                        type="text"
                                        name="name"
                                        className="form-control"
                                        id="name"
                                        onChange={handleEditInput}
                                        value={editingEmployee.name}

                                        // value={employee.name}
                                      />
                                    </div>

                                    <div className="mb-3">
                                      <label
                                        htmlFor="exampleInputEmail1"
                                        className="form-label"
                                      >
                                        Email
                                      </label>
                                      <input
                                        type="email"
                                        name="email"
                                        className="form-control"
                                        id="exampleInputEmail1"
                                        aria-describedby="emailHelp"
                                        onChange={handleEditInput}
                                        // value={employee.email}
                                        value={editingEmployee.email}
                                      />
                                      <div id="emailHelp" className="form-text">
                                        We'll never share your email with anyone
                                        else.
                                      </div>
                                    </div>

                                    <div className="mb-3">
                                      <label
                                        htmlFor="hire"
                                        className="form-label"
                                      >
                                        Hire Date
                                      </label>
                                      <input
                                        type="text"
                                        name="hire_date"
                                        className="form-control"
                                        id="hire"
                                        onChange={handleEditInput}
                                        value={editingEmployee.hire_date}
                                        // value={employee.hire_date}
                                      />
                                    </div>

                                    <div className="mb-3">
                                      <label
                                        htmlFor="mobile"
                                        className="form-label"
                                      >
                                        Mobile
                                      </label>
                                      <input
                                        type="text"
                                        name="mobile"
                                        className="form-control"
                                        id="mobile"
                                        onChange={handleEditInput}
                                        value={editingEmployee.mobile}
                                        // value={employee.mobile}
                                      />
                                    </div>
                                    {saveError && (
                                      <WarningStatus
                                        text={saveError}
                                        type="alert alert-danger"
                                      />
                                    )}
                                    <button
                                      type="submit"
                                      className="btn btn-primary"
                                      style={{
                                        backgroundColor: "green",
                                        color: "white",
                                        width: "80px",
                                      }}
                                    >
                                      Edit
                                    </button>
                                  </form>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                        <a
                          href="#"
                          className="btn btn-primary border-0"
                          style={{ backgroundColor: "red" }}
                          onClick={() => deleteEmployee(employee.id)}
                        >
                          Delete
                        </a>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        )}
        {/* <ShowLoader/>
        <Loader/> */}
      </div>
      
    </>
  );
}
