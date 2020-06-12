
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import dawabag2 from '../images/dawabag-logo2.png';
import linkerIcon1 from '../images/linker-icon1.png';
import linkerIcon2 from '../images/linker-icon2.png';
import linkerIcon3 from '../images/linker-icon3.png';
import linkerIcon4 from '../images/linker-icon4.png';
import Config from '../Config';


class KnowerWrapp extends Component {
  render() {
    return (
<section className="knower-wrapp">
<div className="margin">
    
    <div className="knower-row1">
    <div className="knower-bar1">
              <div className="knower-logo"><NavLink to={Config.BASE_URL}><img src={dawabag2} alt="footer logo1"/></NavLink></div>
              {/* <!--<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>--> */}
          </div>
          <div className="knower-row2">
            <h2>Dawabag</h2>
              <ul className="knower-bar2">
                  <li><NavLink to={Config.BASE_URL +'about-us'}>About Us</NavLink></li>
                  <li><NavLink to={Config.BASE_URL +'#'}>Career</NavLink></li>
                  <li><NavLink to={Config.BASE_URL +'contact-us'}>Contact-us Us</NavLink></li>
                  <li><NavLink to={Config.BASE_URL +'#'}>Subscribe</NavLink></li>
                
              </ul>
          </div>
          <div className="knower-row2">
            <h2>POLICY INFO</h2>
              <ul className="knower-bar2">
                  
                  <li><NavLink to={Config.BASE_URL +'terms-and-conditions'}>Terms and conditions</NavLink></li>
                  <li><NavLink to={Config.BASE_URL +'#'}>FAQs</NavLink></li>
                  <li><NavLink to={Config.BASE_URL +'privacy-policy'}>Privacy Policy</NavLink></li>
               
                  {/* <!--<li><NavLink to={Config.BASE_URL +'#'}>Legal Notice</a></li>-->
                  <!--<li><NavLink to={Config.BASE_URL +'#'}>Secure payment</a></li>--> */}
              </ul>
          </div>
          {/* <!--<div className="knower-row2">-->
          <!--	<h2>NEED HELP?</h2>-->
          <!--    <ul className="knower-bar2">-->
          <!--        <li><NavLink to={Config.BASE_URL +'#'}>Browse All Medicines</a></li>-->
          <!--        <li><NavLink to={Config.BASE_URL +'#'}>Credit slips</a></li>-->
          <!--        <li><NavLink to={Config.BASE_URL +'#'}>My Wishlists</a></li>-->
          <!--    </ul>-->
          <!--</div>--> */}
          <div className="knower-row2">
            <h2>FOLLOW US</h2>
            <div className="knower-box1">
                  <NavLink to={Config.BASE_URL +'#'}><img src={linkerIcon1} alt="linker icon1" /></NavLink>
                  <NavLink to={Config.BASE_URL +'#'}><img src={linkerIcon2} alt="linker icon2" /></NavLink>
                  <NavLink to={Config.BASE_URL +'#'}><img src={linkerIcon3} alt="linker icon3" /></NavLink>
                  <NavLink to={Config.BASE_URL +'#'}><img src={linkerIcon4} alt="linker icon4" /></NavLink>
              </div>
          </div>
         
      </div>
      
  </div>
  
</section>


    );
  }
}

export default KnowerWrapp;
