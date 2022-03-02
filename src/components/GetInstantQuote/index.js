import React from "react";
import NavBar from "../NavBar";
import Footer from "../Footer";




function GetInstantQuote() {
	return (
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
			{/* <section className="py-5">
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
							<div className="border-top mt-5 text-center pt-3">
								<h3>$3127</h3>
								<p>Copart and IAA transports will be charged an additional $200. Learn more.</p>
							</div>
							<div>
								<h3>OTHER IMPORTANT INFORMATION ABOUT THIS QUOTE</h3>
								<p>The shipping company we partner with to ship vehicles to and from Alaska has ports in Tacoma, WA and Anchorage, AK. If your transport is from Seattle to Anchorage, or Anchorage to Seattle, this quote is actually from Tacoma (or to Tacoma). If your vehicle must ship from Seattle (or to Seattle), please contact us and we'll give you other shipping options.</p>
								<p>If your transport is from any other city in the lower 48 going to Alaska, we truck your vehicle to the Tacoma port and then from there it goes on a ship to the Anchorage port. Likewise, if your transport is going from Alaska to any city in the lower 48 other than Tacoma, your vehicle will go on a ship from Anchorage to the Tacoma port and then we truck it from the Tacoma port to your city.</p>
								<h4>The ships leave the Tacoma and Anchorage ports twice a week and the transport takes 6-7 days. You can drop your vehicle off at the ports Monday - Friday.</h4>
								<p>You can ship your vehicle with personal belongings but they are not covered by insurance. You ship them at your own risk. The shipping company we partner with for Alaska transports also charges extra for personal belongings. We pass those charges along to you. They charge $85 per 100 pounds of personal belongings going to Alaska and $75 per 100 pounds of personal belongings going to Tacoma. They also require you to have your vehicle officially weighed at a weigh station if you're shipping personal belongings with your vehicle. We will provide more details about that if your'e going to be shipping personal belongings.</p>
								<p>Your vehicle must arrive at the port with no more than a 1/4 tank of gas or it will not be accepted!</p>
								<div className="d-flex justify-content-center">
									<a className="btn btn-primary d-inline-block text-uppercase" href="#">Book order </a>
								</div>

							</div>
							<div className="row justify-content-center">
								<div className="col-md-6">
									<form className="row g-3">
										<div className="col-md-12">
											<label for="fname" className="form-label">First name</label>
											<input type="text" className="form-control" id="fname" />
										</div>
										<div className="col-md-12">
											<label for="lname" className="form-label">Last name</label>
											<input type="text" className="form-control" id="lname" />
										</div>
										<div className="col-md-12">
											<label for="email" className="form-label">Your email</label>
											<input type="email" className="form-control" id="email" />
										</div>

										<div className="col-md-12">
											<label for="pnumber" className="form-label">Primary phone</label>
											<select id="inputState" className="form-select">
												<option selected>Cell</option>
												<option>Home</option>
												<option>Work</option>
											</select>
										</div>
										<div className="col-md-12">
											<input type="text" className="form-control" id="inputAddress" placeholder="" />
										</div>
										<div className="col-12">
											<div className="form-check">
												<input className="form-check-input" type="checkbox" id="gridCheck" />
												<label className="form-check-label" for="gridCheck">
													Yes, send me updates by SMS text to this number
												</label>
											</div>
										</div>
										<div className="d-flex justify-content-center">
											<button type="submit" className="btn btn-primary text-uppercase">Continue</button>
										</div>
										<p className="text-center">By continuing you agree with SHYPN  terms and conditions</p>
									</form>
								</div>

							</div>
							<div>
								<h3>What happens when you book an order?</h3>
								<p>If you book an order, you'll pay a 10% deposit using a credit or debit card. The remaining amount due will be automatically charged to your card when we pick up your vehicle. That way you won't have to mess around carrying cash and paying a driver when your vehicle is delivered!</p>
								<p>A dispatcher will phone you the same or next business day. We'll talk about your order and share our customized transport delivery plan for your 2011 honda</p>
								<p>If you are not satisfied, want to cancel the order, then okay. We'll cancel it and refund your deposit.</p>
								<p>If you're good with the plan, then great! We'll collect more info (like the Vehicle ID Number), and go over preparations and timing.</p>

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
			</section> */}

			<section className="py-5">
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-md-7">
							<div className="mb-3">
								<h5 className="text-white py-2 px-3 bg-primary mb-3">Shipper</h5>
								<div className="row g-3">
									<div className="col-md-4">
										<input type="text" className="form-control" placeholder="First Name" id="fname2" />
									</div>
									<div className="col-md-4">
										<input type="text" className="form-control" placeholder="Last Name" id="lname2" />
									</div>
									<div className="col-md-4">
										<input type="text" className="form-control" placeholder="Company Name" id="cname" />
									</div>
									<div className="col-md-4">
										<input type="email" className="form-control" placeholder="Email" id="email" />
									</div>
									<div className="col-md-4">
										<input type="email" className="form-control" placeholder="Phone Number" id="phone" />
									</div>
									<div className="col-md-4">
										<input type="email" className="form-control" placeholder="Adress" id="adress" />
									</div>
								</div>
							</div>

							<div className="mb-3">
								<h5 className="text-white py-2 px-3 bg-primary mb-3">Transport Type</h5>
								<div className="row g-3">
									<div className="col-md-12">
										<div className="row">
											<div className="col-md-12">
												<label for="carrier" className="form-label fw-bold"> Carrier</label>
											</div>
											<div className="col-md-12">
												<div class="form-check mb-2">
													<input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
													<label class="form-check-label" for="flexRadioDefault1">
														Open
													</label>
												</div>
												<div class="form-check">
													<input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
													<label class="form-check-label" for="flexRadioDefault2">
														Close
													</label>
												</div>
											</div>
										</div>
									
										
										
									</div>
									

							</div>
							</div>
							<div className="mb-3">
								<h5 className="text-white py-2 px-3 bg-primary mb-3">Available Date</h5>
								<div className="row g-3">
									<div className="col-md-4">
										<input type="text" className="form-control" placeholder="Next availability Date" id="fname2" />
									</div>
									
								</div>
								
							</div>
							<div className="mb-3">
								<h5 className="text-white py-2 px-3 bg-primary mb-3">Ship To</h5>
								<div className="row g-3">
									<div className="col-md-4">
										<input type="text" className="form-control" placeholder="City" id="city" />
									</div>
									<div className="col-md-4">
										<input type="text" className="form-control" placeholder="State" id="state" />
									</div>
									<div className="col-md-4">
										
										<input type="text" className="form-control" placeholder="Zipcode" id="zipcode" />
									</div>


								</div>
								
							</div>
							<div className="mb-3">
								<h5 className="text-white py-2 px-3 bg-primary mb-3">Destination</h5>
								<div className="row g-3">
									<div className="col-md-4">
										<input type="text" className="form-control" placeholder="City" id="city" />
									</div>
									<div className="col-md-4">
										<input type="text" className="form-control" placeholder="State" id="state" />
									</div>
									<div className="col-md-4">
										
										<input type="text" className="form-control" placeholder="Zipcode" id="zipcode" />
									</div>


								</div>
								
							</div>
							<div className="mb-3">
								<h5 className="text-white py-2 px-3 bg-primary mb-3">Vehicles</h5>
								<div className="row g-3">
									<div className="col-md-4">
										<select id="year" className="form-select">
											<option>Year</option>
											<option>2021</option>
											<option>2020</option>
											<option>2019</option>
											<option>2018</option>
										</select>
									</div>
									<div className="col-md-4">
										<select id="year" className="form-select">
												<option>Make</option>
												<option>Ford Motor</option>
												<option>Honda</option>
												<option>Volkswagen</option>
												<option>Toyota</option>
										</select>
									</div>
									<div className="col-md-4">
										<input type="text" className="form-control" placeholder="Model" id="state" />
									</div>
									<div className="col-md-4">
										<select id="inputType" className="form-select">
											<option>Vehicle Type</option>
											<option>Sedan</option>
											<option>wagon</option>
											<option>Large SUV</option>
											<option>XL Truck (450, 4500)</option>
										</select>
									</div>
									<div className="col-md-4">
										<select id="inputType" className="form-select">
											<option>Vehicle Size</option>
											<option>VXL</option>
											<option>VXR</option>
											<option>Xl</option>
										</select>
									</div>
									<div className="col-md-12 mt-4 border-top pt-4">
									<div class="d-flex justify-content-center">
										<button type="submit" class="btn btn-primary text-uppercase px-5">Send</button>
									</div>
									</div>
								


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

export default GetInstantQuote;