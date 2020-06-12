import React, { Component } from 'react';
import productThumb1 from '../images/product-thumb1.png';
import about1 from '../images/about-thumb1.jpg';
import pharmacy from '../images/pharmacy.png';
import KnowerWrapp from '../include/knower-wrapp';
import Footer from '../include/footer';
import Header from '../include/header';
import OwlCarousel from 'react-owl-carousel';
import LinkerWrapp from '../include/linker-wrapp';
import JudgerWrapp from '../include/judger-wrapp';
import CallusWrapp from '../include/callus-wrapp';
import ImpoerWrapp from '../include/impoer-wrapp';
import $ from 'jquery';
import { NavLink } from 'react-router-dom';
import Config from '../Config';
class About extends Component {
  
  render() {

    return (
<div>

<Header />
	<LinkerWrapp />
    <section className="banner-wrapp inner-wrapp">
	<div className="margin">
    	<div className="inner-row1">
        	<ul className="inner-bar1">
            	<li><NavLink to={Config.BASE_URL}>Home</NavLink></li>
                <li>/</li>
                <li>About Us</li>
            </ul>
        </div>
    </div>
</section>

<section className="inner-head">
	<div className="margin">
    	<h2>About Us</h2>
    </div>
</section>

<section className="conten-wrapp">
	<div className="margin">
    	
		<div className="conten-row1 about-wrapp">
			
            <div className="about-row1">
            	<div className="about-bar1"><img src={about1} alt="about thumb1"/></div>
                <div className="about-bar2">
                	<h2>We make healthcare <span>Understandable, Accessible and Affordable.</span></h2>
                </div>
            </div>
            
            <h3>India’s leading digital consumer healthcare platform</h3>
            
            <div className="about-row2">
            	<div className="about-bar3">
                	<div className="about-icon"><img src={pharmacy} alt="pharmacy"/></div>
                    <h4>E-Pharmacy</h4>
                    <p>Order medicines and health products online and get it delivered at home from licensed pharmacies</p>
                </div>
                <div className="about-bar3">
                	<div className="about-icon"><img src={pharmacy}alt="pharmacy"/></div>
                    <h4>Online Consultations</h4>
                    <p>Order medicines and health products online and get it delivered at home from licensed pharmacies</p>
                </div>
                <div className="about-bar3">
                	<div className="about-icon"><img src={pharmacy} alt="pharmacy"/></div>
                    <h4>Labs Tests</h4>
                    <p>Order medicines and health products online and get it delivered at home from licensed pharmacies</p>
                </div>
                <div className="about-bar3">
                	<div className="about-icon"><img src={pharmacy} alt="pharmacy"/></div>
                    <h4>Authentic Information</h4>
                    <p>Order medicines and health products online and get it delivered at home from licensed pharmacies</p>
                </div>
            </div>
            
            <div className="about-row3">
            <p>dawabag.com brings to you an online platform, which can be accessed for all your health needs. We are trying to make healthcare a hassle-free experience for you. Get your allopathic, ayurvedic, homeopathic medicines, vitamins & nutrition supplements and other health-related products delivered at home. Lab tests? That too in the comfort of your home. Doctor consult? Yes, we got that covered too.</p>
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

export default About;
