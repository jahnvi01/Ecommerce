import React, { Component } from 'react';
import KnowerWrapp from '../include/knower-wrapp';
import Footer from '../include/footer';
import Header from '../include/header';
import LinkerWrapp from '../include/linker-wrapp';
import JudgerWrapp from '../include/judger-wrapp';
import CallusWrapp from '../include/callus-wrapp';
import ImpoerWrapp from '../include/impoer-wrapp';
import offersThumb1 from '../images/offers-thumb1.jpg'
import offersThumb5 from '../images/offers-thumb5.png';
import offersThumb4 from '../images/offers-thumb4.png';
import offersThumb3 from '../images/offers-thumb3.png';
import offersThumb2 from '../images/offers-thumb2.png';
class Offers extends Component {

  render() {

    return (
<div>

<Header />
	<LinkerWrapp />
  
<section className="banner-wrapp inner-wrapp">
	<div className="margin">
    	<div className="inner-row1">
        	<ul className="inner-bar1">
            	<li><a href="/">Home</a></li>
                <li>/</li>
                <li>Special Offers</li>
            </ul>
        </div>
    </div>
</section>

<section className="inner-head">
	<div className="margin">
    	<h2>Special Offers</h2>
    </div>
</section>

<section className="conten-wrapp">
	<div className="margin">
    	
		<div className="conten-row1 offers-wrapp">
			
			<div className="offers-row1">
            	<div className="offers-row2">
                	<div className="offers-bar1">
                    	<div className="offers-lt">
                        	<h2>15% off on PE + Paytm Cashback</h2>
                            <p>Flat 20% off on Dawabag + Upto Rs.500 cashback on your 1st transaction using Paytm UPI ID on PE. *T&C apply</p>
                            <h3>Expires On 30/04/2020</h3>
                            <a href="#" className="offers-btn1">view details</a>
                        </div>
                        <div className="offers-rt paytm">
                        	<div className="offers-icon"><img src={offersThumb1} alt="offers thumb1"/></div>
                        </div>
                    </div>
                    <div className="offers-bar1">
                    	<div className="offers-lt">
                        	<h2>15% off on PE + Paytm Cashback</h2>
                            <p>Flat 20% off on Dawabag + Upto Rs.500 cashback on your 1st transaction using Paytm UPI ID on PE. *T&C apply</p>
                            <h3>Expires On 30/04/2020</h3>
                            <a href="#" className="offers-btn1">view details</a>
                        </div>
                        <div className="offers-rt paytm">
                        	<div className="offers-icon"><img src={offersThumb1}alt="offers thumb1"/></div>
                        </div>
                    </div>
                </div>
                <div className="offers-row3">
                	<h4>Subscribe for offers!</h4>
                    <form action="" method="get">
                        <div className="subscribe-row1">
                            <div className="subscribe-bar1">
                                Enter your email ID
                            </div>
                            <div className="subscribe-bar2">
                                <input name="Enter your email ID" type="text" placeholder="Enter your email ID" className="subscribe-fild1 subscribe-fild2" />
                            </div>
                        </div>
                        <input name="Subscribe" type="submit" value="Subscribe" className="subscribe-btn1" />
                    </form>
                </div>
                <div className="offers-row2">
                	<div className="offers-bar1">
                    	<div className="offers-lt">
                        	<h2>15% off on PE + Paytm Cashback</h2>
                            <p>Flat 20% off on Dawabag + Upto Rs.500 cashback on your 1st transaction using Paytm UPI ID on PE. *T&C apply</p>
                            <h3>Expires On 30/04/2020</h3>
                            <a href="#" className="offers-btn1">view details</a>
                        </div>
                        <div className="offers-rt paypal">
                        	<div className="offers-icon"><img src={offersThumb5} alt="offers thumb1"/></div>
                        </div>
                    </div>
                    <div className="offers-bar1">
                    	<div className="offers-lt">
                        	<h2>15% off on PE + Paytm Cashback</h2>
                            <p>Flat 20% off on Dawabag + Upto Rs.500 cashback on your 1st transaction using Paytm UPI ID on PE. *T&C apply</p>
                            <h3>Expires On 30/04/2020</h3>
                            <a href="#" className="offers-btn1">view details</a>
                        </div>
                        <div className="offers-rt mobikwik">
                        	<div className="offers-icon"><img src={offersThumb4} alt="offers thumb1"/></div>
                        </div>
                    </div>
                    <div className="offers-bar1">
                    	<div className="offers-lt">
                        	<h2>15% off on PE + Paytm Cashback</h2>
                            <p>Flat 20% off on Dawabag + Upto Rs.500 cashback on your 1st transaction using Paytm UPI ID on PE. *T&C apply</p>
                            <h3>Expires On 30/04/2020</h3>
                            <a href="#" className="offers-btn1">view details</a>
                        </div>
                        <div className="offers-rt airtel">
                        	<div className="offers-icon"><img src={offersThumb3} alt="offers thumb1"/></div>
                        </div>
                    </div>
                    <div className="offers-bar1">
                    	<div className="offers-lt">
                        	<h2>15% off on PE + Paytm Cashback</h2>
                            <p>Flat 20% off on Dawabag + Upto Rs.500 cashback on your 1st transaction using Paytm UPI ID on PE. *T&C apply</p>
                            <h3>Expires On 30/04/2020</h3>
                            <a href="#" className="offers-btn1">view details</a>
                        </div>
                        <div className="offers-rt freecharge">
                        	<div className="offers-icon"><img src={offersThumb2} alt="offers thumb1"/></div>
                        </div>
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

export default Offers;
