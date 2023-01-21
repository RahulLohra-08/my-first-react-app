import React from 'react'
import GalleryContent from './GalleryContent'
import StudentForm from './StudentForm'
import About from './About'
import Products from './products'
import EcommerceProducts from './EcommerceProducts'
import ProductsDetails from './ProductsDetails'
import Product from './Product'
import Sidebar from './Sidebar'

export default function Home(props) {
    return(
        <>
            <div>
                
                <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                        <img src={"https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014__340.jpg"} className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Nature</h5>
                            <p>Yet we have so disconnected ourselves from the natural world that it is easy—and often convenient—to forget that nature remains as giving as ever, even as it vanishes bit-by-bit.</p>
                        </div>
                        </div>
                        <div className="carousel-item">
                        <img src={"https://wallpapers.com/images/hd/maldives-and-sea-holiday-hd-iyidzfb55r4ajji4.jpg"}className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Beach</h5>
                            <p>Beyond such physical goods, the natural world provides less tangible, but just as important, gifts in terms of beauty, art, and spirituality..</p>
                        </div>
                        </div>
                        <div className="carousel-item">
                        <img src={"https://wallpaperaccess.com/full/138728.jpg"} className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Magnificent View</h5>
                            <p>The clothes we wear to cover our body and get saved from extreme weather conditions also come from nature.</p>
                        </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
            <hr />
            {/* <section>
                <EcommerceProducts />
            </section> */}
            <section>
                <h2 className='text-center'>Products Collection</h2>
                <Products/>
                {/* <Product /> */}
            </section>
            {/* <section>
                <StudentForm />
            </section>
            <section>
                <About/>
            </section> */}
        </>
    )
}