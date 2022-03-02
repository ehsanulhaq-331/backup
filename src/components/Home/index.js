import React from "react";
import NavBar from "../NavBar";
import HeroPrimary from "../HeroPrimary";
import Counter from "../Counter";
import Categories from "../Categories";
import Footer from "../Footer";
import AppInfo from "../AppInfo/";
import CoverageMap from "../CoverageMap";
import AboutInfo from "../AboutInfo/";

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
function Home(){
    return(
    <>
      <NavBar />
      <HeroPrimary />
      <Counter />
      <Categories />
      <AppInfo />
     
      <AboutInfo />
      
 
      <CoverageMap />
      <section className="py-5 pro-listing">
            <div className="container">
            <h1 class="text-center fw-bold pb-4">Car <span class="text-primary"> Shipping </span> Routes</h1>
                <div className="row">
                    <div className="col-md-6">
                        <div className="bg-primary p-2 px-4">
                            <h4 className="m-0 text-white">Shipping to SHYPN</h4>
                        </div>
                        <OwlCarousel className='owl-theme' loop margin={0} nav dots={false} items={1} loop={true}>
                            <div>
                                <ol className="list-group list-group-numbered rounded-0">
                                    <li className="list-group-item d-flex justify-content-between align-items-start">
                                        <div className="ms-2 me-auto">
                                        <div className="fw-bold">Subheading</div>
                                        Cras justo odio
                                        </div>
                                        <span className="badge bg-primary rounded-pill">10</span>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-start">
                                        <div className="ms-2 me-auto">
                                        <div className="fw-bold">Subheading</div>
                                        Cras justo odio
                                        </div>
                                        <span className="badge bg-primary rounded-pill">11</span>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-start">
                                        <div className="ms-2 me-auto">
                                        <div className="fw-bold">Subheading</div>
                                        Cras justo odio
                                        </div>
                                        <span className="badge bg-primary rounded-pill">14</span>
                                    </li>
                                </ol>
                            </div>
                            <div>
                                <ol className="list-group list-group-numbered rounded-0">
                                    <li className="list-group-item d-flex justify-content-between align-items-start">
                                        <div className="ms-2 me-auto">
                                        <div className="fw-bold">Subheading</div>
                                        Cras justo odio
                                        </div>
                                        <span className="badge bg-primary rounded-pill">10</span>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-start">
                                        <div className="ms-2 me-auto">
                                        <div className="fw-bold">Subheading</div>
                                        Cras justo odio
                                        </div>
                                        <span className="badge bg-primary rounded-pill">11</span>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-start">
                                        <div className="ms-2 me-auto">
                                        <div className="fw-bold">Subheading</div>
                                        Cras justo odio
                                        </div>
                                        <span className="badge bg-primary rounded-pill">14</span>
                                    </li>
                                </ol>
                            </div>
                            <div>
                                <ol className="list-group list-group-numbered rounded-0">
                                    <li className="list-group-item d-flex justify-content-between align-items-start">
                                        <div className="ms-2 me-auto">
                                        <div className="fw-bold">Subheading</div>
                                        Cras justo odio
                                        </div>
                                        <span className="badge bg-primary rounded-pill">10</span>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-start">
                                        <div className="ms-2 me-auto">
                                        <div className="fw-bold">Subheading</div>
                                        Cras justo odio
                                        </div>
                                        <span className="badge bg-primary rounded-pill">11</span>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-start">
                                        <div className="ms-2 me-auto">
                                        <div className="fw-bold">Subheading</div>
                                        Cras justo odio
                                        </div>
                                        <span className="badge bg-primary rounded-pill">14</span>
                                    </li>
                                </ol>
                            </div>
                            <div>
                                <ol className="list-group list-group-numbered rounded-0">
                                    <li className="list-group-item d-flex justify-content-between align-items-start">
                                        <div className="ms-2 me-auto">
                                        <div className="fw-bold">Subheading</div>
                                        Cras justo odio
                                        </div>
                                        <span className="badge bg-primary rounded-pill">10</span>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-start">
                                        <div className="ms-2 me-auto">
                                        <div className="fw-bold">Subheading</div>
                                        Cras justo odio
                                        </div>
                                        <span className="badge bg-primary rounded-pill">11</span>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-start">
                                        <div className="ms-2 me-auto">
                                        <div className="fw-bold">Subheading</div>
                                        Cras justo odio
                                        </div>
                                        <span className="badge bg-primary rounded-pill">14</span>
                                    </li>
                                </ol>
                            </div>

                        </OwlCarousel>
                    </div>
                    <div className="col-md-6">
                    <div className="bg-primary p-2 px-4">
                            <h4 className="m-0 text-white">Shipping From SHYPN</h4>
                        </div>
                        <OwlCarousel className='owl-theme' loop margin={0} nav dots={false} items={1} loop={true}>
                            <div>
                                <ol className="list-group list-group-numbered rounded-0">
                                    <li className="list-group-item d-flex justify-content-between align-items-start">
                                        <div className="ms-2 me-auto">
                                        <div className="fw-bold">Subheading</div>
                                        Cras justo odio
                                        </div>
                                        <span className="badge bg-primary rounded-pill">10</span>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-start">
                                        <div className="ms-2 me-auto">
                                        <div className="fw-bold">Subheading</div>
                                        Cras justo odio
                                        </div>
                                        <span className="badge bg-primary rounded-pill">11</span>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-start">
                                        <div className="ms-2 me-auto">
                                        <div className="fw-bold">Subheading</div>
                                        Cras justo odio
                                        </div>
                                        <span className="badge bg-primary rounded-pill">14</span>
                                    </li>
                                </ol>
                            </div>
                            <div>
                                <ol className="list-group list-group-numbered rounded-0">
                                    <li className="list-group-item d-flex justify-content-between align-items-start">
                                        <div className="ms-2 me-auto">
                                        <div className="fw-bold">Subheading</div>
                                        Cras justo odio
                                        </div>
                                        <span className="badge bg-primary rounded-pill">10</span>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-start">
                                        <div className="ms-2 me-auto">
                                        <div className="fw-bold">Subheading</div>
                                        Cras justo odio
                                        </div>
                                        <span className="badge bg-primary rounded-pill">11</span>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-start">
                                        <div className="ms-2 me-auto">
                                        <div className="fw-bold">Subheading</div>
                                        Cras justo odio
                                        </div>
                                        <span className="badge bg-primary rounded-pill">14</span>
                                    </li>
                                </ol>
                            </div>
                            <div>
                                <ol className="list-group list-group-numbered rounded-0">
                                    <li className="list-group-item d-flex justify-content-between align-items-start">
                                        <div className="ms-2 me-auto">
                                        <div className="fw-bold">Subheading</div>
                                        Cras justo odio
                                        </div>
                                        <span className="badge bg-primary rounded-pill">10</span>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-start">
                                        <div className="ms-2 me-auto">
                                        <div className="fw-bold">Subheading</div>
                                        Cras justo odio
                                        </div>
                                        <span className="badge bg-primary rounded-pill">11</span>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-start">
                                        <div className="ms-2 me-auto">
                                        <div className="fw-bold">Subheading</div>
                                        Cras justo odio
                                        </div>
                                        <span className="badge bg-primary rounded-pill">14</span>
                                    </li>
                                </ol>
                            </div>
                            <div>
                                <ol className="list-group list-group-numbered">
                                    <li className="list-group-item d-flex justify-content-between align-items-start">
                                        <div className="ms-2 me-auto">
                                        <div className="fw-bold">Subheading</div>
                                        Cras justo odio
                                        </div>
                                        <span className="badge bg-primary rounded-pill">10</span>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-start">
                                        <div className="ms-2 me-auto">
                                        <div className="fw-bold">Subheading</div>
                                        Cras justo odio
                                        </div>
                                        <span className="badge bg-primary rounded-pill">11</span>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-start">
                                        <div className="ms-2 me-auto">
                                        <div className="fw-bold">Subheading</div>
                                        Cras justo odio
                                        </div>
                                        <span className="badge bg-primary rounded-pill">14</span>
                                    </li>
                                </ol>
                            </div>

                        </OwlCarousel>
                    </div>
                </div>
            
            </div>
        </section>
      <Footer />
    </>
    )
}

export default Home;