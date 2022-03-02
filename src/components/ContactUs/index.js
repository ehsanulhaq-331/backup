import React from "react";
import NavBar from "../NavBar";
import Footer from "../Footer";
function ContactUs(){
    return(
    <>
      <NavBar />
      <section className="inner-page-hero bg-contact-us py-5 bg-primary">
          <div className="container">
              <div className="row d-flex align-items-center">
                  <div className="col-md-5">
                    <h1>Contact Us </h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                    
                  </div>
                  
              </div>
              
          </div>
      </section>
        <section className="login-page py-5 mt-2">
            <div className="container overflow-hidden"> 
                <div className="row ">
                    <div className="col-md-6 d-flex align-items-stretch">
                        <div className="p-4 border-0 shadow bg-primary rounded">
                            <form>
                                <div className="row">
                                    <div className="form-group col-md-6 mb-2">
                                        <label className="text-white pb-2" for="inputEmail4">First Name</label>
                                        <input type="text" className="form-control" id="" placeholder="First Name" />
                                    </div>
                                    <div className="form-group col-md-6 mb-2">
                                        <label className="text-white pb-2" for="inputEmail4">Last Name</label>
                                        <input type="text" className="form-control" id="" placeholder="Last Name" />
                                    </div>
                                <div className="form-group col-md-6 mb-2">
                                    <label className="text-white pb-2" for="inputEmail4">Email</label>
                                    <input type="email" className="form-control" id="inputEmail4" placeholder="Email" />
                                </div>
                                <div className="form-group col-md-6 mb-2">
                                    <label className="text-white pb-2" for="inputPassword4">Password</label>
                                    <input type="password" className="form-control" id="inputPassword4" placeholder="Password" />
                                </div>
                                </div>
                                <div className="form-group col-md-12 mb-2">
                                <label className="text-white pb-2" for="inputAddress">Address</label>
                                <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
                                </div>
                                <div className="form-group col-md-12 mb-2">
                                <label className="text-white pb-2"  for="inputAddress2">Address 2</label>
                                <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
                                </div>
                                <div className="row">
                                <div className="form-group col-md-6 mb-2">
                                    <label className="text-white pb-2" for="inputCity">City</label>
                                    <input type="text" className="form-control" id="inputCity" />
                                </div>
                                <div className="form-group col-md-6 mb-2">
                                    <label className="text-white pb-2" for="inputState">State</label>
                                    <select id="inputState" className="form-control">
                                    <option selected>Choose...</option>
                                    <option>...</option>
                                    </select>
                                </div>
                                <div className="form-group col-md-12 mb-2">
                                    <label className="text-white pb-2" for="inputZip">Zip</label>
                                    <input type="text" className="form-control" id="inputZip" />
                                </div>
                                <div className="col-md-12">
                                    <button type="submit" className="btn btn-dark text-white w-100 mt-3">Contact Us</button>

                                </div>
                                
                                
                                </div>
                            
                                
                            </form>
                        </div>
                        
                    </div>
                    <div className="col-md-6 d-flex align-items-stretch mt-3 mt-md-0">
                        <div className="bg-primary p-2 rounded w-100">
                            <h1>Google Map</h1>
                        </div>
                    </div>
                </div>
            </div>
        </section>
      <Footer />
    </>
    )
}

export default ContactUs;