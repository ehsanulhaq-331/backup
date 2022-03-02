import React from "react";
import {Link} from "react-router-dom";


function Modal(){
    return(
      <>
        <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title fw-bold" id="staticBackdropLabel">Instant Quote for Vehicle Shipment</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
              <form className="row g-3">
                <div className="col-md-12">
                  <label for="pickupFrom" className="form-label">Pickup from</label>
                  <input type="text" className="form-control" id="pickupFrom" placeholder="Enter city, state or zip code" />
                </div>
                <div className="col-md-12">
                  <label for="deliverTo" className="form-label">Deliver to</label>
                  <input type="text" className="form-control" id="deliverTo" placeholder="Enter city, state or zip code" />
                </div>
                <div className="col-md-12">
                  <h5 className="fw-bold">Tell us about your vehicle</h5>
                </div>
                <div className="col-md-12">
                  <select id="inputType" className="form-select">
                    <option selected>Select type</option>
                    <option>Car</option>
                    <option>Small or Midsize SUV / Crossover / Minivan</option>
                    <option>Truck / Large SUV</option>
                    <option>Cargo Van / XL Truck (450, 4500)</option>
                  </select>
                </div>
                <div className="col-md-12">
                <select id="inputYear" className="form-select">
                    <option selected>Select Year</option>
                    <option>2021</option>
                    <option>2020</option>
                    <option>2019</option>
                    <option>2018</option>
                  </select>
                </div>
                <div className="col-md-12">
                  <input type="text" className="form-control" id="deliverTo" placeholder="Enter make & model" />
                </div>
                <div className="col-md-12">
                  <h5 className="fw-bold">Is the vehicle operational? Does it run?</h5>
                </div>
                <div className="form-check mx-3">
                  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" checked />
                  <label className="form-check-label" for="flexRadioDefault1">
                    Yes
                  </label>
                </div>
                <div className="form-check mx-3">
                  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                  <label className="form-check-label" for="flexRadioDefault2">
                    No
                  </label>
                </div>
                <div className="col-md-12">
                  <h5 className="fw-bold">Earliest date available for pickup</h5>
                </div>
                
              </form>
              </div>
              <div className="modal-footer">
                <Link to="/" className="btn btn-primary">Get Instant Quote</Link>
              </div>
            </div>
          </div>
        </div>
      </>
    )
}

export default Modal;