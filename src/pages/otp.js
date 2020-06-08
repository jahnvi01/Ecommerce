import React, { Component } from 'react';
import dawabagLogo2 from '../images/dawabag-logo2.png';
import $ from 'jquery';


class Otp extends Component {

	state={
		message:"",
		error:"",
		
	}

send=(e)=>{
	e.preventDefault();
	var mobile=	this.props.match.params.mobile; 
	const data={
		apiVersion:"1.0",
		mobile:mobile,
		userType:"doctor",
		imei:"",
	
	 }
	 fetch('http://projects-demo.tk/dawabag/webservices/web/send_otp',{
	   method: "post",
	   headers: {
		 'Accept': 'application/json, text/plain, */*',
		 'Content-Type': 'application/json'
	   },body:JSON.stringify(data)
	 })
	 .then(res=>res.json())
	// .then(res=>console.log(res))
	.then(res=>{this.setState({message:res.result.message||"",error:res.error||""})
		alert(this.state.message);
					 
					 
	})
}
verify=()=>{
	var d1=document.getElementById("d1").value;
	var d2=document.getElementById("d2").value;
	var d3=document.getElementById("d3").value;
	var d4=document.getElementById("d4").value;
	var mobile=	this.props.match.params.mobile; 
var otp=d1+d2+d3+d4;
const data={
	apiVersion:"1.0",
	mobile:mobile,
	userType:"doctor",
	otp:otp,
	imei:"",

 }
//  fetch('http://projects-demo.tk/dawabag/webservices/web/send_otp',{
//    method: "post",
//    headers: {
// 	 'Accept': 'application/json, text/plain, */*',
// 	 'Content-Type': 'application/json'
//    },body:JSON.stringify(data)
//  })
//  .then(res=>res.json())
// // .then(res=>console.log(res))
// .then(res=>{this.setState({message:res.result.message||"",error:res.error||""})
// 	alert(this.state.message);
				 
				 
// })
}
  render() {
 
    return (

<div className="limiter">
		<div className="container-login100">
        
        	<div className="login-logo">
            	<div className="logo-bar1"><a href="/"><img src={dawabagLogo2}/></a></div>
                <p>2000+ medicines</p>
            </div>
            
            <div className="login-text">
            	<div className="text-bar1">
                	<h3>There’s a <span>smarter way to</span> Dawabag around</h3>
                    <p>Sign up with your phone number and get exclusive access to discounts and savings on Dawabag.</p>
                </div>
            </div>
            
			<div className="wrap-login100">
				<form className="login100-form validate-form">

					<span className="login100-form-title p-b-34 p-t-27">
						Share OTP
					</span>
                    
                    <p>We have sent a temporary passcode to you at +91-7020313005</p>
                    <h6>Use a different number</h6>
                    <h5>Enter your 4-digit passcode</h5>

					<div className="wrap-input200 validate-input" data-validate = "Enter username">
                    	<input name="number" id="d1" type="text" className="judger-fil1 judger-fil4" style={{visibility: "visible"}} />
						<input name="number" id="d2" type="text" className="judger-fil1 judger-fil4" style={{visibility: "visible"}} />
                        <input name="number"id="d3"  type="text" className="judger-fil1 judger-fil4" style={{visibility: "visible"}} />
                        <input name="number" id="d4" type="text" className="judger-fil1 judger-fil4" style={{visibility: "visible"}} />
					</div>
                    
                    <a href="#" className="hvr-sweep-to-left" onClick={(event)=>{this.send(event)}}>Resend OTP</a>
                    <a href="#" className="hvr-sweep-to-left2" onClick={(event)=>{this.verify(event)}}>Verify OTP</a>
					
				</form>
			</div>
		</div>
	</div>

    );
  }
}

export default Otp
