import React, { Component } from 'react';
import captchaThumb1 from '../images/captcha-thumb1.jpg';
import contactIcon3 from '../images/contact-icon3.png';
import contactIcon2 from '../images/contact-icon2.png';
import contactIcon1 from '../images/contact-icon1.png';
import KnowerWrapp from '../include/knower-wrapp';
import Footer from '../include/footer';
import Header from '../include/header';
import OwlCarousel from 'react-owl-carousel';
import LinkerWrapp from '../include/linker-wrapp';
import JudgerWrapp from '../include/judger-wrapp';
import CallusWrapp from '../include/callus-wrapp';
import ImpoerWrapp from '../include/impoer-wrapp';

import ShowAlert from '../function/alert';

class Contact extends Component {
  
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
            	<li><a href="/">Home</a></li>
                <li>/</li>
                <li>contact us</li>
            </ul>
        </div>
    </div>
</section>

<section className="inner-head">
	<div className="margin">
    	<h2>contact us</h2>
    </div>
</section>

<section className="conten-wrapp">
	<div className="margin">
    	
		<div className="conten-row1">
			<div className="conten-bar1 contac-wrapp">
            	
                <h2>Get in touch</h2>
				<div className="contac-row1">
                    <form action="" method="get">
                        <div className="contac-row2">
                            <div className="contac-bar1">
                                FULL NAME
                            </div>
                            <div className="contac-bar2">
                                <input name="" type="text" className="contac-fild1 contac-fild2" />
                            </div>
                        </div>
                        <div className="contac-row2">
                            <div className="contac-bar1">
                                EMAIL
                            </div>
                            <div className="contac-bar2">
                                <input name="" type="text" className="contac-fild1 contac-fild2" />
                            </div>
                        </div>
                        <div className="contac-row2">
                            <div className="contac-bar1">
                                PHONE NUMBER
                            </div>
                            <div className="contac-bar2">
                                <input name="" type="text" className="contac-fild1 contac-fild2" />
                            </div>
                        </div>
                        <div className="contac-row2">
                            <div className="contac-bar1">
                                QUESTION / ENQUIRY
                            </div>
                            <div className="contac-bar2">
                                <input name="" type="text" className="contac-fild1 contac-fild4" /> 
                            </div>
                        </div>
                        <div className="contac-row2">
                            <div className="contac-bar2">
                                <div className="contac-captcha">
                                    <div className="captcha"><img src={captchaThumb1} alt="captcha thumb1"/></div>
                                </div>
                                <input name="send enquiry" value="Send Enquiry" className="contac-btn1" type="submit" />
                            </div>
                        </div>
                    </form>
            	</div>
                
            </div>
            
            <div className="conten-bar2 sidbar-wrapp">
				<div className="sidbar-row5">
                    <h2>Dawabag</h2>
                    
                    <div className="sidbar-bar5">
                    	<div className="address-row1">
                        	<div className="address-bar1"><img src={contactIcon1} alt="contact icon1"/></div>
                            <div className="address-bar2"><p>2009  14th Street N, Suite 3, Arlington, Virginia 22201</p></div>
                        </div>
                        <div className="address-row1">
                        	<div className="address-bar1"><img src={contactIcon2} alt="contact icon2"/></div>
                            <div className="address-bar2"><p><a href="#">020 7060 2345</a></p></div>
                        </div>
                        <div className="address-row1">
                        	<div className="address-bar1"><img src={contactIcon3} alt="contact icon3"/></div>
                            <div className="address-bar2"><p><a href="#">Info@dentazure.com</a></p></div>
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

export default Contact;
