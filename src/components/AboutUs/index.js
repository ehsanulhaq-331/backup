import React from "react";
import NavBar from "../NavBar";
import Footer from "../Footer";
import {Link} from "react-router-dom";
function AboutUs(){
    return(
    <>
      <NavBar />

      














      <section className="inner-page-hero bg-about-us py-5 bg-primary">
             <div className="container">
                 <div className="row d-flex align-items-center">
                     <div className="col-md-5">
                        <h1>About Us </h1>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                        
                     </div>
                     
                 </div>
                 
             </div>
      </section>

      <section className="about-page py-5 mt-2">
          <div className="container overflow-hidden"> 
              <div className="row gy-4">
                  <div className="col-md-6 d-flex align-items-stretch">
                      <div className="card p-3">
                          <h3 className="fw-bold">What is Lorem Ipsum?</h3>
                          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                          <div>
                            <Link to="" className="btn btn-primary mt-2  text-white">View More</Link>
                          </div>
                      </div>
                      
                  </div>
                  <div className="col-md-6 d-flex align-items-stretch">
                      <div className="about-page--about-img">
                        <img className="rounded" src="/assets/images/slider-2.png" alt="about" />
                      </div>
                      
                  </div>
                  <div className="col-md-6 d-flex align-items-stretch">
                    <div className="about-page--about-img">
                      <img className="rounded" src="assets/images/slider-02.png" alt="about" />
                    </div>
                    
                  </div>
                  <div className="col-md-6 d-flex align-items-stretch">
                        <div className="card p-3">
                            <h3 className="fw-bold">What is Lorem Ipsum?</h3>
                          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                          <div>
                            <Link to="" className="btn btn-primary mt-2  text-white">View More</Link>
                          </div>
                        </div>
                  </div>
                  <div className="col-md-6 d-flex align-items-stretch">
                      <div className="card p-3">
                        <h3 className="fw-bold">What is Lorem Ipsum?</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        <div>
                          <Link to="" className="btn btn-primary mt-2  text-white">View More</Link>
                        </div>
                      </div>
                  </div>
                  <div className="col-md-6 d-flex align-items-stretch">
                      <div className="about-page--about-img">
                        <img className="rounded" src="assets/images/service-3.png" alt="about" />
                      </div>
                      
                  </div>
                  <div className="col-md-6 d-flex align-items-stretch">
                    <div className="about-page--about-img">
                      <img className="rounded" src="assets/images/service-2.png" alt="about" />
                    </div>
                    
                  </div>
                  <div className="col-md-6 d-flex align-items-stretch">
                        <div className="card p-3">
                            <h3 className="fw-bold">What is Lorem Ipsum?</h3>
                          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                          <div>
                            <Link to="" className="btn btn-primary mt-2  text-white">View More</Link>
                          </div>
                        </div>
                  </div>
              </div> 
          </div>
      </section>
      <Footer />
    </>
    )
}

export default AboutUs;