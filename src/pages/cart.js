import React, { Component } from 'react';
import productThumb1 from '../images/product-thumb1.png';
import orderdot1 from '../images/order-dot1.png';
import KnowerWrapp from '../include/knower-wrapp';
import sample from '../images/sample.jpg'
import Footer from '../include/footer';
import Header from '../include/header';
import OwlCarousel from 'react-owl-carousel';
import LinkerWrapp from '../include/linker-wrapp';
import JudgerWrapp from '../include/judger-wrapp';
import CallusWrapp from '../include/callus-wrapp';
import ImpoerWrapp from '../include/impoer-wrapp';
import { withRouter,Link,NavLink } from 'react-router-dom';
import {connect} from 'react-redux';
import {isAuth} from '../function/auth';
import 'antd/dist/antd.css';
import { notification } from 'antd';
import Config from '../Config';
import { Select } from 'antd';

const { Option } = Select;

class Cart extends Component {
    state={
        message:"",
        error:"",
        orders:this.props.items,
        options:{
            items: 1,
            margin: 0,
            loop: true,
            autoplay: true,
            autoplayTimeout: 7000,
            smartSpeed: 1500,
            nav: true,
            dots:false,
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 1
                },
                601: {
                    items: 1
                },
                768: {
                    items: 1
                },
                992: {
                    items: 1
                },
                1200: {
                    items: 1
                }
            }
        }
    }
    componentDidMount(){
        this.countBill()
    }
    componentDidUpdate(){
        this.countBill()
    }
//     total=(e,rs,id)=>{
     
// var qnt=parseInt(e.target.value);
// var amount=qnt*parseInt(rs);
// e.target.parentNode.nextSibling.nextSibling.childNodes[2].innerHTML=`${amount}`;
// this.state.orders.map(order=>{
//     var item=order;
//     if(order.medicineId===id){
//        item.quantity=qnt
//     }
//     return item
// })
// this.countBill();
//     }

countBill=()=>{
    var total=0;
    this.props.cart.map(item=>{
        total=total+parseInt(item.total)
    })
//     var products=document.getElementsByClassName("subtotal");
// for(var i=0;i<products.length;i++){
//    total=total+ parseInt(products[i].innerHTML);
// }
document.getElementById("totalBill").innerHTML=total;
var delivery=parseInt(document.getElementById("delivery").innerHTML);
var discount=parseInt(document.getElementById("discount1").innerHTML);
var bill=total+delivery-discount
document.getElementById("bill1").innerHTML=bill;
document.getElementById("bill2").innerHTML=bill;
var data={
    total:total,
    bill:bill
}
localStorage.setItem('bill',JSON.stringify(data))
}
onFileChange = event => { 

    const formData = new FormData(); 
 
    formData.append( 
      "file", 
      event.target.files[0], 
   
    ); 
    console.log(formData); 
  }; 
   

    remove=(id)=>{
        const args = {
            message: "Removed From Cart",
           duration: 3,
           style:{
            zIndex:1000
        }
          };
        
           
              notification.error(args);
              this.props.remove(id)
              this.countBill();
    }
    dropdown=(no)=>{
        var no=parseInt(no);
        let items = []; 
      for(var i=1;i<=no;i++){
    
          items.push(<Option value={i}>{i}</Option> )
        }
    return items;
    }
    handleChange=(qnt,e,id)=> {
      
    var selections=this.props.cart.map(selected=>{
        // var item=selected;
        if(selected.id===id){
       
            selected.quantity=qnt;
            var total=parseInt(qnt)*parseInt(selected.MRP)
            selected.total=total
            this.props.addCart(selected)
        }
        return selected
    //    selections.push(item)
    })
    localStorage.setItem('cart',JSON.stringify(selections))
    //   this.setState({selections:selections})
    
    this.countBill();
    this.props.history.push('cart');
      }
    
      changeStrength=(strength,id)=>{
  
        var selections=this.props.cart.map(selected=>{
      
            if(selected.id===id){
           
var totalPriceToRetailer=selected.totalPriceToRetailer;
var MRP=selected.MRP;
selected.strenghts.map(item=>{
    if(item.strength===strength){
    totalPriceToRetailer=item.totalPriceToRetailer;
    MRP=item.MRP
    }
})
var total=parseInt(selected.quantity) *parseInt(MRP);
selected.strength=strength;
selected.totalPriceToRetailer=totalPriceToRetailer;
selected.MRP=MRP;
selected.total=total;
this.props.addCart(selected)      
            }
            return selected
      
        })
        
           
           localStorage.setItem('cart',JSON.stringify(selections))
    //   this.setState({selections:selections})
    this.countBill();
    this.props.history.push('cart');
    }



  variant=(items,id)=>{
     
      if(items.length!==0){
var items=items.map(item=>{
return(
<button className="product-btn2" key={item.strength} onClick={()=>this.changeStrength(item.strength,id)}>{item.strength}</button> 
)               
})
  }
return items
  }

      showMedicines=()=>{
       
        if(this.props.cart.length!==0){
            console.log(this.props.cart)
         var medicines= this.props.cart.map(medicine=>{
        
            return(
                   
                 
                	<div className="product-row2" key={medicine.id}>
                  
                 
                    	<div className="product-bar1">
                        <Link to={Config.BASE_URL+`products-inner/${medicine.id}`}>
                        	<div className="slide-post owl-carousel">
                            <OwlCarousel margin={3} items={1} {...this.state.options} > 
                                <div>
                        			<div className="product-thumb"><img src={productThumb1} alt="product thumb1"/></div>
                                </div>
                                <div>
                        			<div className="product-thumb"><img src={productThumb1} alt="product thumb1"/></div>
                                </div>
                                {medicine.image1 && (<div>
                            <div className="product-thumb"><img src={medicine.image1} alt="product thumb2"/></div>
                        </div>)}
                        {medicine.image2 && (<div>
                            <div className="product-thumb"><img src={medicine.image2} alt="product thumb2"/></div>
                        </div>)}
                        {medicine.image3 && (<div>
                            <div className="product-thumb"><img src={medicine.image3} alt="product thumb2"/></div>
                        </div>)}
                        {medicine.image4 && (<div>
                            <div className="product-thumb"><img src={medicine.image4} alt="product thumb2"/></div>
                        </div>)}
                        {medicine.image5 && (<div>
                            <div className="product-thumb"><img src={medicine.image5} alt="product thumb2"/></div>
                        </div>)}
                        {medicine.image6 && (<div>
                            <div className="product-thumb"><img src={medicine.image6} alt="product thumb2"/></div>
                        </div>)}
                                </OwlCarousel>
                            </div>
                            </Link>
                        </div>
                         
                        <div className="product-bar2">
                        <Link to={Config.BASE_URL+`products-inner/${medicine.id}`}>    <h2>{medicine.genericName}</h2></Link>
                        <h3>{medicine.tabletPack} Units</h3>
                            <h3>Other Variants</h3>
                            <div className="product-varian">
                            {this.variant(medicine.strenghts,medicine.id)}
                            	</div>
                            <h4>Recommended retail price</h4>
                        <h5><span>&#8377;</span>{medicine.MRP}</h5>
                            <div className="product-bar3">
                     
                       <Select defaultValue={medicine.quantity} value={medicine.quantity}  style={{ width: 50,margin:"0 10px 0 0" }} className="quantity" onChange={(event)=>{this.handleChange(event,event,medicine.id)}}>
     {this.dropdown(medicine.orderQuantityLimit)}
     </Select>
                    
                                <button className="product-btn1" onClick={()=>{this.remove(medicine.id)}}>Remove CART</button>
                                <div className="product-bar4">
                                	<h6>TOTAL AMOUNT</h6><br />
                        <h5 className="subtotal">{medicine.total}</h5>
                                </div>
                            </div>
                     
                        </div>
                   
                    </div>
                    
                )
            })
            return medicines;
        }
    }

  render() {

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
                <li>Your Cart</li>
            </ul>
        </div>
    </div>
</section>

<section className="inner-head">
	<div className="margin">
    	<h2>Your Cart</h2>
    </div>
</section>

<section className="conten-wrapp">
	<div className="margin">
    	
		<div className="conten-row1">
			<div className="conten-bar1 product-wrapp">
            
				<div className="product-row1">
                    {this.showMedicines()}
				  </div>
                
                <div className="summary-row2">
					<div className="summary-row3 border1">
						<div className="summary-bar22"><img src={orderdot1} alt="order icon1"/></div>
						<div className="summary-bar33"><h5><span>Prescriptions Uploded By You:</span></h5></div>
							<div className="sample-row1">
								<div className="sample"><img src={sample}/></div>
								<div className="sample"><img src={sample}/></div>
								<div className="sample"><img src={sample}/></div>
								<div className="sample"><span className="hiddenFileInput"><input type="file" name="theFile" onChange={(event)=>{this.onFileChange(event)}}/></span></div>
							</div>
						</div>
					</div>
                
            </div>
            
            <div className="conten-bar2 sidbar-wrapp">
				<div className="sidbar-row2">
                    <h2>Apply Promocode</h2>
                    <div className="sidbar-bar2">
                        <form action="xyz" method="get">
                            <div className="checkbox3">
                                <input type="checkbox" name="checkboxG1" id="checkboxG1" className="css-checkbox"/>
                                <label for="checkboxG1" className="css-label"><span>Get flat discount! Vouchers applicable in
payment options.</span></label>
                            </div>
                            <div className="checkbox3">
                                <input type="checkbox" name="checkboxG2" id="checkboxG2" className="css-checkbox"/>
                                <label for="checkboxG2" className="css-label"><span>Get flat discount! Vouchers applicable in
payment options.</span></label>
                            </div>
						</form>
                    </div>
                </div>
                
                <div className="sidbar-row3">
                    <h2>Payment Details</h2>
                    <div className="sidbar-bar3">
                    	<div className="payment-lt">MRP Total</div>
                        <div className="payment-rt" id="totalBill"></div>
                    </div>
                    <div className="sidbar-bar3">
                    	<div className="payment-lt">+ Delivery Charges</div>
                        <div className="payment-rt" id="delivery">25.00</div>
                    </div>
                    <div className="sidbar-bar3">
                    	<div className="payment-lt">- DawaBag Discount</div>
                        <div className="payment-rt" id="discount1">53.00</div>
                    </div>
                    <div className="sidbar-bar3">
                    	<div className="payment-lt"><span>Total Amount *</span></div>
                        <div className="payment-rt" id="bill1"></div>
                    </div>
                    
                    <div className="savings" id="discount2">Savings 53.00</div>
                    
                    <div className="payment-row1">
                        <div className="payment-bar1">
                            <h6>TOTAL AMOUNT</h6><br />
                            <h5 id="bill2"></h5>
                        </div>
                        <NavLink to={Config.BASE_URL+"address"} className="sidbar-btn1">Proceed</NavLink>
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

items.map(item=>{
  var  order={
        medicineId:item.id,
        quantity:1
    }
    orders.push(order)
})
    return {
message:state.message,
        cart:JSON.parse(localStorage.getItem('cart')||'[]'),
        items:orders
    }
  
}
  function mapDispatchToStates(dispatch){
    return{
   
        addCart:(product)=>{

      
            
             if(isAuth()){
console.log(product)
            const data={
                apiVersion:Config.APIVERSION,
                token:"",
                userId:isAuth().userId,
                medicineId:product.id,
                medicineStrengthId:product.medicineStrengthId,
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
         
       
    },     
    
        remove:(id)=>{

            dispatch({type:"remove",payload:{id:id,message:"Removed From Cart"}})
          
            if(isAuth()){
                	const data={
            apiVersion:Config.APIVERSION,
        	imei:Config.IMEI,
            token:"",
            userId:isAuth().userId,
            id:id
        	}
                return fetch(Config.API+'/remove_item_from_cart',{
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
export default withRouter(connect(mapStateToProps,mapDispatchToStates)(Cart));