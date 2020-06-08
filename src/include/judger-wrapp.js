import React, { Component } from 'react';
import googleplay from '../images/googleplay-thumb1.png';
import appstore from '../images/appstore-thumb1.png';

class JudgerWrapp extends Component {
  render() {
    return (
<section className="judger-wrapp">
	<div className="margin">
    	
        <h2>Download the App for Free</h2>
        <p>Lorem khaled Ipsum is a major key to success.</p>
        
    	<div className="judger-row1">
        	<a href="#"><img src={googleplay} alt="googleplay thumb1"/></a>
            <a href="#"><img src={appstore} alt="appstore thumb1"/></a>
        </div>
        
    </div>
</section>

    );
  }
}

export default JudgerWrapp;
