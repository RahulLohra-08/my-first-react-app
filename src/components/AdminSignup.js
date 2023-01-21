import React from 'react'
import Admin from './Admin'

export default function AdminSignup() {
  return (
    <>
        <div className="d-flex justify-content-center">
        <div className="card my-3" style={{width: "18rem"}}>
            {/* <img src="..." className="card-img-top" alt="..." /> */}
            <div className="card-body">
                <h5 className="card-title text-center">Signup</h5>
                <form>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input type="text" className="form-control" id="name" />
                        {/* <div id="name" className="form-text">*Please enter your name</div> */}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="mobile" className="form-label">Mobile</label>
                        <input type="email" className="form-control" id="mobile"  name='mobile'/>
                        {/* <div id="mobile" className="form-text">*Please Enter your mobile no</div> */}
                    </div>
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" htmlFor="exampleCheck1" checked>Select Terms & Condition</label>
                    </div>
                    <button type="submit" className="btn bg-success text-white" style={{}}>Signup</button>
                </form>
                {/* <div>
                    <AdminLogin/>
                </div> */}
            </div>
        </div>
    </div>
    </>
  )
}
