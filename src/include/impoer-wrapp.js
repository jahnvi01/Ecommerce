


import React, { Component } from 'react';
import impoerIcon1 from '../images/impoer-icon1.png';
import impoerIcon2 from '../images/impoer-icon2.png';
import impoerIcon3 from '../images/impoer-icon3.png';
import impoerIcon4 from '../images/impoer-icon4.png';

class ImpoerWrapp extends Component {
  render() {
    return (
<section className="impoer-wrapp">
	<div className="margin">
    
		<h2>Details And Payments</h2>
        <p>Lorem khaled Ipsum is a major key to success.</p>
        
        <div className="impoer-row1">
        	
            <div className="impoer-row2">
            	<div className="impoer-icon"><img src={impoerIcon1} alt="impoer icon1"/></div>
                <div className="impoer-bar1">
                    <h3>Secure And Reliable Payment</h3>
                    <p>We maintain strict quality controls on all our partner retailers, so that you always get standard quality products. It was popularised in the 1960s with the release.</p>
                </div>
            </div>
            <div className="impoer-row2">
            	<div className="impoer-icon"><img src={impoerIcon2} alt="impoer icon2"/></div>
                <div className="impoer-bar1">
                    <h3>Well Maintained Temperature Conditions</h3>
                    <p>We maintain strict quality controls on all our partner retailers, so that you always get standard quality products. It was popularised in the 1960s with the release.</p>
                </div>
            </div>
            <div className="impoer-row2">
            	<div className="impoer-icon"><img src={impoerIcon3} alt="impoer icon3"/></div>
                <div className="impoer-bar1">
                    <h3>Genuine Medicience. Authenticate Your Medicine</h3>
                    <p>We maintain strict quality controls on all our partner retailers, so that you always get standard quality products. It was popularised in the 1960s with the release.</p>
                </div>
            </div>
            <div className="impoer-row2">
            	<div className="impoer-icon"><img src={impoerIcon4} alt="impoer icon4"/></div>
                <div className="impoer-bar1">
                    <h3>Fast Delivery At Your Doorstep</h3>
                    <p>We maintain strict quality controls on all our partner retailers, so that you always get standard quality products. It was popularised in the 1960s with the release.</p>
                </div>
            </div>
            
        </div>
        
	</div>
</section>


    );
  }
}

export default ImpoerWrapp;
