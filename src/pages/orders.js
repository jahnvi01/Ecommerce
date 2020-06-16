import React, { Component } from 'react';
import KnowerWrapp from '../include/knower-wrapp';
import Footer from '../include/footer';
import Header from '../include/header';
import LinkerWrapp from '../include/linker-wrapp';
import JudgerWrapp from '../include/judger-wrapp';
import CallusWrapp from '../include/callus-wrapp';
import ImpoerWrapp from '../include/impoer-wrapp';
import ordersIcon1 from '../images/orders-icon1.png'
import ordersIcon2 from '../images/orders-icon2.png'
import ordersIcon3 from '../images/orders-icon3.png'
import ordersIcon4 from '../images/orders-icon4.png'
import ordersIcon5 from '../images/orders-icon5.png'
import { userAuth } from '../function/auth';
import ShowAlert from '../function/alert';
import Config from '../Config';
import { withRouter ,NavLink} from 'react-router-dom';
class Orders extends Component {
    state={
        message:"",
        error:"",
        orders:[]
    }
    componentWillMount(){
    
        const data={
            apiVersion:Config.APIVERSION,
            userId:1,
            imei:Config.IMEI,
            token:""
         }
       fetch(Config.API+'/orders',{
           method: "post",
           headers: {
             'Accept': 'application/json, text/plain, */*',
             'Content-Type': 'application/json'
           },body:JSON.stringify(data)
         })
         .then(res=>res.json())

         .then(res=>{this.setState({orders:res.data.orders||[],error:res.error||""})
         console.log(this.state)       })
 
   }
   showDetails=(details)=>{
       console.log(details)
       var details=details.map(detail=>{
           return (
            <li>{detail.name}</li> 
           )
       })
       return details
   }
   showOrders=()=>{
       if(this.state.orders.length!==0){
       var orders=this.state.orders.map(order=>{
return(
    <div className="orders-bar2" key={order.id}>
    <NavLink to={Config.BASE_URL+`orders-summary/${order.id}`}>
<h3>{order.fname} {order.lname}</h3>
    <h4>Order Delivered</h4>
    <ul>
    {this.showDetails(order.details)}
    </ul>
      </NavLink>
    <div className="orders-bar3">
        <h6>Delivered on 16 jan</h6>
        <NavLink to={Config.BASE_URL+"cart"} className="orders-btn1">Reorder</NavLink>
    </div>
</div>

)
       })
    return orders;
    }
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
                <li>Orders</li>
            </ul>
        </div>
    </div>
</section>

<section className="inner-head">
	<div className="margin">
    	<h2>Orders</h2>
    </div>
</section>

<section className="conten-wrapp">
	<div className="margin">
    	
		<div className="conten-row1">
			<div className="conten-bar1 orders-wrapp">
            
            	<div className="orders-row1">
					<h2>MY ORDERS - MEDICINE/HEALTHCARE</h2>
                    <div className="orders-bar1">
                        <div className="custom-row1">
                            <form action="xyz" method="get">
                                <div className="custom-select">
                                <select name="redirectURL1" className="banner-fild1">
                                    <option value="fuller lips" selected="">All Orders</option>
                                    <option value="fuller lips" selected="">Delivered Orders</option>
                                </select>
                                </div>
                            </form>
                        </div>
            		</div>
                </div>
                
                <div className="orders-row2">
                    {this.showOrders()}
                	{/* <div className="orders-bar2">
                        <a href="orders-summary">
                    	<h3>Mahavir Sancheti</h3>
                        <h4>Order Delivered</h4>
                        <ul>
                        	<li>PROLOMET XL 50MG TABLET 10'S</li>
                            <li>lMETOCARD XL 50MG TAB</li>
                        </ul>
                        <h5>+2 more products</h5>
                        </NavLink>
                        <div className="orders-bar3">
                        	<h6>Delivered on 16 jan</h6>
                            <a href="/cart" className="orders-btn1">Reorder</NavLink>
						</div>
                    </div>
                    <div className="orders-bar2">
                        <a href="orders-summary">
                    	<h3>Mahavir Sancheti</h3>
                        <h4><span>Order Rejected</span></h4>
                        <ul>
                        	<li>PROLOMET XL 50MG TABLET 10'S</li>
                            <li>lMETOCARD XL 50MG TAB</li>
                        </ul>
                        <h5>+2 more products</h5>
                        </NavLink>
                        <div className="orders-bar3">
                        	<h6>Cancelled on 16 jan</h6>
						</div>
                    </div> */}
                </div>
                                
            </div>
            
            <div className="conten-bar2 sidbar-wrapp2">
				<div className="sidbar-row1">
                    
                    <div className="sidbar-bar1">
                    	<p>Total Savings:</p>
                        <h2>&#8377;2203.00</h2>
                    </div>
                    
                    <div className="sidbar-bar2">
                    	<div className="sidbar-bar3">
                        	<div className="sidbar-lt"><img src={ordersIcon1} alt="bag icon"/></div>
                            <div className="sidbar-rt">
                            	<h3>YOUR ORDERS</h3>
                            	<ul><NavLink to={Config.BASE_URL+"orders"}>
                                	<li>Medicine/Healthcare</li>
                                	</NavLink>
                                    {/* <!--<li>Diagnostics</li>--> */}
                                </ul>
                            </div>
                        </div>
                        <div className="sidbar-bar3">
                        	<div className="sidbar-lt"><img src={ordersIcon2} alt="bag icon"/></div>
                            <div className="sidbar-rt">
                            	<h3>MEDICAL RECORDS</h3>
                            	<ul>
                                	<li>All</li>
                                </ul>
                            </div>
                        </div>
                        <div className="sidbar-bar3">
                        	<div className="sidbar-lt"><img src={ordersIcon3} alt="bag icon"/></div>
                            <div className="sidbar-rt">
                            	<h3>PROFILE SETTINGS</h3>
                            	<ul><NavLink to={Config.BASE_URL+"profile"}>
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
                        <div className="sidbar-bar3">
                        	<div className="sidbar-lt"><img src={ordersIcon4} alt="bag icon"/></div>
                            <div className="sidbar-rt">
                            	<h3>WALLET</h3>
                            </div>
                        </div>
                        <div className="sidbar-bar3">
                        	<div className="sidbar-lt"><img src={ordersIcon5} alt="bag icon"/></div>
                            <div className="sidbar-rt">
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

export default withRouter(Orders);
