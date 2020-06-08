
import React, { Component } from 'react';
import dawabag2 from '../images/dawabag-logo2.png';
import linkerIcon1 from '../images/linker-icon1.png';
import linkerIcon2 from '../images/linker-icon2.png';
import linkerIcon3 from '../images/linker-icon3.png';
import linkerIcon4 from '../images/linker-icon4.png';



class KnowerWrapp extends Component {
  render() {
    return (
<section className="knower-wrapp">
<div className="margin">
    
    <div className="knower-row1">
    <div className="knower-bar1">
              <div className="knower-logo"><a href="/"><img src={dawabag2} alt="footer logo1"/></a></div>
              {/* <!--<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>--> */}
          </div>
          <div className="knower-row2">
            <h2>Dawabag</h2>
              <ul className="knower-bar2">
                  <li><a href="/about-us">About Us</a></li>
                  <li><a href="#">Career</a></li>
                  <li><a href="/contact-us">Contact us</a></li>
                  <li><a href="#">Subscribe</a></li>
              </ul>
          </div>
          <div className="knower-row2">
            <h2>POLICY INFO</h2>
              <ul className="knower-bar2">
                  <li><a href="/terms-and-conditions">Terms and conditions</a></li>
                  <li><a href="#">FAQs</a></li>
                  <li><a href="/privacy-policy">Privacy Policy</a></li>
                  {/* <!--<li><a href="#">Legal Notice</a></li>-->
                  <!--<li><a href="#">Secure payment</a></li>--> */}
              </ul>
          </div>
          {/* <!--<div className="knower-row2">-->
          <!--	<h2>NEED HELP?</h2>-->
          <!--    <ul className="knower-bar2">-->
          <!--        <li><a href="#">Browse All Medicines</a></li>-->
          <!--        <li><a href="#">Credit slips</a></li>-->
          <!--        <li><a href="#">My Wishlists</a></li>-->
          <!--    </ul>-->
          <!--</div>--> */}
          <div className="knower-row2">
            <h2>FOLLOW US</h2>
            <div className="knower-box1">
                  <a href="#"><img src={linkerIcon1} alt="linker icon1" /></a>
                  <a href="#"><img src={linkerIcon2} alt="linker icon2" /></a>
                  <a href="#"><img src={linkerIcon3} alt="linker icon3" /></a>
                  <a href="#"><img src={linkerIcon4} alt="linker icon4" /></a>
              </div>
          </div>
         
      </div>
      
  </div>
  
</section>


    );
  }
}

export default KnowerWrapp;
