import React, { Component } from 'react';
import callIcon from '../images/call-icon2.png';


class CallusWrapp extends Component {
  render() {
    return (
<section className="callus-wrapp">
	<div className="margin">
    	<p><span><img src={callIcon} alt="call icon2"/></span>You can also order by calling us on +91 <a href="#">98989 99929</a></p>
    </div>
</section>

    );
  }
}

export default CallusWrapp;
