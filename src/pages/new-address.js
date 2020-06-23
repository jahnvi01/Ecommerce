import React, { Component } from 'react';
import KnowerWrapp from '../include/knower-wrapp';
import Footer from '../include/footer';
import Header from '../include/header';
import LinkerWrapp from '../include/linker-wrapp';
import JudgerWrapp from '../include/judger-wrapp';
import CallusWrapp from '../include/callus-wrapp';
import ImpoerWrapp from '../include/impoer-wrapp';
import Config from '../Config';
import { userAuth, isAuth } from '../function/auth';
import ShowAlert from '../function/alert';
import {connect} from 'react-redux';
import { withRouter,NavLink } from 'react-router-dom';

class NewAddress extends Component {

     
    state={
        message:"",
        error:"",
      
    }

    placeOrder=()=>{

        if(this.state.value!==0){
    
        
        const data={
            apiVersion:Config.APIVERSION,
            imei:Config.IMEI,
            token:"",
            userId:isAuth().userId,
            userAddressId:1,
            total:this.props.total,
    gst:30,
    discount:53,
    payable:this.props.bill,
    copounId:"FLAT50",
    items:this.props.items
            }
                return fetch(Config.API+'/place_order',{
                    method: "post",
                    headers: {
                      'Accept': 'application/json, text/plain, */*',
                      'Content-Type': 'application/json'
                    },body:JSON.stringify(data)
                  })
                  .then(res=>res.json())
                  .then(res=>this.setState({message:res.result.message})) 
                }
                else{
                 this.setState({error:"Select Address First"})
                }
       }
    


  add=(e)=>{
    
      var address1=document.getElementById("address1").value;
      var address2=document.getElementById("address2").value;
      var address3=document.getElementById("address3").value;
      var fullname=document.getElementById("fullname").value;
      var city=document.getElementById("city").value;
      var state=document.getElementById("state").value;
      var country=document.getElementById("country").value;
      var postcode=document.getElementById("postcode").value;
//       apiVersion:Config.APIVERSION,
//       userId:isAuth().userId,
// addressLine1:address1,
// addressLine2:address2,
// addressLine3:address3,
// fullname:fullname,
// city:city,
// state:state,
// country:country,
// pincode:postcode,
// lat:"",
// lng:"",
// imei:Config.IMEI,
// token:""
      const data={
        "apiVersion":Config.APIVERSION,
        "userId":isAuth().userId,  
        "addressLine1":address1,
        "addressLine2":address2,
        "addressLine3":address3,
        "city":city,
        "state":state,
        "country":country,
        "pincode":postcode,
        "lat":"",
        "lng":"",
        "imei":Config.IMEI,
        "token":""
      }

      fetch(Config.API+'/user_address_insert',{
        method: "post",
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        },body:JSON.stringify(data)
      })
      .then(res=>res.json())
.then(res=>{this.setState({message:res.result.message||"",error:res.error||""})})
    //   .then(res=>{this.setState({message:res.result.message||"",error:res.error||""})
    //   console.log(this.state)       })

      
  }
  render() {
    userAuth(this.props);  
    return (
<div>

<Header />
	<LinkerWrapp />
    
     <ShowAlert message={this.state.message} error={this.state.error}/> 
    <section class="banner-wrapp inner-wrapp">
	<div class="margin">
    	<div class="inner-row1">
        	<ul class="inner-bar1">
            	<li><NavLink to={Config.BASE_URL}>Home</NavLink></li>
                <li>/</li>
                <li>New Address</li>
            </ul>
        </div>
    </div>
</section>

<section class="inner-head">
	<div class="margin">
    	<h2>New Address</h2>
    </div>
</section>

<section class="conten-wrapp">
	<div class="margin">
    	
		<div class="conten-row1">
			<div class="conten-bar1 newadd-wrapp">

                <div class="newadd-row1">
                    <form action="" method="get">
                        <div class="newadd-row2">
                            <div class="newadd-bar1">
                                Full Name
                            </div>
                            <div class="newadd-bar2">
                                <input name="" type="text" id="fullname" placeholder="Full Name" class="newadd-fild1 newadd-fild2" />
                            </div>
                        </div>
                        <div class="newadd-row2">
                            <div class="newadd-bar1">
                                Address Line 1
                            </div>
                            <div class="newadd-bar2">
                                <input name="" type="text" id="address1" placeholder="Address Line 1" class="newadd-fild1 newadd-fild2" />
                            </div>
                        </div>
                        <div class="newadd-row2">
                            <div class="newadd-bar1">
                                Address Line 2
							</div>
                            <div class="newadd-bar2">
                                <input name="Address Line 2" id="address2" type="text" placeholder="Address Line 2" class="newadd-fild1 newadd-fild2" />
                            </div>
                        </div>
                        <div class="newadd-row2">
                            <div class="newadd-bar1">
                                Address Line 3
                            </div>
                            <div class="newadd-bar2">
                                <input name="" type="text" id="address3" placeholder="Address Line 3" class="newadd-fild1 newadd-fild2" />
                            </div>
                        </div>
                        <div class="newadd-row2">
                            <div class="newadd-bar1">
                                City / Town
                            </div>
                            <div class="newadd-bar2">
                                <input name="City / Town" type="text" id="city" placeholder="City / Town" class="newadd-fild1 newadd-fild2" />
                            </div>
                        </div>
                        <div class="newadd-row2">
                            <div class="newadd-bar1">
                                State
                            </div>
                            <div class="newadd-bar2">
                                <input name="State" type="text" id="state" placeholder="State" class="newadd-fild1 newadd-fild2" />
                            </div>
                        </div>
                        <div class="newadd-row2">
                            <div class="newadd-bar1">
                               Country
                            </div>
                            <div class="newadd-bar2">
                                <input name="" type="text" id="country" placeholder="Country" class="newadd-fild1 newadd-fild2" />
                            </div>
                        </div>
                        <div class="newadd-row2">
                            <div class="newadd-bar1">
                                Zip / Postal Code
                            </div>
                            <div class="newadd-bar2">
                                <input name="Zip / Postal Code" id="postcode" type="text" placeholder="Zip / Postal Code" class="newadd-fild1 newadd-fild2" />
                            </div>
                        </div>
                                
                      
                    </form>
                    <div class="newadd-row2">
                            <div class="newadd-bar2">
                                <button name="submit" onClick={(event)=>{this.add(event)}}  class="newadd-btn1" >Submit</button>
                            </div>
                        </div>
            	</div>
                
            </div>
            
            <div class="conten-bar2 sidbar-wrapp">
                
                <div class="sidbar-row3">
                    <h2>Payment Details</h2>
                    <div class="sidbar-bar3">
                    	<div class="payment-lt">MRP Total</div>
                        <div class="payment-rt">{this.props.total}</div>
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
                        <div class="payment-rt"><span>{this.props.bill}</span></div>
                    </div>
                    
                    <div class="savings">TOTAL SAVINGS RS.53.00</div>
                    
                    <div class="payment-row1">
                        <div class="payment-bar1">
                            <h6>TOTAL AMOUNT</h6><br />
    <h5><span>Rs.</span>{this.props.bill}</h5>
                        </div>
                        <button  onClick={()=>{this.placeOrder()}} class="sidbar-btn2">PROCEED TO PAYMENT</button>
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
function mapStateToProps(state){
    var items=JSON.parse(state.cart);
    var orders=[];
    
    items.map(item=>{
      var  order={
            medicineId:item.id,
            quantity:1
        }
        orders.push(order)
    })
    console.log(state)
        return {
            items:orders,
            total:JSON.parse(localStorage.getItem('bill')).total ||0,
            bill:JSON.parse(localStorage.getItem('bill')).bill ||0
        }
      
    }
    
    function mapDispatchToStates(dispatch){
        return{
       
      
        }
      }
    export default withRouter(connect(mapStateToProps,mapDispatchToStates)(NewAddress));
    

