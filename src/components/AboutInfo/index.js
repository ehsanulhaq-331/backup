import React from "react";
import {Link} from "react-router-dom";

function AboutInfo(){
    return(
        <>
        <section className="py-5 about-info mt-0 mt-md-3 mt-lg-0">
            <div className="container">
            
              <div className="row">
                  <div className="col-md-12 col-xl-5">
                      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
                      <Link class="web-btn bg-primary mt-3 d-inline-block text-white" to="/">Read More</Link>
                  </div>
                  <div className="about-info-car">
                  <img className="about-info-car--img" src="assets/images/service-2.png" alt="Car" />
                  </div>
              </div>
             
              
              
            
          </div>
        </section>
        
        </>
    )
}

export default AboutInfo;