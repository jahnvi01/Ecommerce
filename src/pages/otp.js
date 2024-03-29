import React, { Component } from 'react';
import dawabagLogo2 from '../images/dawabag-logo2.png';
import {authentication,isAuth} from '../function/auth';
import ShowAlert from '../function/alert';
import Config from '../Config';
import { withRouter,Link,NavLink } from 'react-router-dom';
import {connect} from 'react-redux';
class Otp extends Component {

	state={
		message:"",
		error:"",
		
	}

send=(e)=>{
	e.preventDefault();
	var mobile=	this.props.match.params.mobile; 
	const data={
		apiVersion:Config.APIVERSION,
		mobile:mobile,
		userType:"doctor",
		imei:Config.IMEI,
	
	 }
	 fetch(Config.API+'/send_otp',{
	   method: "post",
	   headers: {
		 'Accept': 'application/json, text/plain, */*',
		 'Content-Type': 'application/json'
	   },body:JSON.stringify(data)
	 })
	 .then(res=>res.json())
	// .then(res=>console.log(res))
	.then(res=>{this.setState({message:res.result.message||"",error:res.error||""})					 
	})
}
verify=(e)=>{
	e.preventDefault()
	var d1=document.getElementById("d1").value;
	var d2=document.getElementById("d2").value;
	var d3=document.getElementById("d3").value;
	var d4=document.getElementById("d4").value;
	var mobile=	this.props.match.params.mobile; 
	if(d1 && d2 && d4 && d3){

	
var otp=d1+d2+d3+d4;
const data={
	apiVersion:Config.APIVERSION,
	mobile:mobile,
	userType:"doctor",
	otp:otp,
	imei:Config.IMEI,

 }
 fetch(Config.API+'/verify_otp',{
   method: "post",
   headers: {
	 'Accept': 'application/json, text/plain, */*',
	 'Content-Type': 'application/json'
   },body:JSON.stringify(data)
 })
 .then(res=>res.json())
//.then(res=>console.log(res))
.then(res=>{this.setState({message:res.result.message||"",error:res.error||""})
	if(res.result.message==="Correct OTP."){
console.log(res.result.message)		
		authentication(res.result);

		if(this.props.cart.length!==0){
			this.props.cart.map(product=>this.props.addCart(product))
			this.props.getCart()
		}
else{
	this.props.getCart()
}
this.props.history.push("/demo")
	}	
	 
})
	}
	else{
		this.setState({error:"Enter OTP Correctly"})
	}
}
  render() {
 
    return (

<div className="limiter">
<ShowAlert message={this.state.message} error={this.state.error} />
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

					<span className="login100-form-title p-b-34 p-t-27">
						Share OTP
					</span>
                    
	<p>We have sent a temporary passcode to you at {this.props.match.params.mobile}</p>
                    <h6>Use a different number</h6>
                    <h5>Enter your 4-digit passcode</h5>

					<div className="wrap-input200 validate-input" data-validate = "Enter username">
                    	<input name="number" id="d1"  type="text" maxLength="1" className="judger-fil1 judger-fil4" style={{visibility: "visible"}} />
						<input name="number" id="d2" type="text" maxLength="1" className="judger-fil1 judger-fil4" style={{visibility: "visible"}} />
                        <input name="number"id="d3"  type="text" maxLength="1" className="judger-fil1 judger-fil4" style={{visibility: "visible"}} />
                        <input name="number" id="d4" type="text" maxLength="1" className="judger-fil1 judger-fil4" style={{visibility: "visible"}} />
					</div>

				   <NavLink to={Config.BASE_URL+"#"} className="hvr-sweep-to-left" onClick={(event)=>{this.send(event)}}>Resend OTP</NavLink>
                    <NavLink to={Config.BASE_URL+"#"} className="hvr-sweep-to-left2" onClick={(event)=>{this.verify(event)}}>Verify OTP</NavLink>
			    
                    {/* <button className="hvr-sweep-to-left" onClick={(event)=>{this.send(event)}}>Resend OTP</button>
                    <button className="hvr-sweep-to-left2" onClick={(event)=>{this.verify(event)}}>Verify OTP</button>
					 */}
				</form>
			</div>
		</div>
	</div>

    );
  }
}
function mapStateToProps(state){
	
	
		return {

			cart:JSON.parse(localStorage.getItem('cart')||'[]'),
	
		}
	  
	}
function mapDispatchToStates(dispatch){
    return{
   
        getCart:()=>{

      

            const data={
                apiVersion:Config.APIVERSION,
                token:"",
                userId:isAuth().userId,
                     imei:Config.IMEI
            }
			fetch(Config.API+'/get_cart_items',{
				method: "post",
				headers: {
				  'Accept': 'application/json, text/plain, */*',
				  'Content-Type': 'application/json'
				},body:JSON.stringify(data)
			  })
			  .then(res=>res.json())
			.then(res=>{
				if(res.data.medicines!==null){
					dispatch({type:"get",payload:res.data.medicines})
				}
else{
	dispatch({type:"get",payload:[]})}
}			
			
			) 
		  } ,
		  addCart:(product)=>{
      console.log(product)
			
			if(isAuth()){

			const data={
			  apiVersion:Config.APIVERSION,
			  token:"",
			  userId:isAuth().userId,
			  medicineId:product.id,
			  medicineStrengthId:product.medicineStrengthId,
			  medicineBatchId:product.medicineStrengthId,
			  quantity:product.quantity,
			  imei:Config.IMEI
			}
			return fetch(Config.API+'/add_item_in_cart',{
			  method: "post",
			   headers: {
				'Accept': 'application/json, text/plain, */*',
				'Content-Type': 'application/json'
			  },body:JSON.stringify(data)
			})
			.then(res=>res.json())
			.then(res=>console.log(res)) 
		  } 
		  }
	

    }
  }
export default withRouter(connect(mapStateToProps,mapDispatchToStates)(Otp));