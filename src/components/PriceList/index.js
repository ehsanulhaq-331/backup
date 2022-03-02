import React from "react";
import NavBar from "../NavBar";
import Footer from "../Footer";




function PriceList(){
    return(
        <>
        <NavBar />
        <section className="inner-page-hero bg-faq py-5 bg-primary">
          <div className="container">
              <div className="row d-flex align-items-center">
                  <div className="col-md-7">
                    <h1>Shipping Methods </h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                    
                  </div>
                  
              </div>
              
          </div>
        </section>
        <section className="py-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <div className="row">
                            <div className="col-md-6 d-flex align-items-stretch">
                                <div className="payment-card py-4 px-2 text-center arrow-1 w-100">
                                    <div className="payment-card--icon">
                                        <i className="fas fa-tablet-alt"></i>
                                    </div>
                                    <div className="payment-card--content">
                                        <h3>Want enclosed carrier $1826?</h3>
                                        <p>We start the pickup arrangements</p>
                                        <h5>$107</h5>
                                    </div>
                                    
                                </div>
                            </div>
                            <div className="col-md-6 d-flex align-items-stretch">
                                <div className="payment-card py-4 px-2 text-center w-100">
                                    <div className="payment-card--icon">
                                        <i className="fas fa-truck-moving"></i>
                                    </div>
                                    <div className="payment-card--content">
                                        <h3>Upon Pickup</h3>
                                        <p>When we pickup your vehicle and begin transit</p>
                                        <h5>$967</h5>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                    <table className="table table-striped mt-4 mt-md-0">
                    
                    <tbody>
                        <tr>
                        <th scope="row">Booking deposit</th>
                        <td>$107 today</td>
                        
                        </tr>
                        <tr>
                        <th scope="row">Due upon pickup</th>
                        <td>$967</td>
                        
                        </tr>
                        <tr>
                        <th scope="row">Total price</th>
                        <td>$1074</td>
                        
                        </tr>
                        <tr>
                        <th scope="row">Distance</th>
                        <td>1179 mi</td>
                        
                        </tr>
                        <tr>
                        <th scope="row">Your vehicle</th>
                        <td>2015 audi q5</td>
                        
                        </tr>
                        <tr>
                        <th scope="row">Type</th>
                        <td>Car</td>
                        
                        </tr>
                        <tr>
                        <th scope="row">Condition</th>
                        <td>Running</td>
                        
                        </tr>
                        <tr>
                        <th scope="row">Transport from</th>
                        <td>Fort Lauderdale, FL</td>
                        
                        </tr>
                        <tr>
                        <th scope="row">Transport to</th>
                        <td>Houston, TX</td>
                        
                        </tr>
                        <tr>
                        <th scope="row">Service type</th>
                        <td>Door to door</td>
                        
                        </tr>
                        <tr>
                        <th scope="row">Type of transport</th>
                        <td>Want enclosed carrier $1826?</td>
                        
                        </tr>
                        
                        
                    </tbody>
                    </table>
                    </div>
                </div>
            </div>
        </section>


        
         
        <Footer />
        </>
    )
}

export default PriceList;