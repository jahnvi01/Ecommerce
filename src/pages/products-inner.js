import React, { Component } from 'react';
import linkerIcon1 from '../images/linker-icon1.png';
import linkerIcon2 from '../images/linker-icon2.png';
import linkerIcon3 from '../images/linker-icon3.png';
import linkerIcon4 from '../images/linker-icon4.png';
import KnowerWrapp from '../include/knower-wrapp';
import delivery from '../images/delivery-icon1.png';
import Footer from '../include/footer';
import Header from '../include/header';
import product1 from '../images/product-thumb1.png';
import product2 from '../images/product-thumb2.png';
import OwlCarousel from 'react-owl-carousel';
import LinkerWrapp from '../include/linker-wrapp';
import JudgerWrapp from '../include/judger-wrapp';
import CallusWrapp from '../include/callus-wrapp';
import ImpoerWrapp from '../include/impoer-wrapp';
import ShowAlert from '../function/alert';
import {connect} from 'react-redux';
import { isAuth } from '../function/auth';
import 'antd/dist/antd.css';
import Config from '../Config';
import { NavLink } from 'react-router-dom';
import { notification } from 'antd';
import { Select } from 'antd';

const { Option } = Select;
class ProductsInner extends Component {
    state={
        message:"",
        error:"",
        product:"",
        selection:"",
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

    addCart=(product)=>{
        const args = {
            message: "Added To Cart",
          style:{
              zIndex:1000
          }
          };
        
           
              notification.success(args);
              var flag=0;

              if(this.props.cart.length!==0){
                  console.log(this.props.cart.length)
                  this.props.cart.map(item=>{
                      if(item.id===product.id){
                          flag=1;
                      }
                    })
                    if(flag===0){
                        this.props.addCart(product)
                    }
              }
              else{
                  this.props.addCart(product)  
              }
    }
    changeStrength=(strength)=>{
  
   var selection=this.state.selection;        
var totalPriceToRetailer=this.state.selection.totalPriceToRetailer;
var MRP=this.state.selection.MRP;
this.state.selection.strenghts.map(item=>{
    if(item.strength===strength){
    selection.totalPriceToRetailer=item.totalPriceToRetailer;
    selection.MRP=item.MRP
    }
})
var total=parseInt(selection.quantity) *parseInt(selection.MRP);
selection.strength=strength;
selection.total=total;
        
           
      
     
           this.setState({selection:selection})
        
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

    showProduct=()=>{
        if(this.state.selection){
            console.log(this.state.product)
            return(
                <div className="conten-bar1 product-wrapp">
                      
                    <div className="product-row1">
                	<div className="product-row2">
                    	<div className="product-bar1">
                        	<div className="slide-post owl-carousel">
                            <OwlCarousel margin={3} items={1} {...this.state.options} > 	
                            <div>
                            <div className="product-thumb"><img src={product1} alt="product thumb2"/></div>
                        </div>
                        <div>
                            <div className="product-thumb"><img src={product2} alt="product thumb2"/></div>
                        </div>

                    {this.state.selection.image1 && (<div>
                            <div className="product-thumb"><img src={this.state.selection.image1} alt="product thumb2"/></div>
                        </div>)}
                        {this.state.selection.image2 && (<div>
                            <div className="product-thumb"><img src={this.state.selection.image2} alt="product thumb2"/></div>
                        </div>)}
                        {this.state.selection.image3 && (<div>
                            <div className="product-thumb"><img src={this.state.selection.image3} alt="product thumb2"/></div>
                        </div>)}
                        {this.state.selection.image4 && (
                        <div>
                            <div className="product-thumb"><img src={this.state.selection.image4} alt="product thumb2"/></div>
                        </div>
                        )}
                        {this.state.selection.image5 && (<div>
                            <div className="product-thumb"><img src={this.state.selection.image5} alt="product thumb2"/></div>
                        </div>)}
                        {this.state.selection.image6 && (<div>
                            <div className="product-thumb"><img src={this.state.selection.image6} alt="product thumb2"/></div>
                        </div>)}
                                </OwlCarousel>
                            </div>
                        </div>
                        <div className="product-bar2">
                        <h2>{this.state.selection.genericName}</h2>
                            <h3><strong>company name</strong></h3>
                            <h3>{this.state.selection.tabletPack} Units in box</h3>
                            <h3>Variants</h3>
                            <div className="product-varian">
                            {this.variant(this.state.selection.strenghts,this.state.selection.id)}
                            	</div>
                            <h4>Recommended retail price</h4>
                        <h5 className="underline"><span>&#8377;</span>{this.state.selection.PriceToRetailer}</h5>
                        <h5><span>&#8377;</span>{this.state.selection.MRP}</h5>
                            <div className="product-bar3">
                            <Select defaultValue="1" style={{ width: 50,margin:"0 10px 0 0" }} className="quantity" onChange={(event)=>{this.handleChange(event)}}>
     {this.dropdown(this.state.selection.orderQuantityLimit)}
     </Select>
                                <button onClick={()=>{this.addCart(this.state.selection)}} className="product-btn1">ADD TO CART</button>
                                <div className="product-bar4">
                                	<h6>TOTAL AMOUNT</h6><br />
                            		<h5><span>&#8377;</span>{this.state.selection.total}</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
                            <div className="productin-row">
                            <h2>Disclaimer</h2>
            
            <p>The information provided herein is accurate, updated and complete as per the best practices of the Company. Please note that this information should not be treated as a replacement for physical medical consultation or advice. We do not guarantee the accuracy and the completeness of the information so provided. The information provided herein is accurate, updated and complete as per the best practices of the Company. Please note that this information should not be treated as a replacement for physical medical consultation or advice. We do not guarantee the accuracy and the completeness of the information so provided.</p>
               <p>The absence of any information and/or warning to any drug shall not be considered and assumed as an implied assurance of the Company. We do not take any responsibility for the consequences arising out of the aforementioned information and strongly recommend you for a physical consultation in case of any</p>
                       </div>
                        
                    </div>
                )
        }
    }
  
  componentWillMount(){
    var id=this.props.match.params.id; 
    const post={
        apiVersion:Config.APIVERSION,
        medicineId:id,
        token:""

      }
    fetch(Config.API+'/medicine_detail',{
        method: "post",
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        },body:JSON.stringify(post)
      })
      .then(res=>res.json())
      //.then(res=>console.log(res))
      .then(res=>{this.setState({product:res.data.medicine[0]||"",error:res.error||""});
      var medicine=res.data.medicine[0];
      var data={
        id:medicine.id,
        image1:medicine.image1,
        image2:medicine.image2,
        image3:medicine.image3,
        image4:medicine.image4,
        image5:medicine.image5,
        image6:medicine.image6,
        orderQuantityLimit:medicine.orderQuantityLimit,
        strenghts:medicine.strenghts,
        genericName:medicine.genericName,
        tabletPack:medicine.tabletPack,
        strength:medicine.strenghts[0],
        totalPriceToRetailer:medicine.strenghts[0].totalPriceToRetailer,
        MRP:medicine.strenghts[0].MRP,
        quantity:1,
        total:medicine.strenghts[0].MRP
      }
  this.setState({selection:data})
     
        })
  }



  dropdown=(no)=>{
    var no=parseInt(no);
    let items = []; 
  for(var i=1;i<=no;i++){

      items.push(<Option value={i}>{i}</Option> )
    }
return items;
}
handleChange=(qnt)=> {
  
var selection=this.state.selection;
selection.quantity=qnt;
var total=parseInt(qnt)*parseInt(selection.MRP);
selection.total=total;
this.setState({selection:selection})

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
            	<li><NavLink to={Config.BASE_URL+"#"}>Home</NavLink></li>
                <li>/</li>
                <li><NavLink to={Config.BASE_URL+"#"}>Medicines</NavLink></li>
                <li>/</li>
                <li>{this.state.product.genericName}</li>
            </ul>
        </div>
    </div>
</section>

<section className="inner-head">
	<div className="margin">
    	<h2>{this.state.product.genericName}</h2>
    </div>
</section>

<section className="conten-wrapp">
	<div className="margin">
    	
		<div className="conten-row1">
		
            
				{this.showProduct()}
                
      
                
       
            
            <div className="conten-bar2 sidbar-wrapp">
				<div className="sidbar-row4">
                    <h2>Share This</h2>
                    <div className="sidbar-box1">
                        <NavLink to={Config.BASE_URL+"#"}><img src={linkerIcon1} alt="linker icon1" /></NavLink>
                        <NavLink to={Config.BASE_URL+"#"}><img src={linkerIcon2} alt="linker icon2" /></NavLink>
                        <NavLink to={Config.BASE_URL+"#"}><img src={linkerIcon3} alt="linker icon3" /></NavLink>
                        <NavLink to={Config.BASE_URL+"#"}><img src={linkerIcon4} alt="linker icon4" /></NavLink>
                	</div>
                    <h2>Check Delivery Time</h2>
                    <div className="sidbar-bar4">
                    	<form action="" method="get">
                        	<input name="Enter Pincode" type="text" placeholder="Enter Pincode" className="form-fild1" />
                            <input name="check" type="submit" value="check" className="form-btn1" />
                        </form>
                    </div>
                    <h2>Please add item</h2>
                    <NavLink to={Config.BASE_URL+'cart'} className="savings">VIEW CART</NavLink>
                    <div className="sidbar-bar4">
                    	<div className="sidbar-bar5"><img src={delivery} alt="delivery icon"/></div>
                        <div className="sidbar-bar6">
                        	<p>Now delivering Healthcare Products in your <span>city at upto 60% OFF</span></p>
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
function mapStateToProps(state){
    console.log(state.cart)
        return {
    
            cart:JSON.parse(state.cart),
        }
      
    }
      function mapDispatchToStates(dispatch){
        return{
       
          addCart:(product)=>{
           
                dispatch({type:"add",payload:{product,message:"Added To Cart"}})
                if(isAuth()){
    
                const data={
                    apiVersion:Config.APIVERSION,
                    token:"",
                    userId:isAuth().userId,
                    medicineId:product.id,
                    quantity:1,
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
    
      export default connect(mapStateToProps,mapDispatchToStates)(ProductsInner);


