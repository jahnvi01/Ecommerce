import React, { Component } from 'react';
import ordersIcon1 from '../images/orders-icon1.png';
import ordersIcon2 from '../images/orders-icon2.png';
import ordersIcon3 from '../images/orders-icon3.png';
import ordersIcon4 from '../images/orders-icon4.png';
import ordersIcon5 from '../images/orders-icon5.png';
import KnowerWrapp from '../include/knower-wrapp';
import Footer from '../include/footer';
import Header from '../include/header';
import LinkerWrapp from '../include/linker-wrapp';
import JudgerWrapp from '../include/judger-wrapp';
import CallusWrapp from '../include/callus-wrapp';
import ImpoerWrapp from '../include/impoer-wrapp';
import $ from 'jquery';


class NewAddress extends Component {
  
  render() {
 
    return (
<div>

<Header />
	<LinkerWrapp />
    <section class="banner-wrapp inner-wrapp">
	<div class="margin">
    	<div class="inner-row1">
        	<ul class="inner-bar1">
            	<li><a href="/">Home</a></li>
                <li>/</li>
                <li>New Address</li>
            </ul>
        </div>
    </div>
</section>

<section class="inner-head">
	<div class="margin">
    	<h2>New Address</h2>
    </div>
</section>

<section class="conten-wrapp">
	<div class="margin">
    	
		<div class="conten-row1">
			<div class="conten-bar1 newadd-wrapp">

                <div class="newadd-row1">
                    <form action="" method="get">
                        <div class="newadd-row2">
                            <div class="newadd-bar1">
                                Full Name
                            </div>
                            <div class="newadd-bar2">
                                <input name="" type="text" placeholder="Full Name" class="newadd-fild1 newadd-fild2" />
                            </div>
                        </div>
                        <div class="newadd-row2">
                            <div class="newadd-bar1">
                                Address Line 1
                            </div>
                            <div class="newadd-bar2">
                                <input name="" type="text" placeholder="Address Line 1" class="newadd-fild1 newadd-fild2" />
                            </div>
                        </div>
                        <div class="newadd-row2">
                            <div class="newadd-bar1">
                                Address Line 2
							</div>
                            <div class="newadd-bar2">
                                <input name="Address Line 2" type="text" placeholder="Address Line 2" class="newadd-fild1 newadd-fild2" />
                            </div>
                        </div>
                        <div class="newadd-row2">
                            <div class="newadd-bar1">
                                City / Town
                            </div>
                            <div class="newadd-bar2">
                                <input name="City / Town" type="text" placeholder="City / Town" class="newadd-fild1 newadd-fild2" />
                            </div>
                        </div>
                        <div class="newadd-row2">
                            <div class="newadd-bar1">
                                State
                            </div>
                            <div class="newadd-bar2">
                                <input name="State" type="text" placeholder="State" class="newadd-fild1 newadd-fild2" />
                            </div>
                        </div>
                        <div class="newadd-row2">
                            <div class="newadd-bar1">
                                Zip / Postal Code
                            </div>
                            <div class="newadd-bar2">
                                <input name="Zip / Postal Code" type="text" placeholder="Zip / Postal Code" class="newadd-fild1 newadd-fild2" />
                            </div>
                        </div>
                                
                        <div class="newadd-row2">
                            <div class="newadd-bar2">
                                <input name="submit" value="Submit" class="newadd-btn1" type="submit" />
                            </div>
                        </div>
                    </form>
            	</div>
                
            </div>
            
            <div class="conten-bar2 sidbar-wrapp">
                
                <div class="sidbar-row3">
                    <h2>Payment Details</h2>
                    <div class="sidbar-bar3">
                    	<div class="payment-lt">MRP Total</div>
                        <div class="payment-rt">Rs.265.00</div>
                    </div>
                    <div class="sidbar-bar3">
                    	<div class="payment-lt">Delivery Charges</div>
                        <div class="payment-rt">Rs.25.00</div>
                    </div>
                    <div class="sidbar-bar3">
                    	<div class="payment-lt">DawaBag Discount</div>
                        <div class="payment-rt">- Rs.53.00</div>
                    </div>
                    <div class="sidbar-bar3">
                    	<div class="payment-lt"><span>Total Amount *</span></div>
                        <div class="payment-rt"><span>Rs.237.00</span></div>
                    </div>
                    
                    <div class="savings">TOTAL SAVINGS RS.63.00</div>
                    
                    <div class="payment-row1">
                        <div class="payment-bar1">
                            <h6>TOTAL AMOUNT</h6><br />
                            <h5><span>Rs.</span>207.00</h5>
                        </div>
                        <a href="#" class="sidbar-btn2">PROCEED TO PAYMENT</a>
                    </div>
                    
                </div>
                
			</div> 
                           
		</div>
        
	</div>
</section>

<ImpoerWrapp />
<JudgerWrapp />
<CallusWrapp />
<KnowerWrapp />
<Footer />
</div>
    );
  }
}

export default NewAddress ;
