import axios from 'axios'
import React,{useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import WarningStatus from './Warning';

export default function EditEmployee() {

     //for showing changes
  const [inputData, setInputData] = useState({
      id: "",
      name: "",
      email: "",
      hire_date: "",
      mobile: "",
    });

    const [update, setUpdate] = useState([])

    const [saveError, setSaveError] = useState("")

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    
    const {id} = useParams();

  //--------- For validation purpose-------------//
  const [inputValidate, setInputValidate] = useState({
    addEmployee: false,
    name: false,
    email: false,
    hire_date: false,
    mobile: false,
  });

  //------UseEffect state-------------//
  useEffect(() => {
    console.log(inputData);
  }, [inputData]);

  useEffect(() => {
    console.log(inputValidate);
  }, [inputValidate]);

    async function getEmployeeData() {
        let result = await axios.get("http://localhost:3001/Employees/"+ id);
        setUpdate(result.data);
        // console.log(result.data);  
    }

    useEffect(() => {
      getEmployeeData();
    }, [])
    
      //-----handle Input changes, handle input Validation-----------//
  const handleInput = (event) => {
    const { name, value, type, checked } = event.target;
    if (type === "checkbox") {
      inputData[name] = checked;
    } else {
      inputData[name] = value;
    }

    inputValidate[name] = value ? true : false; // for Validation

    let obj = JSON.parse(JSON.stringify(inputValidate));
    setInputValidate(obj);
  };


    let handleSubmit = async (event) => {
        try{
          event.preventDefault(); // bar bar refresh na ho usko rokne ke lia
          let obj = JSON.parse(JSON.stringify(inputValidate));
          setInputValidate(obj);
          console.log(inputData);

          if (inputValidate) {
          let result = await axios.post(
              "http://localhost:3001/Employees",
              inputData
              ); 
              getEmployeeData();
          } 
          else {
          obj.addEmployee = true;
          }
        } catch(em) {
          setSaveError(em.message);
        }
    }

  return (
   <>
    {console.log(update)}
    {/* <!-- Button trigger modal --> */}
<button type="button" className="btn btn-primary my-3 mx-3" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Edit Employee Details
</button>

{/* <!-- Modal --> */}
<div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Edit Employee Details</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        {/*----------- form data -------------- */}
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input type="text" className="form-control" id="name" placeholder={update.name} onChange={handleInput} />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder={update.email} onChange={handleInput} />
          {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
        </div>

        <div className="mb-3">
          <label htmlFor="hire" className="form-label" >Hire Date</label>
          <input type="text" className="form-control" id="hire" placeholder={update.hire_date} onChange={handleInput}/> 
        </div>

        <div className="mb-3">
          <label htmlFor="mobile" className="form-label">Mobile</label>
          <input type="text" className="form-control" id="mobile" placeholder={update.mobile}  onChange={handleInput}/>
        </div>
      {saveError && 
        <WarningStatus text={saveError} type="alert alert-danger"/>
      }
        <button type="submit" className="btn btn-primary" >Save changes</button>
      </form>
            
      
      </div>
      
    </div>
  </div>
</div>


{/* <Button variant="primary" onClick={handleShow}>
        Show Employee Details
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Employee Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          ------------- form -----------
          <Form>
            <Form.Group className="mb-3" controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder={update.name} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder={update.email} />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="hire_date">
              <Form.Label>Hire Date</Form.Label>
              <Form.Control type="text" placeholder={update.hire_date} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="mobile">
              <Form.Label>mobile</Form.Label>
              <Form.Control type="text" placeholder={update.mobile} />
            </Form.Group>
            
          </Form>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal> */}
    
    {/* <table className="table table-striped table-hover p-2">
        <thead>
            <tr style={{ backgroundColor: "#ac3973" }}>
                <th>Name</th>
                <th>Email</th>
                <th>Hire Date</th>
                <th>Mobile Number</th>
                <th>Edit</th>
            </tr>
        </thead>
        <tbody>
            
                <tr className='' key={'employee'+ update.id}>
                    <td className='table-active'><input type="text" className='border-0 p-2' name='name' placeholder={update.name} /></td>
                    <td><input type= "text" className='border-0 p-2' name="email" id="" placeholder={update.email} /></td>
                    <td><input type="text" className='border-0 p-2' name='hire_date' placeholder={update.hire_date} /></td>
                    <td><input type="text" className='border-0 p-2' name='mobile' placeholder={update.mobile} /></td>
                    <td><a
                        href={"/employees/"}
                        className="btn btn-primary mx-2 border-0"
                        style={{ backgroundColor: "green" }}
                        onClick={handleChange}
                      >
                        Update
                      </a></td>
                </tr>
        
        </tbody>
    </table> */}
   </>
  )
}
