import React from 'react'

export default function Product(props) {
  return (
    <div className='col-md-3'>
        {/* <h3>{props.user.firstName}</h3> */}




        <div class="card" style={{width: "18rem"}}>
            <img src={props.user.image} class="card-img-top" alt="..." />
            <div class="card-body">
                <span class="card-title mx-2">{"Name: "+ props.user.firstName}</span>
                <span class="card-title mx-2">{props.user.maidenName}</span>
                <span class="card-title">{props.user.lastName}</span>
                <p class="card-text">{"Email: "+props.user.email}</p>
                <p class="card-text">{"Age: "+props.user.age}</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>




        {/* <table className='table table-hover table-bordered'>
            <thead>
                <tr>
                    <th>First Name</th>
                    <th>Middle Name</th>
                    <th>Last Name</th>
                    <th>Age</th>
                    <th>Gender</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>User Name</th>
                    <th>Password</th>
                    <th>Birth Data</th>
                    <th>Blood Group</th>
                    <th>Height</th>
                    <th>Weight</th>
                    <th>Eye Color</th>
                    <th>Domain</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{props.user.firstName}</td>
                    <td>{props.user.maidenName}</td>
                    <td>{props.user.lastName}</td>
                    <td>{props.user.age}</td>
                    <td>{props.user.gender}</td>
                    <td>{props.user.email}</td>
                    <td>{props.user.phone}</td>
                    <td>{props.user.userName}</td>
                    <td>{props.user.password}</td>
                    <td>{props.user.birthDate}</td>
                    <td>{props.user.bloodGroup}</td>
                    <td>{props.user.height}</td>
                    <td>{props.user.weight}</td>
                    <td>{props.user.eyeColor}</td>
                    <td>{props.user.domain}</td>
                </tr>
            </tbody>
        </table> */}
       
    </div>
  )
}
