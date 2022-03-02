import React from "react";
import NavBar from "../NavBar";
import Footer from "../Footer";
function HowItWork(){
    return(
    <>
      <NavBar />
      <section className="inner-page-hero bg-how-it-work py-5 bg-primary">
          <div className="container">
              <div className="row d-flex align-items-center">
                  <div className="col-md-5">
                    <h1>How It Work </h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                    
                  </div>
                  
              </div>
              
          </div>
      </section>
      <section className="py-5 howItWork-section">
          <div className="container">
              <ul className="list-unstyled howItWork-list">
                  <li>
                      <div className="row align-items-center">
                        <div className="col-md-5">
                          <div className="howItWork-section--content">
                              <h3 className="point-1">Get Instant Quote</h3>
                              <p>Start by getting an instant quote from our quote calculator, (Underlined meaning a link to
                                  the quote calculator). or speaking with a car shipping representative at 1432423.</p>
                                  <p>With getting a quote, must provide an appropriate time for pick up.</p>
                          </div>
                        </div>
                        <div className="col-md-7 text-center">
                          <img className="howItWork-img" src="assets/images/how-it-work-1.png" alt="Get Instant Quote Truck" />
                        </div>
                      </div>
                  </li>
                  <li>
                      <div className="row align-items-center">
                        <div className="col-md-7">
                          <img className="howItWork-img" src="assets/images/how-it-work-2.png" alt="Pick Up Truck" />
                        </div>
                        <div className="col-md-5">
                          <div className="howItWork-section--content">
                              <h3 className="point-2">Pick Up</h3>
                                  <p>Your shipment will be assigned to a driver.</p>
                                  <p>On the day of pickup, your vehicle will be loaded and on its way to its destination. Online Tracking</p>
                                  <p>Track the status of your shipment using the 24/7 real time tracker.</p>
                          </div>
                        </div>
                      </div>
                  </li>
                  <li>
                      <div className="row align-items-center">
                        <div className="col-md-5">
                          <div className="howItWork-section--content">
                              <h3 className="point-3">Delivery</h3>
                              <p>Your vehicle will be unloaded at its destination. A final inspection will be conducted, the driver will turn over the keys.</p>
                              <p>That's It!</p>
                              <p>Join the other ShypN members who have safely transported their vehicle</p>
                          </div>
                        </div>
                        <div className="col-md-7 text-end">
                          <img className="howItWork-img " src="assets/images/how-it-work-3.png" alt="Truck Delivery" />
                        </div>
                      </div>
                  </li>
              </ul>
             
          </div>
      </section>
      <Footer />
    </>
    )
}

export default HowItWork;