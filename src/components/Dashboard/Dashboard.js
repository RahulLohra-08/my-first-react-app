import axios from 'axios'
import React,{useState, useEffect} from 'react'
import Sidebar from './Sidebar';
import Piechart from './Piechart';

function Dashboard() {
    const [record, setRecord] = useState('')

    async function getProducts() {
        const result = await axios.get("https://fakestoreapi.com/products");
        setRecord(result.data);
        console.log(result.data)
      }

      useEffect(() => {
        getProducts();
      }, [])
      

  return (
    <>
    {console.log("record",record)}
        <section >
            <div className="row ">
            <Sidebar data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions"/>
                <div className="col-md-10 container-fluid" >
                    <div className="row row-cols-1 row-cols-md-4 g-2 m-1 my-3">
                        <div className="col">
                            <div className="card h-100">
                                <div className="card-body">
                                    <h6 className="card-title"  style={{opacity: '0.8'}}>TOTAL EARNINGS</h6><span className='text-warning'><i className="bi bi-arrow-up-right"></i>16.64%</span>
                                    <h5>$559.k</h5>
                                    <a href="#" className='text-secondary'><span>view net earnings</span> <span className='' style={{float: 'right'}}><i className="bi bi-currency-dollar text-warning"></i></span></a>
                                </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card h-100">
                                <div className="card-body">
                                <h6 className="card-title"  style={{opacity: '0.8'}}>Orders</h6><span className='text-info'><i className="bi bi-arrow-up-right"></i>16.64%</span>
                                <h5>$559.k</h5>
                                    <a href="#" className='text-secondary'><span>view all orders</span> <span className='' style={{float: 'right'}}><i className="bi bi-bag-check-fill text-primary"></i></span></a>
                                </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card h-100">
                                <div className="card-body">
                                    <h6 className="card-title" style={{opacity: '0.8'}}>CUSTOMERS</h6><span className='text-success'><i className="bi bi-arrow-up-right"></i>16.64%</span>
                                    <h5>$559.k</h5>
                                    <a href="#" className='text-secondary'><span>see details</span> <span className='' style={{float: 'right'}}><i className="bi bi-person-circle text-info"></i></span></a>
                                </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card h-100">
                                <div className="card-body">
                                    <h6 className="card-title"  style={{opacity: '0.8'}}>MY BALANCE</h6><span className='text-danger'><i className="bi bi-arrow-up-right"></i>16.64%</span>
                                    <h5>$559.k</h5>
                                    <a href="#" className='text-secondary'><span>Withdraw money</span> <span className='' style={{float: 'right'}}><i className="bi bi-wallet" style={{color: '#8a259c'}}></i></span></a>
                                </div>
                                </div>
                            </div>
                        </div>

                        {/* Add product Details */}
                        <div className="row">
                        {/* <!-- Button trigger modal --> */}
                                <div className="col-md-8">
                                    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                    <span><i className="bi bi-plus-circle"></i></span> Add Product Details
                                    </button>

                                    {/* <!-- Modal --> */}
                                    <div className="modal fade " id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                        <div className="modal-dialog">
                                            <div className="modal-content">
                                                <div className="modal-header">
                                                    <h1 className="modal-title fs-5">Add Product Details</h1>
                                                    {/* <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button> */}
                                                </div>

                                                <div className="modal-body border-info">
                                                    <div className="card border-success" style={{width: "18rem;"}}>
                                                        <div className="card-body">
                                                            <form action="">
                                                                <div className="mb-3">
                                                                    <label for="title" className="form-label">Title</label>
                                                                    <input type="text" className="form-control  border-start-0 border-end-0 border-info" id="title" placeholder="input product title" />
                                                                </div>
                                                                <div className="mb-3">
                                                                    <label for="description" className="form-label">Description</label>
                                                                    <input type="text" className="form-control border border-start-0 border-end-0 border-info" id="description" placeholder="input product description..." />
                                                                </div>
                                                                <select className="form-select form-select-md">
                                                                    <option selected>Select Category</option>
                                                                    <option value="1">One</option>
                                                                    <option value="2">Two</option>
                                                                    <option value="3">Three</option>
                                                                </select>
                                                                <div className="mb-3">
                                                                    <label for="price" className="form-label">Price</label>
                                                                    <input type="text" className="form-control border  border-start-0 border-end-0 border-info" id="price" placeholder="input product description..." />
                                                                </div>
                                                                <div className="mb-3">
                                                                    <label for="image" className="form-label">Upload Image</label>
                                                                    <input type="file" className="form-control form-control-md border  border-start-0 border-end-0 border-info" id="image" placeholder="Upload Image" />
                                                                </div>
                                                                <div className="mb-3 text-center">
                                                                    <a href='#' className='btn btn-success' style={{width: '100%'}}>Add Product</a>
                                                                </div>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-3" style={{position: 'relative'}}>
                                        <input type="search" className='' placeholder='Search here...' 
                                            style={{background: '#c2d6d6', padding: '7px',position: 'relative',border: 'none', float: 'right', marginRight: '0px', borderRadius: '6px',}}
                                        />
                                </div>
                            </div>
                        <div className="row row-cols-1 row-cols-md-2 g-4 my-3">
                            <div className="col-md-12">
                                <div className="card">
                                    <div className="card-body rounded-3" style={{background: '#e6ffee'}}>
                                        <h4 className='text-dark text-center'>Product Details</h4>
                                        <table className="table table-bordered " >
                                        <thead className=''>
                                            <tr className='text-center' style={{background: '#742180', color: 'white', padding: '2px'}}>
                                            <th scope="col">ID</th>
                                            <th scope="col">Title</th>
                                            <th scope="col">Description</th>
                                            <th scope="col">Category</th>
                                            <th scope="col">Buyer</th>
                                            <th scope="col">Rating</th>
                                            <th scope="col">Price</th>
                                            <th scope="col">Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>                                            {
                                                record.map && record.slice(0, 6).map((product)=>{
                                                    return(
                                                        <tr className='' key={"product"+product.id} style={{background: "#ccffdc"}}>
                                                            <th className='text-center'>{product.id}</th>
                                                            <td>{product.title}</td>
                                                            <td>{product.description.substring(0, 20)}</td>
                                                            <td>{product.category}</td>
                                                            <td>{product.rating.count}</td>
                                                            <td>{product.rating.rate}</td>
                                                            <td>{"₹"+product.price}</td>
                                                            <td className='d-flex'>
                                                                <a href="#" className='btn btn-success my-1' title='Edit Product Details' style={{width: '90px'}}><i className="bi bi-pencil-square" style={{float: 'left'}}></i>Edit</a>
                                                                <a href="#" className='btn btn-danger mx-1 my-1' title='Delete Product Details' style={{width: '90px'}}><i className="bi bi-trash3-fill" style={{float: 'left', marginLeft: '0px'}}></i>Delete</a>
                                                            </td>
                                                        </tr>
                                                    )
                                                })
                                            }
                                            </tbody>
                                        </table>
                                    </div>
                                    </div>
                                 </div>
                                    {/* <div className="col-4">
                                        <div className="row">
                                            <div className="col-md-12">
                                                <div className="card">
                                                    <img src={'https://www.slideteam.net/media/catalog/product/cache/1280x720/q/u/quarterly_pie_chart_of_ecommerce_sales_slide01.jpg'} alt="" />
                                                <div className="card-body">
                                            </div>
                                            <div className="col-md-12  my-1">
                                                <div className="card">
                                                    <img src={'https://d2mvzyuse3lwjc.cloudfront.net/doc/en/UserGuide/images/2D_B_and_W_Pie_Chart/2D_B_W_Pie_Chart_1.png?v=83139'} alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div> */}
                                {/* </div> */}
                            {/* </div> */}
                        </div>

                        {/* <div className="row">
                            <h4 className='text-center text-secondary' >Product Details</h4>
                        </div>
                        <table className="table table-hover table-striped m-2" >
                            <thead className='' >
                                <tr className='text-center' style={{background: '#742180', color: 'white', padding: '2px'}}>
                                <th scope="col">Id</th>
                                <th scope="col">Titie</th>
                                <th scope="col">Description</th>
                                <th scope="col">Category</th>
                                <th scope="col">Buyer</th>
                                <th scope="col">Rating</th>
                                <th scope="col">Price</th>
                                <th scope="col">Image</th>
                                <th scope="col-2">Edit & Delete</th>
                                </tr>
                            </thead>
                            <tbody >
                                { 
                                   record.map && record.slice(0, 8).map((product)=>{
                                       return (<tr className='' key={"product"+product.id} style={{background: "#ccffdc"}}>
                                            <th>{product.id}</th>
                                            <td>{product.title}</td>
                                            <td>{product.description.substring(0, 100)}</td>
                                            <td>{product.category}</td>
                                            <td>{product.rating.count}</td>
                                            <td>{product.rating.rate}</td>
                                            <td>{"₹"+product.price}</td>
                                            <td><div className="col-md-12">
                                                <img src={product.image} className="img-fluid rounded-start" style={{height: '100px'}} alt={product.title} />
                                                </div>
                                            </td>
                                            <td>
                                                <div className="col-md-4">
                                                <button type="button" className="btn "
                                                style={{
                                                    backgroundColor: "green",
                                                    width: "100px",
                                                    color: "white",
                                                }}> <span style={{float: 'left'}}><i className="bi bi-pencil-square"></i></span>
                                               Edit
                                                </button>
                                            <button type="button" className="btn my-2"
                                                style={{
                                                    backgroundColor: "#ff1a1a",
                                                    width: "100px",
                                                    color: "white",
                                                    
                                                }}>
                                                <span style={{float: 'left'}} ><i className="bi bi-trash-fill" ></i>Delete</span>
                                                </button>
                                                </div>
                                            </td>
                                        </tr>)

                                    })
                                }
                            </tbody>
                        </table> */}
                </div>
                {/* <div className="col-lg-5 col-md-6 col-sm-12 col-sm-offset-5">
                    <h4 className='title mt-3 mb-3 text-center text-secondary'>Data in Chart</h4>
                    <div className=" ml-3 mb-5" style={{height: '300', width: '400'}}><Piechart /></div>
                </div> */}
            </div>
        </section>
    </>
  )
}

export default Dashboard