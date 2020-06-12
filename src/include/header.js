import React, { Component } from 'react';
import headerIcon1 from '../images/header-icon1.png';
import headerIcon2 from '../images/header-icon2.png';
import callIcon1 from '../images/call-icon1.png';

class Header extends Component {
  render() {
    return (
<header className="header-wrapp">
	<div className="margin">
    	
        <div className="header-row1">
			<div className="header-bar1">
				<ul>
                  	<p>hey there! Welcome to Dawabag</p>
                    {/* <p>Any offer/flat discount to be display here</p>*/}
                    <p>20% off on any medicine</p>
				</ul>
			</div>
		</div>
        <div className="header-row2">
			<div className="header-bar2">
				<p>Wishlist</p>
                <p><span><a href="#"><img src={headerIcon1} alt="header icon1"/></a><a href="#"><img src={headerIcon2} alt="header icon2"/></a></span></p>
			</div>
		</div>
        <div className="header-row3">
			<div className="header-bar3">
				<div className="call-icon"><img src={callIcon1} alt="call icon1"/></div>
                <a href="#">+91 99929 99929</a>
			</div>
		</div>
                    
	</div>
</header>
    );
  }
}

export default Header;
