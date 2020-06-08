import React, { Component } from 'react';
import addressIcon1 from '../images/address-icon1.png';
import addressIcon2 from '../images/address-icon2.png';
import KnowerWrapp from '../include/knower-wrapp';
import Footer from '../include/footer';
import Header from '../include/header';
import LinkerWrapp from '../include/linker-wrapp';
import JudgerWrapp from '../include/judger-wrapp';
import CallusWrapp from '../include/callus-wrapp';
import ImpoerWrapp from '../include/impoer-wrapp';



class Address extends Component {
  
    state={
        message:"",
        error:"",
        addresses:[]
    }
    componentWillMount(){
    
        const data={
            apiVersion:"1.0",
            userId:1,
            token:""
         }
       fetch('http://projects-demo.tk/dawabag/webservices/web/user_address',{
           method: "post",
           headers: {
             'Accept': 'application/json, text/plain, */*',
             'Content-Type': 'application/json'
           },body:JSON.stringify(data)
         })
         .then(res=>res.json())
     .then(res=>console.log(res))
        //  .then(res=>{this.setState({addresses:res.data.user_address||[],error:res.error||""})
        //  console.log(this.state)       })
 
   }
   

  render() {
    return (
<div>

<Header />
	<LinkerWrapp />
    <section class="banner-wrapp inner-wrapp">
	<div class="margin">
    	<div class="inner-row1">
        	<ul class="inner-bar1">
            	<li><a href="/">Home</a></li>
                <li>/</li>
                <li>Select Address</li>
            </ul>
        </div>
    </div>
</section>

<section class="inner-head">
	<div class="margin">
    	<h2>Select Address</h2>
    </div>
</section>

<section class="conten-wrapp">
	<div class="margin">
    	
		<div class="conten-row1">
			<div class="conten-bar1 adress-wrapp">
            
				<div class="adress-row1">
                
                	<div class="adress-row2">
                        <div class="adress-bar1"><img src={addressIcon1} alt="address icon1"/></div>
                        <div class="adress-bar2">
                            <h2>Home</h2>
                            <h3>Swap Patil</h3>
                            <p>Tulsi Shree App, Lamkhedemala, Tarwalanagr Nashik, Dindori Road, <span>Nashikik - 422003, Maharashtra.</span> +91 - 9604088945.</p>
    						<h4><a href="#">MODIFY</a></h4>
                        </div>
                    </div>
                    
                    <div class="adress-row2">
                        <div class="adress-bar1"><img src={addressIcon2} alt="address icon2"/></div>
                        <div class="adress-bar2">
                            <h3><a href="/new-address">Add New Address</a></h3>
                        </div>
                    </div>
                    
                </div>
                
            </div>
            
            <div class="conten-bar2 sidbar-wrapp">
                
                <div class="sidbar-row3">
                    <h2>Payment Details</h2>
                    <div class="sidbar-bar3">
                    	<div class="payment-lt">MRP Total</div>
                        <div class="payment-rt">Rs.265.00</div>
                    </div>
                    <div class="sidbar-bar3">
                    	<div class="payment-lt">Delivery Charges</div>
                        <div class="payment-rt">Rs.25.00</div>
                    </div>
                    <div class="sidbar-bar3">
                    	<div class="payment-lt">DawaBag Discount</div>
                        <div class="payment-rt">- Rs.53.00</div>
                    </div>
                    <div class="sidbar-bar3">
                    	<div class="payment-lt"><span>Total Amount *</span></div>
                        <div class="payment-rt"><span>Rs.237.00</span></div>
                    </div>
                    
                    <div class="savings">TOTAL SAVINGS RS.63.00</div>
                    
                    <div class="payment-row1">
                        <div class="payment-bar1">
                            <h6>TOTAL AMOUNT</h6><br />
                            <h5><span>Rs.</span>207.00</h5>
                        </div>
                        <a href="#" class="sidbar-btn2">PROCEED TO PAYMENT</a>
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

export default Address ;
