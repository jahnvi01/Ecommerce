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
import { withRouter,NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import {isAuth, removeLocalStorage} from '../function/auth';
import ShowAlert from '../function/alert';
import { Radio } from 'antd';
import Config from '../Config';
class Address extends Component {
  
    state={
        message:"",
        error:"",
        addresses:[],
        value:0
    }
    componentWillMount(){
    
        const data={
            apiVersion:Config.APIVERSION,
            userId:isAuth().userId,
            token:"",
            
         }
       fetch(Config.API+'/user_locations',{
           method: "post",
           headers: {
             'Accept': 'application/json, text/plain, */*',
             'Content-Type': 'application/json'
           },body:JSON.stringify(data)
         })
         .then(res=>res.json())

         .then(res=>{this.setState({addresses:res.data.user_address||[],error:res.error||""})
         console.log(this.state)       })


         fetch(Config.API+'/getUserPrescriptions',{
            method: "post",
             headers: {
              'Accept': 'application/json, text/plain, */*',
              'Content-Type': 'application/json'
            },body:JSON.stringify(data)
          })
          .then(res=>res.json())
          .then(res=>{
              if(res.result.message==="Service completed."){
            if(res.result.prescriptions.length!==0){
                var prescriptions=[]
                res.result.prescriptions.map(prescription=>{
                    prescriptions.push({id:prescription.id})
                })
                console.log(prescriptions)
                this.setState({prescriptions:prescriptions})
            }
           
         
          }
        }
            )
 
   }

  onChange = e => {
    console.log( e.target.value);
    this.setState({
      value: e.target.value,
    });
  };

 
 
   showAddress=()=>{
       if(this.state.addresses.length!==0){
       var address=this.state.addresses.map(address=>{
return(
    <div class="adress-row2" key={address.id}>
    <div class="adress-bar1">  <Radio value={address.id}></Radio></div>
    <div class="adress-bar2">
        <h2>Home</h2>
        
<h3>{address.u_fname} {address.u_lname}</h3>
<p>{address.addressLine1}, {address.addressLine2},{address.addressLine3} <span>{address.city}- {address.pincode}, {address.state}</span> {address.country}</p>
        <h4><NavLink to={Config.BASE_URL+"#"}>MODIFY</NavLink></h4>
    </div>
</div>
)
       })
    return address;
    }
   }

   placeOrder=()=>{

    if(this.state.value!==0){
console.log(this.state.value)
    
    const data={
        apiVersion:Config.APIVERSION,
        imei:Config.IMEI,
        token:"",
        userId:isAuth().userId,
        userAddressId:this.state.value,
        total:this.props.total,
        prescriptions:this.state.prescriptions,
gst:30,
discount:3,
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
              .then(res=>{this.setState({message:res.result.message})
            if(res.result.message){
                removeLocalStorage('cart');
                removeLocalStorage('bill');
                this.setState({message:"Order placed"})
            }


            }) 
            }
            else{
             this.setState({error:"Select Address First"})
            }
   }

  render() {
    return (
<div>

<Header />
	<LinkerWrapp />
    <section class="banner-wrapp inner-wrapp">
	<div class="margin">
    <ShowAlert error={this.state.error} message={this.state.message} />
    	<div class="inner-row1">
        	<ul class="inner-bar1">
            	<li><NavLink to={Config.BASE_URL}>Home</NavLink></li>
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

                <Radio.Group onChange={this.onChange} value={this.state.value}>
      



                {this.showAddress()}
                </Radio.Group>        
                    <div class="adress-row2">
                        <div class="adress-bar1"><img src={addressIcon2} alt="address icon2"/></div>
                        <div class="adress-bar2">
                            <h3><NavLink to={Config.BASE_URL+"new-address"}>Add New Address</NavLink></h3>
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
    var items=JSON.parse(localStorage.getItem('cart')||'[]');
    var orders=[];
    if(items.length!==0){
    items.map(item=>{
      var  order={
            medicineId:item.id,
            quantity:1
        }
        orders.push(order)
    })
    }
    
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
export default withRouter(connect(mapStateToProps,mapDispatchToStates)(Address));

