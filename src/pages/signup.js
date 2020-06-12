import React, { Component } from 'react';
import dawabagLogo2 from '../images/dawabag-logo2.png';
import { NavLink } from 'react-router-dom';


class Signup extends Component {
	state = {
		visible: false,
		message:"",
		error:""
	  };

	handleDetail=(event)=>{
		event.preventDefault();
		var username=document.getElementById('username').value;
		var password=document.getElementById('password').value;
		var email=document.getElementById('email').value;
		var contact=document.getElementById('mobile').value; 
		var address=document.getElementById('address').value;    
		if(username && password && email){
	// 	var post={
	// 	  firstName:firstName,
	// 	  lastName:lastName,
	// 	  password:password,
	// 	  email:email,
	// 	  mobile:contact,
	// 	  clinicName:"Shree Clinic",
	// 	  specialization:"MBBS"
		
	//   }
	//   return fetch('/api/userpresignup',{
	// 	method: "post",
	// 	headers: {
	// 	  'Accept': 'application/json, text/plain, */*',
	// 	  'Content-Type': 'application/json'
	// 	},body:JSON.stringify(post)
	//   })
	//   .then(res=>res.json())
	//   .then(res=>this.setState({message:res.message||"",error:res.error||""}))
	   
	}
}

  render() {
 
    return (


<div className="limiter">
		<div className="container-login100">
        	<div className="login-logo">
            	<div className="logo-bar1"><NavLink to={Config.BASE_URL}><img src={dawabagLogo2}/></NavLink></div>
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
					<span className="login100-form-title p-b-0 p-t-10">
						Sign up
					</span>
                    
					<div className="wrap-input100 validate-input" data-validate = "Enter username">
						<input className="input100" type="text" id="username" name="Username" placeholder="Username" />
						<span className="focus-input100" data-placeholder="&#xf207;"></span>
					</div>
					<div className="wrap-input100 validate-input" data-validate = "Enter Mobile">
						<input className="input100" type="text" id="mobile" name="Mobile" placeholder="Mobile" />
						<span className="focus-input100" data-placeholder="&#xf207;"></span>
					</div>
                    <div className="wrap-input100 validate-input" data-validate = "Enter username">
						<input className="input100" type="text" id="email" name="E-mail" placeholder="E-mail" />
						<span className="focus-input100" data-placeholder="&#xf207;"></span>
					</div>
                    <div className="wrap-input100 validate-input" data-validate = "licence number">
						<input className="input100" type="text" id="password" name="Password" placeholder="Licence Number" />
						<span className="focus-input100" data-placeholder="&#xf207;"></span>
					</div>
                    <div className="wrap-input100 validate-input" data-validate = "address">
						<input className="input100" type="text" id="address" name="Retype Password" placeholder="Address" />
						<span className="focus-input100" data-placeholder="&#xf207;"></span>
					</div>
					
					<div className="container-login100-form-btn">
						<button onClick={(event)=>this.handleDetail(event)} className="login100-form-btn">
							Verify Number
						</button>
					</div>
{/*                     
                    <!--<p>Prefer to Sign in with password instead? <a href="#">Click here</a></p>--> */}

					<div className="p-t-50 sign">
                    	<h2>Or sign in as</h2>
                        <NavLink to={Config.BASE_URL+"login"} className="txt2">
							User 
						</NavLink>
						<NavLink to={Config.BASE_URL+"signup"} className="txt1" >
							Doctor 
						</NavLink>
                        <NavLink to={Config.BASE_URL+"signup"} className="txt1" >
							Pharmacy  
						</NavLink>
					</div>
				</form>
			</div>
		</div>
	</div>

    );
  }
}

export default Signup
