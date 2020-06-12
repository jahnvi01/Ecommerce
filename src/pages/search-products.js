import React, { Component } from 'react';
import { Link,NavLink } from 'react-router-dom'
import KnowerWrapp from '../include/knower-wrapp';
import Footer from '../include/footer';
import Header from '../include/header';
import LinkerWrapp from '../include/linker-wrapp';
import JudgerWrapp from '../include/judger-wrapp';
import CallusWrapp from '../include/callus-wrapp';
import ImpoerWrapp from '../include/impoer-wrapp';
import product1 from '../images/product-thumb1.png'
import product2 from '../images/product-thumb2.png'
import valid1 from '../images/valid-icon11.png'
import valid2 from '../images/valid-icon22.png'
import valid3 from '../images/valid-icon33.png'
import valid4 from '../images/valid-icon44.png'
import OwlCarousel from 'react-owl-carousel';
import {connect} from 'react-redux';
import { isAuth } from '../function/auth';
import 'antd/dist/antd.css';
import { notification } from 'antd';
import Config from '../Config';
class SearchProducts extends Component {
state={
    message:"",
    error:"",
    medicines:[],

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

  componentWillMount(){
    var name=this.props.match.params.name; 
    console.log(name)
     const data={
         apiVersion:"1.0",
         medicineName:this.props.match.params.name,
      token:""
      }
      fetch('http://projects-demo.tk/dawabag/webservices/web/search_medicines',{
		method: "post",
		headers: {
		  'Accept': 'application/json, text/plain, */*',
		  'Content-Type': 'application/json'
		},body:JSON.stringify({
            apiVersion:"1.0",
            medicineName:this.props.match.params.name,
         token:""
         })
	  })
	  .then(res=>res.json())
	  .then(res=>this.setState({medicines:res.data.medicines,error:res.error||""}))
  }

  addCart=(medicine)=>{
    const args = {
        message: "Added To Cart",
      style:{
          zIndex:1000
      }
      };
    
       
          notification.success(args);
    this.props.addCart(medicine) 
}


  searchProducts=()=>{
    var name=this.props.match.params.name; 
  
    const data={
        apiVersion:"1.0",
        medicineName:this.props.match.params.name,
     token:""
     }
      fetch('http://projects-demo.tk/dawabag/webservices/web/search_medicines',{
       method: "post",
       headers: {
         'Accept': 'application/json, text/plain, */*',
         'Content-Type': 'application/json'
       },body:JSON.stringify({
        apiVersion:"1.0",
        medicineName:this.props.match.params.name,
     token:""
     })
     })
     .then(res=>res.json())
     .then(res=>this.setState({medicines:res.data.medicines,error:res.error||""}))     
  }
  shhowMedicines=()=>{
      if(this.state.medicines.length!==0){
       var medicines=   this.state.medicines.map(medicine=>{
              return(
                <div className="product-row2" key={medicine.id}>
                <Link to={Config.BASE_URL+`products-inner/${medicine.id}`}>
                <div className="product-bar1">
                    <div className="slide-post owl-carousel">
                    <OwlCarousel margin={3} items={1} {...this.state.options} > 
                    <div>
                            <div className="product-thumb"><img src={product1} alt="product thumb2"/></div>
                        </div>
                        <div>
                            <div className="product-thumb"><img src={product2} alt="product thumb2"/></div>
                        </div>

                    {medicine.image1 && (<div>
                            <div className="product-thumb"><img src={medicine.image1} alt="product thumb2"/></div>
                        </div>)}
                        {medicine.image2 && (<div>
                            <div className="product-thumb"><img src={medicine.image2||product2} alt="product thumb2"/></div>
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
                </div>
                </Link>
                <div className="product-bar2">
                    <h2>{medicine.genericName}</h2>
                    <h3>{medicine.unitInBox} Units in box</h3>
                    <h3>Other Variants</h3>
                    <div className="product-varian">
                        <NavLink to={Config.BASE_URL+"#"} className="product-btn2">40 grams</NavLink> 
                        <NavLink to={Config.BASE_URL+"#"} className="product-btn2">80 grams</NavLink> 
                        <NavLink to={Config.BASE_URL+"#"} className="product-btn2">100 grams</NavLink> 
                    </div>
                    <h4>Recommended retail price</h4>
                    <h5 className="underline"><span>&#8377;</span>{medicine.totalPriceToRetailer}</h5>
                        
                    <h5><span>&#8377;</span>{medicine.totalCostPurchase}</h5>
                    <div className="product-bar3">
                        <div className="product-bar44">QTY :    1</div>
                        <button onClick={()=>{this.addCart(medicine)}} className="product-btn1">ADD TO CART</button>
                        <div className="product-bar4">
                            <h6>TOTAL AMOUNT</h6><br />
              <h5><span>&#8377;</span>{1*medicine.totalCostPurchase}</h5>
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

//  this.searchProducts()
    return (
<div>

<Header />
	<LinkerWrapp />
    <section className="banner-wrapp inner-wrapp">
	<div className="margin">
    	<div className="inner-row1">
        	<ul className="inner-bar1">
            	<li><NavLink to={Config.BASE_URL}>Home</NavLink> </li>
                <li>/</li>
                <li>Medicines</li>
            </ul>
        </div>
    </div>
</section>

<section className="inner-head">
	<div className="margin">
    	<h2>Medicines</h2>
    </div>
</section>

<section className="conten-wrapp">
	<div className="margin">
    	
		<div className="conten-row1">
			<div className="conten-bar1 product-wrapp">
            
				<div className="product-row1">
				    
                	{/* <div className="product-row2">
                	    <a href="/products-inner">
                    	<div className="product-bar1">
                        	<div className="slide-post owl-carousel">
                            <OwlCarousel margin={3} items={1} {...this.state.options} > 
                                <div>
                        			<div className="product-thumb"><img src={product1} alt="product thumb1"/></div>
                                </div>
                                <div>
                        			<div className="product-thumb"><img src={product1} alt="product thumb1"/></div>
                                </div>
                                </OwlCarousel>
                            </div>
                        </div>
                        <div className="product-bar2">
                        	<h2>Even light drinkers at risk of cancer</h2>
                            <h3><strong>company name</strong></h3>
                            <h3>10 Tablet(s) in Strip</h3>
                            <div className="product-varian">
                            	<NavLink to={Config.BASE_URL+"#"} className="product-btn2">10 mg</NavLink> 
                                <NavLink to={Config.BASE_URL+"#"} className="product-btn2">20 mg</NavLink> 
                                <NavLink to={Config.BASE_URL+"#"} className="product-btn2">30 mg</NavLink> 
							</div>
                            <h4>Recommended retail price</h4>
                            <h5 className="underline"><span>&#8377;</span>20.96</h5>
                            <h5><span>&#8377;</span>17.96</h5>
                            <div className="product-bar3">
                            	<div className="product-bar44">QTY :    1</div>
                                <NavLink to={Config.BASE_URL+"#"} className="product-btn1">ADD TO CART</NavLink> 
                                <div className="product-bar4">
                                	<h6>TOTAL AMOUNT</h6><br />
                            		<h5><span>&#8377;</span>17.96</h5>
                                </div>
                            </div>
                        </div>
                        </NavLink> 
                    </div>
                    
                    <div className="product-row2">
                        <a href="/products-inner">
                    	<div className="product-bar1">
                        	<div className="slide-post owl-carousel">
                            <OwlCarousel margin={3} items={1} {...this.state.options} > 
                                <div>
                        			<div className="product-thumb"><img src={product2} alt="product thumb2"/></div>
                                </div>
                                <div>
                        			<div className="product-thumb"><img src={product2} alt="product thumb2"/></div>
                                </div>
                                </OwlCarousel>
                            </div>
                        </div>
                        <div className="product-bar2">
                        	<h2>AS-IT-IS Nutrition Whey Protein <span>Concentrate</span></h2>
                            <h3>10 Sachets</h3>
                            <h3>Other Variants</h3>
                            <div className="product-varian">
                            	<NavLink to={Config.BASE_URL+"#"} className="product-btn2">40 grams</NavLink> 
                                <NavLink to={Config.BASE_URL+"#"} className="product-btn2">80 grams</NavLink> 
                                <NavLink to={Config.BASE_URL+"#"} className="product-btn2">100 grams</NavLink> 
							</div>
                            <h4>Recommended retail price</h4>
                            <h5><span>&#8377;</span>17.96</h5>
                            <div className="product-bar3">
                            	<div className="product-bar44">QTY :    1</div>
                                <NavLink to={Config.BASE_URL+"#"} className="product-btn1">ADD TO CART</NavLink> 
                                <div className="product-bar4">
                                	<h6>TOTAL AMOUNT</h6><br />
                            		<h5><span>&#8377;</span>17.96</h5>
                                </div>
                            </div>
                        </div>
                        </NavLink> 
                    </div> */}
                    {this.shhowMedicines()}
                    
                </div>
                
            </div>
            
            <div className="conten-bar2 sidbar-wrapp">
				<div className="sidbar-row1">
                	<h2>What is a valid prescription?</h2>
                    <p>A valid prescription contains:</p>
                    <div className="sidbar-bar1">
                    	<div className="sidbar-valid">
                        	<div className="sidbar-icon"><img src={valid1} alt="valid icon1"/></div>
                            <div className="sidbar-text">Doctor Details</div>
                        </div>
                        <div className="sidbar-valid">
                        	<div className="sidbar-icon"><img src={valid2} alt="valid icon2"/></div>
                            <div className="sidbar-text">Date of Prescription</div>
                        </div>
                        <div className="sidbar-valid">
                        	<div className="sidbar-icon"><img src={valid3} alt="valid icon3"/></div>
                            <div className="sidbar-text">Patient Details</div>
                        </div>
                        <div className="sidbar-valid">
                        	<div className="sidbar-icon"><img src={valid4} alt="valid icon4"/></div>
                            <div className="sidbar-text">Dosage Details</div>
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
    
            cart:state.cart,
        }
      
    }
      function mapDispatchToStates(dispatch){
        return{
       
          addCart:(product)=>{
            dispatch({type:"add",payload:{product,message:"Added To Cart"}})
            if(isAuth()){

        	const data={
                apiVersion:"1.0",
                token:"",
                userId:isAuth().userId,
                medicineId:product.id,
                quantity:1,
                imei:""
        	}
        	// return fetch('http://projects-demo.tk/dawabag/webservices/web/add_item_in_cart',{
        	//   method: "post",
         	//   headers: {
        	// 	'Accept': 'application/json, text/plain, */*',
        	// 	'Content-Type': 'application/json'
        	//   },body:JSON.stringify(data)
        	// })
        	// .then(res=>res.json())
        	// .then(res=>console.log(res)) 
          }
        }
    }
      }
    
      export default connect(mapStateToProps,mapDispatchToStates)(SearchProducts);


