import React,{useState} from 'react'
import { JsonFunction } from 'react-router-dom'
import axios from 'axios'
import UserData from './UserData';

export default function EmployeeDetails(props) {

    const [employee, setEmployee] = useState([])

    async function getEmployeeData(){
        let result = await axios.get("http://localhost:3001/Employees");
        // setEmployee(result);
        console.log(result);
    }

  return (
    <>
        { <table className="table table-success table-hover">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Hire Date</th>
                    <th>Mobile Number</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{props.id}</td>
                </tr>
            </tbody>
        </table>}
    </>
  )
}
