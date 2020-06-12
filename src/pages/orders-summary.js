import React, { Component } from 'react';
import KnowerWrapp from '../include/knower-wrapp';
import Footer from '../include/footer';
import Header from '../include/header';
import LinkerWrapp from '../include/linker-wrapp';
import JudgerWrapp from '../include/judger-wrapp';
import CallusWrapp from '../include/callus-wrapp';
import ImpoerWrapp from '../include/impoer-wrapp';
import orderIcon1 from '../images/order-icon1.jpg'
import orderDot1 from '../images/order-dot1.png'
import sample from '../images/sample.jpg'
import orderPlus from '../images/order-plus.png'
import productThumb1 from '../images/product-thumb1.png'
import $ from "jquery";
import { userAuth } from '../function/auth';
import { withRouter,NavLink } from 'react-router-dom';
import ShowAlert from '../function/alert';
class OrdersSummary extends Component {
    state={
        message:"",
        error:"",
        orders:[]
    }
componentWillMount(){
    this.updateData();
    const data={
        apiVersion:"1.0",
        userId:1,
        orderId:1,
        imei:"",
        token:""
     }
   fetch('http://projects-demo.tk/dawabag/webservices/web/order_details',{
       method: "post",
       headers: {
         'Accept': 'application/json, text/plain, */*',
         'Content-Type': 'application/json'
       },body:JSON.stringify(data)
     })
     .then(res=>res.json())
//.then(res=>console.log(res))
     .then(res=>{this.setState({orders:res.data.order_details[0]||"",error:res.error||""})
     console.log(this.state)       })



}
componentDidMount(){
    this.updateData();
}

componentWillUpdate(){
    this.updateData();
   }

updateData=()=>{
    $(".tab-bar2").hide();
	$(".tab-bar2:first").show();
	$(".tab-row1 li").click(function() {
	$(".tab-bar2").hide();
	var activeTab = $(this).attr("rel"); 
	$("#"+activeTab).fadeIn();		
	$(".tab-row1 li").removeClass("active");
	$(this).addClass("active");
    });

	$(function() {
        $('a[href*="#"]:not([href="#"])').click(function() {
        if (window.location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') && window.location.hostname === this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
        $('html, body').animate({
        scrollTop: target.offset().top
        }, 2000);
        return false;
        }
        }
        });
        });
  
}
showDetails=(details)=>{
    if(details){
        if(details.items){

 
var orders=details.items.map(order=>{
return(  <div className="product-row2" key={order.medicineId}>
<div className="product-bar1">
    <div>
        <div className="product-thumb"><img src={order.image1||order.image2||order.image3||order.image4||order.image5||order.image6} alt="product thumb1"/></div>
    </div>
</div>
<div className="product-bar2">
<h2>{order.name}</h2>
<h2>{order.details}</h2>
    <h3>{order.brand}</h3>
<h4>{order.additionalDetails}</h4>
<h5>Qty {order.quantity}</h5>
    <div className="product-bar3">
        <div className="product-bar4">
<h6><span>Rs.</span>{order.subTotal}</h6>
        </div>
    </div>
</div>
</div>
)
})
return orders;
}
}
}
showOrder=()=>{

    if(this.state.orders.length!==0){
        var orders=this.state.orders;
        return(
    <div className="summary-row1">
    <div className="summary-bar1">
            
            <ul className="tab-row1">
                <li className="active" rel="tab1">Items</li>
                <li rel="tab2">Order Summary</li>
            </ul>
            <div className="tab-row2">
                <div id="tab1" className="tab-bar2">
                                                    
                    <div className="summary-row2">
                        <div className="summary-row3">
                            <div className="summary-bar2"><img src={orderIcon1} alt="order icon1"/></div>
                            <div className="summary-bar3"><h6>Delivery Date: <span>saturday 10 / Feb / 2020</span></h6></div>
                        </div>
                        <div className="summary-row3 border1">
                            <div className="summary-bar22"><img src={orderDot1} alt="order icon1"/></div>
                            <div className="summary-bar33"><h5><span>Patient:</span> 
                            </h5></div>
                        </div>
                        <div className="summary-row3 border1">
                            <div className="summary-bar22"><img src={orderDot1} alt="order icon1"/></div>
                            <div className="summary-bar33"><h5><span>Order No:</span> M121999</h5></div>
                        </div>
                        <div className="summary-row3 border1">
                            <div className="summary-bar22"><img src={orderDot1} alt="order icon1"/></div>
                            <div className="summary-bar33"><h5><span>Status:</span> Order Process........</h5></div>
                        </div>
                        <div className="summary-row3 border1">
                            <div className="summary-bar22"><img src={orderDot1} alt="order icon1"/></div>
                            <div className="summary-bar33"><h5><span>Delivery Address:</span> Mahaveer Sancheti</h5>
                                <p>Arihant Collection, Gitavandan Soc, Near Akash Petrol Pump, <span>Dindori Road, Panchavati, Nashik - 422003</span></p>
                            </div>
                        </div>
                        <div className="summary-row3 border1">
                            <div className="summary-bar22"><img src={orderDot1} alt="order icon1"/></div>
                            <div className="summary-bar33"><h5><span>Pharmacy Details:</span></h5>
                                <h3>Pharmacist Name:</h3>
                                <h4>Axelia Healthcare</h4>
                                <h3>Address:</h3>
                                <h4>Yogita, Manoj, Shop No.5, Ratnadeep Colony, Opp. <span>Bhaichand Teatile, LBS Marg, Mumbai - 400078</span></h4>
                            </div>
                        </div>
                        <div className="summary-row3 border1">
                            <div className="summary-bar22"><img src={orderDot1} alt="order icon1"/></div>
                            <div className="summary-bar33"><h5><span>Prescriptions Uploded By You:</span></h5></div>
                            <div className="sample-row1">
                            <div className="sample"><img src={sample}/></div>
                            <div className="sample"><img src={sample}/></div>
                            <div className="sample"><img src={sample}/></div>
                            <div className="sample"><div className="plus"><img src={orderPlus}/></div></div>
                            </div>
                        </div>
                    </div>
                    
                </div>
              
                <div id="tab2" className="tab-bar2">
                    
                    <div className="product-row1">
                    
                        </div>
                    
                </div>
              
            </div>
            
        </div>
    </div>
         ) }
         return orders;
}
  
  render() {
    userAuth(this.props);  
    return (
<div>

<Header />
	<LinkerWrapp />
    
<section className="banner-wrapp inner-wrapp">
	<div className="margin">
    	<div className="inner-row1">
        	<ul className="inner-bar1">
            	<li><NavLink to={Config.BASE_URL}>Home</NavLink></li>
                <li>/</li>
                <li>Select Address</li>
            </ul>
        </div>
    </div>
</section>

<section className="inner-head">
	<div className="margin">
    	<h2>Select Address</h2>
    </div>
</section>

<section className="conten-wrapp">
	<div className="margin">
    	
		<div className="conten-row1">
			<div className="conten-bar1 summary-wrapp">
            
		 <div className="summary-row1">
    <div className="summary-bar1">
            
            <ul className="tab-row1">
                <li className="active" rel="tab1">Items</li>
                <li rel="tab2">Order Summary</li>
            </ul>
            <div className="tab-row2">
                <div id="tab1" className="tab-bar2">
                                                    
                    <div className="summary-row2">
                        <div className="summary-row3">
                            <div className="summary-bar2"><img src={orderIcon1} alt="order icon1"/></div>
                            <div className="summary-bar3"><h6>Delivery Date: <span>saturday 10 / Feb / 2020</span></h6></div>
                        </div>
                        <div className="summary-row3 border1">
                            <div className="summary-bar22"><img src={orderDot1} alt="order icon1"/></div>
                            <div className="summary-bar33"><h5><span>Patient:</span> 
                            </h5></div>
                        </div>
                        <div className="summary-row3 border1">
                            <div className="summary-bar22"><img src={orderDot1} alt="order icon1"/></div>
                            <div className="summary-bar33"><h5><span>Order No:</span> M121999</h5></div>
                        </div>
                        <div className="summary-row3 border1">
                            <div className="summary-bar22"><img src={orderDot1} alt="order icon1"/></div>
                            <div className="summary-bar33"><h5><span>Status:</span> Order Process........</h5></div>
                        </div>
                        <div className="summary-row3 border1">
                            <div className="summary-bar22"><img src={orderDot1} alt="order icon1"/></div>
                            <div className="summary-bar33"><h5><span>Delivery Address:</span> Mahaveer Sancheti</h5>
                                <p>Arihant Collection, Gitavandan Soc, Near Akash Petrol Pump, <span>Dindori Road, Panchavati, Nashik - 422003</span></p>
                            </div>
                        </div>
                        <div className="summary-row3 border1">
                            <div className="summary-bar22"><img src={orderDot1} alt="order icon1"/></div>
                            <div className="summary-bar33"><h5><span>Pharmacy Details:</span></h5>
                                <h3>Pharmacist Name:</h3>
                                <h4>Axelia Healthcare</h4>
                                <h3>Address:</h3>
                                <h4>Yogita, Manoj, Shop No.5, Ratnadeep Colony, Opp. <span>Bhaichand Teatile, LBS Marg, Mumbai - 400078</span></h4>
                            </div>
                        </div>
                        <div className="summary-row3 border1">
                            <div className="summary-bar22"><img src={orderDot1} alt="order icon1"/></div>
                            <div className="summary-bar33"><h5><span>Prescriptions Uploded By You:</span></h5></div>
                            <div className="sample-row1">
                            <div className="sample"><img src={sample}/></div>
                            <div className="sample"><img src={sample}/></div>
                            <div className="sample"><img src={sample}/></div>
                            <div className="sample"><div className="plus"><img src={orderPlus}/></div></div>
                            </div>
                        </div>
                    </div>
                    
                </div>
              
                <div id="tab2" className="tab-bar2">
                    
                    <div className="product-row1">
                    {
                    this.showDetails(this.state.orders)
                    }
                        </div>
                    
                </div>
              
            </div>
            
        </div>
    </div>
   
                
            </div>
            
            <div className="conten-bar2 sidbar-wrapp">
                
                <div className="sidbar-row3">
                    <h2>Bill Details</h2>
                    <div className="sidbar-bar3">
                    	<div className="payment-lt">Ordered Items:</div>
                        <div className="payment-rt">18 items</div>
                    </div>
                    <div className="sidbar-bar3">
                    	<div className="payment-lt">Order Total:</div>
                        <div className="payment-rt">Rs.1420</div>
                    </div>
                    
                    <NavLink to={Config.BASE_URL+"#"} className="sidbar-btn3">Place Order</NavLink>
                    
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

export default withRouter(OrdersSummary);
