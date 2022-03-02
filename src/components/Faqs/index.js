import React from "react";
import NavBar from "../NavBar";
import Footer from "../Footer";
import { Accordion } from "react-bootstrap";






function Faq(){
 
    return(
        <>
        <NavBar />
        <section className="inner-page-hero bg-faq py-5 bg-primary">
             <div className="container">
                 <div className="row d-flex align-items-center">
                     <div className="col-md-5">
                        <h1>About Us </h1>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                        
                     </div>
                     
                 </div>
                 
             </div>
      </section>
      <div className="pt-5">
      <div className="container">
          <h1 class="text-center fw-bold"> Frequently<span class="text-primary"> Asked </span>Questions</h1>   
          </div>
          <section className="pb-5">
            <div className="container">
            
            <div className="row justify-content-center pt-4 faqs-section">
              <div className="col-md-11 col-lg-9">
                <Accordion>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>Pricing</Accordion.Header>
                    <Accordion.Body>
                      <Accordion >
                        <Accordion.Item eventKey="0">
                          <Accordion.Header>How can I get a quote for shipping my vehicle?</Accordion.Header>
                          <Accordion.Body>
                              Getting a quote is quick and easy using our instant quote generator. You can also
                              give us a call or text at 123456 to obtain a quote from one of our representatives.
                              In order for us to calculate a quote, you must provide the location the car will be
                              shipped to and from, the date your vehicle will be ready to be transported, and the
                              vehicle model
                          </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                          <Accordion.Header>How do I pay for my auto transport?</Accordion.Header>
                          <Accordion.Body>
                            Via credit card. We take Visa, Mastercard, Discover and AMEX.
                          </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                          <Accordion.Header>How is my shipping cost calculated?</Accordion.Header>
                          <Accordion.Body>
                            There are a few elements that we must take into consideration when calculating
                            your shipping costs. The biggest factor is the mileage between the origin and
                            destination. Secondly, the type and condition of your vehicle may affect the price.
                            The last factor is the date your vehicle will be transported. In addition, there are
                            extra options such as enclosed transport that can be added to your shipment if you
                            wish for a superior experience.
                          </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3">
                          <Accordion.Header>How long is my instant quote good for?</Accordion.Header>
                          <Accordion.Body>
                            (14) days.
                          </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="4">
                          <Accordion.Header>What is the first step in having SHYPN ship my car?</Accordion.Header>
                          <Accordion.Body>
                            The first step in shipping a car with us is getting an instant quote. You can do this
                            by clicking the “Get Instant Quote” button on our website or reaching out to us
                            directly.
                          </Accordion.Body>
                        </Accordion.Item>
                      </Accordion>
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="1">
                    <Accordion.Header>Booking</Accordion.Header>
                    <Accordion.Body>
                      <Accordion >
                        <Accordion.Item eventKey="0">
                          <Accordion.Header>How far in advance should I schedule my transport?</Accordion.Header>
                          <Accordion.Body>
                            The sooner you schedule your transport, the better we can accommodate your needs.
                          </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                          <Accordion.Header>Can I place the order if I do not have an exact address?</Accordion.Header>
                          <Accordion.Body>
                            Yes, you can place the order with only the city and zip code until your exact pickup and delivery location is known.
                          </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                          <Accordion.Header>Can I track my shipment online?</Accordion.Header>
                          <Accordion.Body>
                              Yes, online tracking of your vehicle is accessible to you 24/7 if that option was
                              selected in the order process. Once you have scheduled your transport, you will
                              receive a tracking number that will allow you to track the GPS location of your
                              vehicle in real time.
                          </Accordion.Body>
                        </Accordion.Item>
                      </Accordion>
                    </Accordion.Body>
                  </Accordion.Item>


                  <Accordion.Item eventKey="2">
                    <Accordion.Header>Pickup and Delivery</Accordion.Header>
                    <Accordion.Body>
                      
                      <Accordion >
                          <Accordion.Item eventKey="0">
                            <Accordion.Header>Does someone have to be present for pickup and delivery?</Accordion.Header>
                            <Accordion.Body>
                            Yes, there must be someone present for pickup and delivery. If you physically cannot be there, you can have a trusted adult be present to provide keys, and sign initial paperwork.
                            </Accordion.Body>
                          </Accordion.Item>
                          <Accordion.Item eventKey="1">
                            <Accordion.Header>Where will my car be picked up and delivered?</Accordion.Header>
                            <Accordion.Body>
                              The carrier will get the transport truck as close as legally possible to your pick up location. In common cases, the carrier will come to your door; however, some cities may prohibit the entrance of large trucks in the community. Auto transport trucks are large and need plenty of space to safely maneuver, so if the pickup or delivery location has narrow streets or tight turns, the carrier may request to meet at a nearby location.
                            </Accordion.Body>
                          </Accordion.Item>
                          <Accordion.Item eventKey="2">
                            <Accordion.Header>What is the bill of lading and what does it have to do with my shipment?</Accordion.Header>
                            <Accordion.Body>
                              The bill of lading is an important document used by car transport companies to document any pre-existing damage on the vehicle during the time of pickup. It also provides a record of your contact information and the official agreement for transportation. If you choose to file an insurance claim regarding your car transport, you will need the bill of lading.
                            </Accordion.Body>
                          </Accordion.Item>
                          <Accordion.Item eventKey="3">
                            <Accordion.Header>Can I put personal items in my vehicle?</Accordion.Header>
                            <Accordion.Body>
                              Yes, you may ship personal items in your vehicle. The total weight of your belongings cannot exceed a hundred pounds and must be left in the trunk, back seats, or under the window line. Please remember that personal items are not covered by insurance if they are reported as damaged or missing.
                            </Accordion.Body>
                          </Accordion.Item>
                          <Accordion.Item eventKey="4">
                            <Accordion.Header>How much gas should I have in my car during transport?</Accordion.Header>
                            <Accordion.Body>
                              You should have a quarter of a tank of gas in your car at the time for pick up. This amount is suitable for the car to be loaded and unloaded but does not add too much weight.
                            </Accordion.Body>
                          </Accordion.Item>
                          <Accordion.Item eventKey="5">
                            <Accordion.Header>How do I get my car ready for transport?</Accordion.Header>
                            <Accordion.Body>
                              Please ensure your car is clean inside and out. This is important because this will help the driver execute their inspection to evaluate any pre-existing conditions the vehicle may have. Declare any special circumstances to the driver prior to the shipment. You should also check to see if any personal items are left behind unless you wish to ship them with the vehicle. Remember the belongings must be less than a hundred pounds combined and below the window line. Lastly, confirm there is a quarter tank of gas in the vehicle in preparation for shipment.
                            </Accordion.Body>
                          </Accordion.Item>
                      </Accordion>

                    </Accordion.Body>
                  </Accordion.Item>


                  <Accordion.Item eventKey="3">
                    <Accordion.Header>Service</Accordion.Header>
                    <Accordion.Body>
                      
                    <Accordion >
                          <Accordion.Item eventKey="0">
                            <Accordion.Header>Can I ship my vehicle if it is not operable?</Accordion.Header>
                            <Accordion.Body>
                            Yes, your vehicle can be shipped if it is not operable. A custom auto carrier is required when inoperable vehicles are being transported, a winch will be connected to the car to safely pull the vehicle onto the carrier. There is an extra fee for inoperable vehicles due to the additional equipment and labor required when securing the vehicle to the truck. You may select the inoperable option when booking your transport to inform the shipping agent about your needs.
                            </Accordion.Body>
                          </Accordion.Item>
                          <Accordion.Item eventKey="1">
                            <Accordion.Header>Can I ship an oversized vehicle?</Accordion.Header>
                            <Accordion.Body>
                              Please call us at 46723556 to speak with a representative about a specialized quote based on the dimensions of the vehicle being shipped.
                            </Accordion.Body>
                          </Accordion.Item>
                          <Accordion.Item eventKey="2">
                            <Accordion.Header>Can I ship a vehicle with low ground clearance?</Accordion.Header>
                            <Accordion.Body>
                            Yes, we can ship a vehicle with a low ground clearance. Vehicles with ground clearance lower than four inches are required to ship in an enclosed transport with a lift gate. Low clearance vehicles are unable to be loaded onto an open trailer due to risk of the car bottoming out during the loading process.
                            </Accordion.Body>
                          </Accordion.Item>
                          <Accordion.Item eventKey="3">
                            <Accordion.Header>Do I need a license plate on my vehicle to ship it?</Accordion.Header>
                            <Accordion.Body>
                              No, a license plate is not required to ship the vehicle. All that's needed is the vehicle and keys.
                            </Accordion.Body>
                          </Accordion.Item>
                          <Accordion.Item eventKey="4">
                            <Accordion.Header>What is the difference between open and enclosed transport?</Accordion.Header>
                            <Accordion.Body>
                              Open transport is the most popular shipping method. A larger number of shipments are done using 8-10 car carriers. There are also smaller carriers which hold 2-3 cars used for shorter distances. Enclosed transport is recommended when shipping exotic, luxury, high value cars. Or vehicles that need to be protected from the elements. Enclosed transports guarantee the utmost protection from exposure and any open-air factors.
                            </Accordion.Body>
                          </Accordion.Item>
                          <Accordion.Item eventKey="5">
                            <Accordion.Header>Is my vehicle insured during transport?</Accordion.Header>
                            <Accordion.Body>
                              All shipments will include basic liability coverage. We ensure that our carriers are up to date with their insurance. If an incident occurs where one of our carriers is not fully up to date with their insurance, they’re blacklisted and permanently removed from SHYPN’s approved carrier list..
                            </Accordion.Body>
                          </Accordion.Item>
                          <Accordion.Item eventKey="6">
                            <Accordion.Header>Does SHYPN offer open or enclosed transport?</Accordion.Header>
                            <Accordion.Body>
                              AWe offer both open and enclosed transport.
                            </Accordion.Body>
                          </Accordion.Item>
                          <Accordion.Item eventKey="7">
                            <Accordion.Header>Do you ship to Alaska, Hawaii, or Puerto Rico?</Accordion.Header>
                            <Accordion.Body>
                              Currently, we ship to the lower 48 states. Stay tuned for our expansion plans!
                            </Accordion.Body>
                          </Accordion.Item>
                          <Accordion.Item eventKey="8">
                            <Accordion.Header>What is your refund policy?</Accordion.Header>
                            <Accordion.Body>
                              There are some uncontrollable factors such as weather, accidents, and traffic that may impact your shipping time frames. In the rare event controllable factors cause delay, the situation will be addressed and remedied by our team immediately.
                            </Accordion.Body>
                          </Accordion.Item>
                          <Accordion.Item eventKey="9">
                            <Accordion.Header>Do you offer any discounts?</Accordion.Header>
                            <Accordion.Body>
                              Yes, there are ways to receive a discount. Stay tuned for more information on this!
                            </Accordion.Body>
                          </Accordion.Item>
                          <Accordion.Item eventKey="10">
                            <Accordion.Header>What if my vehicle has damage upon delivery?</Accordion.Header>
                            <Accordion.Body>
                              YIf you notice damage has appeared on your vehicle upon delivery, you must report the damage to the SHYPN before the transporter leaves the site. If you report any damage after the transporter has left/after the car has been accepted/after the BOL has been signed we’re unable to hold the carrier liable. Proof of damage will have to be provided for SHYPN to report the claim. In the rare event damage occurs, the situation will be addressed and remedied. (Please note, it is the transporters sole responsibility to address damage claims, SHYPN is not liable to pay any damage expenses).
                            </Accordion.Body>
                          </Accordion.Item>
                          
                      </Accordion>

                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
            </div>
            
          
            

          </div>
        </section>
      </div>
         
        <Footer />
        </>
    )
}

export default Faq;