import React, { Component } from 'react';
import ordersIcon1 from '../images/orders-icon1.png';
import ordersIcon2 from '../images/orders-icon2.png';
import ordersIcon3 from '../images/orders-icon3.png';
import ordersIcon4 from '../images/orders-icon4.png';
import ordersIcon5 from '../images/orders-icon5.png';
import KnowerWrapp from '../include/knower-wrapp';
import Footer from '../include/footer';
import Header from '../include/header';
import { NavLink } from 'react-router-dom';
import LinkerWrapp from '../include/linker-wrapp';
import JudgerWrapp from '../include/judger-wrapp';
import CallusWrapp from '../include/callus-wrapp';
import ImpoerWrapp from '../include/impoer-wrapp';
import $ from 'jquery';


class Profile extends Component {
  
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
    <section class="banner-wrapp inner-wrapp">
	<div class="margin">
    	<div class="inner-row1">
        	<ul class="inner-bar1">
            	<li><NavLink to={Config.BASE_URL}>Home</NavLink> </li>
                <li>/</li>
                <li>Profile</li>
            </ul>
        </div>
    </div>
</section>

<section class="inner-head">
	<div class="margin">
    	<h2>Profile</h2>
    </div>
</section>

<section class="conten-wrapp">
	<div class="margin">
    	
		<div class="conten-row1">
			<div class="conten-bar1 profile-wrapp">
                
                <div class="profile-row1">
                	<form action="xyz" method="get">
                        <div class="profile-row2">
                            <div class="profile-bar1">Full Name</div>
                                <div class="profile-bar2">
                                    <input name="Full Name" type="text" class="profile-fil1 profile-fil2" />
                                </div>
                            </div>
                            <div class="profile-row2">
                                <div class="profile-bar1">Mobile Number</div>
                                <div class="profile-bar2">
                                    <input name="Telephone" type="text" class="profile-fil1 profile-fil2" />
                                </div>
                            </div>
                            <div class="profile-row2">
                                <div class="profile-bar1">Email</div>
                                <div class="profile-bar2">
                                    <input name="Email" type="text" class="profile-fil1 profile-fil2" />
                                </div>
                            </div>
                            <div class="contac-row2">
                                <p>Please verify your email address. Incase you did not receive any mail from us you can reverify.</p>
                                <h3>RE-VERIFY</h3>
                        	</div>
                            <div class="contac-row2">
                                <div class="contac-bar3">
                                    <input name="Save" type="submit" value="Save" class="profile-btn1" />
                                </div>
                            </div>
                    </form>
                </div>
                                
            </div>
            
            <div class="conten-bar2 sidbar-wrapp2">
				<div class="sidbar-row1">
                    
                    <div class="sidbar-bar1">
                    	<p>Total Savings:</p>
                        <h2>&#8377;2203.00</h2>
                    </div>
                    
                    <div class="sidbar-bar2">
                    	<div class="sidbar-bar3">
                        	<div class="sidbar-lt"><img src={ordersIcon1} alt="bag icon"/></div>
                            <div class="sidbar-rt">
                            	<h3>YOUR ORDERS</h3>
                            	<ul>
                            	    <NavLink to={Config.BASE_URL+"orders"}>
                                	<li>Medicine/Healthcare</li>
                                	</NavLink> 
                                    {/* <!--<li>Diagnostics</li>--> */}
                                </ul>
                            </div>
                        </div>
                        <div class="sidbar-bar3">
                        	<div class="sidbar-lt"><img src={ordersIcon2} alt="bag icon"/></div>
                            <div class="sidbar-rt">
                            	<h3>MEDICAL RECORDS</h3>
                            	<ul>
                                	<li>All</li>
                                </ul>
                            </div>
                        </div>
                        <div class="sidbar-bar3">
                        	<div class="sidbar-lt"><img src={ordersIcon3} alt="bag icon"/></div>
                            <div class="sidbar-rt">
                            	<h3>PROFILE SETTINGS</h3>
                            	<ul>
                            	    <NavLink to={Config.BASE_URL+"profile"}>
                                	<li>Edit Profile</li>
                                	</NavLink> 
                                    <li>Manage Patients</li>
                                    <NavLink to={Config.BASE_URL+"address"}>
                                    <li>Manage Address</li>
                                    </NavLink> 
                                    {/* <!--<li>Manage PRefundsatients</li>--> */}
                                </ul>
                            </div>
                        </div>
                        <div class="sidbar-bar3">
                        	<div class="sidbar-lt"><img src={ordersIcon4} alt="bag icon"/></div>
                            <div class="sidbar-rt">
                            	<h3>WALLET</h3>
                            </div>
                        </div>
                        <div class="sidbar-bar3">
                        	<div class="sidbar-lt"><img src={ordersIcon5} alt="bag icon"/></div>
                            <div class="sidbar-rt">
                            	<h3>LOG OUT</h3>
                            </div>
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

export default Profile ;
