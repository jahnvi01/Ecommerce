import React, { Component } from 'react';
import productThumb1 from '../images/product-thumb1.png';
import orderdot1 from '../images/order-dot1.png';
import KnowerWrapp from '../include/knower-wrapp';
import sample from '../images/sample.jpg'
import Footer from '../include/footer';
import Header from '../include/header';
import OwlCarousel from 'react-owl-carousel';
import LinkerWrapp from '../include/linker-wrapp';
import JudgerWrapp from '../include/judger-wrapp';
import CallusWrapp from '../include/callus-wrapp';
import ImpoerWrapp from '../include/impoer-wrapp';
import $ from 'jquery';
import ShowAlert from '../function/alert';

class Cart extends Component {
  
  render() {
 const options={
    items: 1,
    margin: 0,
    loop: true,
    autoplay: true,
    autoplayTimeout: 7000,
    smartSpeed: 1500,
    nav: true,
    dots:false,
    responsive: {
        0: {
            items: 1
        },
        480: {
            items: 1
        },
        601: {
            items: 1
        },
        768: {
            items: 1
        },
        992: {
            items: 1
        },
        1200: {
            items: 1
        }
    }
}
    return (
<div>

<Header />
	<LinkerWrapp />
    
<section className="banner-wrapp inner-wrapp">
	<div className="margin">
    	<div className="inner-row1">
        	<ul className="inner-bar1">
            	<li><a href="#">Home</a></li>
                <li>/</li>
                <li>Your Cart</li>
            </ul>
        </div>
    </div>
</section>

<section className="inner-head">
	<div className="margin">
    	<h2>Your Cart</h2>
    </div>
</section>

<section className="conten-wrapp">
	<div className="margin">
    	
		<div className="conten-row1">
			<div className="conten-bar1 product-wrapp">
            
				<div className="product-row1">
				    <a href="/products-inner">
                	<div className="product-row2">
                    	<div className="product-bar1">
                        	<div className="slide-post owl-carousel">
                            <OwlCarousel margin={3} items={1} {...options} > 
                                <div>
                        			<div className="product-thumb"><img src={productThumb1} alt="product thumb1"/></div>
                                </div>
                                <div>
                        			<div className="product-thumb"><img src={productThumb1} alt="product thumb1"/></div>
                                </div>
                                </OwlCarousel>
                            </div>
                        </div>
                        <div className="product-bar2">
                        	<h2>Kapiva Aloe Vera Juice 1 ltr</h2>
                            <h3>10 Sachets</h3>
                            <h3>Other Variants</h3>
                            <div className="product-varian">
                            	<a href="#" className="product-btn2">40 grams</a>
                                <a href="#" className="product-btn2">80 grams</a>
                                <a href="#" className="product-btn2">100 grams</a>
							</div>
                            <h4>Recommended retail price</h4>
                            <h5><span>&#8377;</span>17.96</h5>
                            <div className="product-bar3">
                            	<div className="product-bar44">QTY :    1</div>
                                <a href="#" className="product-btn1">Remove CART</a>
                                <div className="product-bar4">
                                	<h6>TOTAL AMOUNT</h6><br />
                            		<h5><span>&#8377;</span>17.96</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    </a>
                </div>
                
                <div className="summary-row2">
					<div className="summary-row3 border1">
						<div className="summary-bar22"><img src={orderdot1} alt="order icon1"/></div>
						<div className="summary-bar33"><h5><span>Prescriptions Uploded By You:</span></h5></div>
							<div className="sample-row1">
								<div className="sample"><img src={sample}/></div>
								<div className="sample"><img src={sample}/></div>
								<div className="sample"><img src={sample}/></div>
								<div className="sample"><span className="hiddenFileInput"><input type="file" name="theFile"/></span></div>
							</div>
						</div>
					</div>
                
            </div>
            
            <div className="conten-bar2 sidbar-wrapp">
				<div className="sidbar-row2">
                    <h2>Apply Promocode</h2>
                    <div className="sidbar-bar2">
                        <form action="xyz" method="get">
                            <div className="checkbox3">
                                <input type="checkbox" name="checkboxG1" id="checkboxG1" className="css-checkbox"/>
                                <label for="checkboxG1" className="css-label"><span>Get flat discount! Vouchers applicable in
payment options.</span></label>
                            </div>
                            <div className="checkbox3">
                                <input type="checkbox" name="checkboxG2" id="checkboxG2" className="css-checkbox"/>
                                <label for="checkboxG2" className="css-label"><span>Get flat discount! Vouchers applicable in
payment options.</span></label>
                            </div>
						</form>
                    </div>
                </div>
                
                <div className="sidbar-row3">
                    <h2>Payment Details</h2>
                    <div className="sidbar-bar3">
                    	<div className="payment-lt">MRP Total</div>
                        <div className="payment-rt">&#8377;265.00</div>
                    </div>
                    <div className="sidbar-bar3">
                    	<div className="payment-lt">Delivery Charges</div>
                        <div className="payment-rt">&#8377;25.00</div>
                    </div>
                    <div className="sidbar-bar3">
                    	<div className="payment-lt">DawaBag Discount</div>
                        <div className="payment-rt">- &#8377;53.00</div>
                    </div>
                    <div className="sidbar-bar3">
                    	<div className="payment-lt"><span>Total Amount *</span></div>
                        <div className="payment-rt"><span>&#8377;237.00</span></div>
                    </div>
                    
                    <div className="savings">TOTAL SAVINGS &#8377;63.00</div>
                    
                    <div className="payment-row1">
                        <div className="payment-bar1">
                            <h6>TOTAL AMOUNT</h6><br />
                            <h5><span>&#8377;</span>207.00</h5>
                        </div>
                        <a href="/address" className="sidbar-btn1">Proceed</a>
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

export default Cart ;
