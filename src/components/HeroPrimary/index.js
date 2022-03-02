import React from "react";
import {Link} from "react-router-dom";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

function HeroPrimary(){
    return(
        <>
        <section className="hero-section bg-primary py-3 py-md-5">
            <div className="container">
            <OwlCarousel className='owl-theme' loop margin={10} nav dots={false} items={1}>
              <div>
                <div className="row align-items-center">
                  <div className="col-md-4">
                    <div className="hero-content">
                      <h1>What is Lorem Ipsum?</h1>
                      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                    </div>
                  </div>
                  <div className="col-md-8">
                  <div className="text-center car-group">
                    <img className="car-group--img" src="assets/images/slider-2.png" />
                  </div>
                  </div>
                </div>
                
              </div>

              <div>
                
              <div className="row align-items-center">
                  <div className="col-md-4">
                    <div className="hero-content">
                      <h1>What is Lorem Ipsum?</h1>
                      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                    </div>
                  </div>
                  <div className="col-md-8">
                  <div className="text-center car-group">
                    <img className="car-group--img" src="assets/images/slider-02.png" />
                  </div>
                  </div>
                </div>
              </div>
              <div>
                
              <div className="row align-items-center">
                  <div className="col-md-4">
                    <div className="hero-content">
                      <h1>What is Lorem Ipsum?</h1>
                      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                    </div>
                  </div>
                  <div className="col-md-8">
                  <div className="text-center car-group">
                    <img className="car-group--img" src="assets/images/slider-3.png" />
                  </div>
                  </div>
                </div>
              </div>
              <div>
                
              <div className="row align-items-center">
                  <div className="col-md-4">
                    <div className="hero-content">
                      <h1>What is Lorem Ipsum?</h1>
                      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                    </div>
                  </div>
                  <div className="col-md-8">
                  <div className="text-center car-group">
                    <img className="car-group--img" src="assets/images/slider-6.png" />
                  </div>
                  </div>
                </div>
              </div>

            

             
            </OwlCarousel>
                
            </div>
            
    
        </section>
        </>
    )
}

export default HeroPrimary;