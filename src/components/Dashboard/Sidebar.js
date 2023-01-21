import React from 'react'

function Sidebar() {
  return (
    <>
        <div className='col-md-3 col-lg-2 pl-0 sidebar-offcanvas'  data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel"  role='navigation' style={{position: 'sticky', background: '#d1e0e0', height: '70rem'}}>
            <ul className='nav flex-column pl-0 pt-2 p-3 sticky-top'>
                <li className='nav-item '><a href=""><h5>Rahul Lohra</h5></a></li>
                <li className='nav-item  '><a href="/admin" className='nav-link text-secondary'><i class="bi bi-boxes"></i>Product Details</a></li>
                <a className="btn  dropdown-toggle text-secondary"  data-bs-toggle="dropdown" aria-expanded="false">
                    Dropdown button
                </a>
                <ul className="dropdown-menu dropdown-menu" style={{background: '#d1e0e0', color: '#c2c2a3'}}>
                    <li><a className="dropdown-item active" href="#">Action</a></li>
                    <li><a className="dropdown-item" href="#">Another action</a></li>
                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><a className="dropdown-item" href="#">Separated link</a></li>
                </ul>
                {/* <li className='nav-item mb-2 mt-1'>
                    <a href="#submenu1" className='nav-link text-secondary fx-5' data-toggle='collapse' data-target='#submenu1'>Reports</a>
                    <ul className='list-unstyled flex-column ml-0 collapse' id='submenu1' arial-expanded='false'>
                        <li><a href="" className='nav-link text-secondary nav-item mb-2'><i class="bi bi-box-seam-fill mx-1"></i>Contact</a></li>
                        <li><a href="" className='nav-link text-secondary nav-item mb-2'><i class="bi bi-box-seam-fill mx-1"></i>Contact</a></li>
                    </ul>
                </li> */}
                <li className='nav-item mb-2'><a href="" className='nav-link text-secondary'><i className="bi bi-box-seam-fill mx-1"></i>Analytics</a></li>
                <li className='nav-item mb-2'><a href="" className='nav-link text-secondary'><i className="bi bi-box-seam-fill mx-1"></i>Export</a></li>
                <li className='nav-item mb-2'><a href="" className='nav-link text-secondary'><i className="bi bi-box-seam-fill mx-1"></i>Layout</a></li>
                <li className='nav-item mb-2'><a href="" className='nav-link text-secondary'><i className="bi bi-box-seam-fill mx-1"></i>Flex</a></li>
                <li className='nav-item mb-2'><a href="" className='nav-link text-secondary'><i className="bi bi-box-seam-fill mx-1"></i>Contact</a></li>
                <li className='nav-item mb-2'><a href="" className='nav-link text-secondary'>Templet</a></li>
                <li className='nav-item mb-2'><a href="" className='nav-link text-secondary'>Theam</a></li>
            </ul>
        </div>
    </>
  )
}

export default Sidebar