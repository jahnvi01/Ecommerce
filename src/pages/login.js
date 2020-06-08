import React, { Component } from 'react';
import dawabagLogo1 from '../images/dawabag-logo1.png';
import { withRouter } from 'react-router-dom';


class Login extends Component {
	state={
		message:"",
		error:"",
		
	}


send=(e)=>{
	e.preventDefault();
	var mobile=document.getElementById("mobile").value;
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
		this.props.history.push(`/otp/${mobile}`)
					 
					 
	})
}


  render() {
    return (

<div className="limiter">
		<div className="container-login100">
        
        	<div className="login-logo">
            	<div className="logo-bar1"><a href="/"><img src={dawabagLogo1}/></a></div>
                <p> 2000+ medicines</p>
            </div>
            
            <div className="login-text">
            	<div className="text-bar1">
                	<h3>There’s a <span>smarter way to</span> Dawabag around</h3>
                    <p>Sign up with your phone number and get exclusive access to discounts and savings on Dawabag.</p>
                </div>
            </div>
            
			<div className="wrap-login100">
				<form className="login100-form validate-form" action="">

					<span className="login100-form-title p-b-34 p-t-27">
						Log in
					</span>
                    
                    <p>Please enter your phone number to continue</p>

					<div className="wrap-input100 validate-input" data-validate = "Enter username">
						<input className="input100" type="text" id="mobile" name="phone number" placeholder="phone number" />
						<span className="focus-input100" data-placeholder="&#xf207;"></span>
					</div>
					
					<div className="container-login100-form-btn">
					    
						<button className="login100-form-btn" onClick={(event)=>{this.send(event)}}>
							Verify Number	
						</button>
					
					</div>
                    
                    {/* <!--<p>Prefer to Sign in with password instead? <a href="#">Click here</a></p>--> */}

					<div className="p-t-50 sign">
                    	<h2>Or sign in as</h2>
						<a className="txt1" href="/signup">
							Doctor
						</a>
                        <a className="txt1" href="/signup">
							Pharmacy
						</a>
					</div>
				</form>
			</div>
		</div>
	</div>


    );
  }
}

export default withRouter(Login);
