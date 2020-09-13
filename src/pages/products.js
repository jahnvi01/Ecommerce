import React, { Component } from 'react';
import { Link ,withRouter} from 'react-router-dom'
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
import ShowAlert from '../function/alert';
import {connect} from 'react-redux';
import { isAuth } from '../function/auth';
import 'antd/dist/antd.css';

import { notification } from 'antd';
import { NavLink } from 'react-router-dom';
import Config from '../Config';
import { Select } from 'antd';

const { Option } = Select;


class Products extends Component {
state={
    message:"",
    error:"",
    medicines:[],
selections:[],
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
dropdown=(no)=>{
    var no=parseInt(no);
    let items = []; 
  for(var i=1;i<=no;i++){

      items.push(<Option value={i}>{i}</Option> )
    }
return items;
}
handleChange=(qnt,e,id)=> {
  
var selections=this.state.selections.map(selected=>{
    // var item=selected;
    if(selected.id===id){
   
        selected.quantity=qnt;
        var total=parseInt(qnt)*parseInt(selected.MRP)
        selected.total=total
       console.log(qnt)
    }
    return selected
//    selections.push(item)
})

   this.setState({selections:selections})

  }
changeStrength=(strength,id)=>{
  
        var selections=this.state.selections.map(selected=>{
      
            if(selected.id===id){
           
var totalPriceToRetailer=selected.totalPriceToRetailer;
var MRP=selected.MRP;
var medicineStrengthId=selected.medicineStrengthId;
selected.strenghts.map(item=>{
    if(item.strength===strength){
        medicineStrengthId=item.medicineStrengthId;
      
    totalPriceToRetailer=item.totalPriceToRetailer;
    MRP=item.MRP
    }
})
var total=parseInt(selected.quantity) *parseInt(MRP);
selected.strength=strength;
selected.medicineStrengthId=medicineStrengthId;
selected.medicineBatchId=medicineStrengthId;
selected.totalPriceToRetailer=totalPriceToRetailer;
selected.MRP=MRP;
selected.total=total;
        
            }
            return selected
      
        })
        
           this.setState({selections:selections})
        
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
  componentWillMount(){
     const data={"apiVersion":Config.APIVERSION,
      "imei":Config.IMEI,
      "token":"",
      medicineName:"e"
      }
      return fetch(Config.API+'/search_medicines',{
		method: "post",
		headers: {
		  'Accept': 'application/json, text/plain, */*',
		  'Content-Type': 'application/json'
		},body:JSON.stringify(data)
	  })
	  .then(res=>res.json())
      .then(res=>{this.setState({medicines:res.data.medicines,error:res.error||""})
      var selections=[];
      res.data.medicines.map(medicine=>{
          if(medicine.strenghts.length!==0){
            var data={
                id:medicine.id,
                medicineCartId:medicine.id,
                image1:medicine.image1,
                image2:medicine.image2,
                image3:medicine.image3,

                image4:medicine.image4,
                image5:medicine.image5,
                image6:medicine.image6,
                strenghts:medicine.strenghts,
                genericName:medicine.genericName,
                tabletPack:medicine.tabletPack,
                orderQuantityLimit:medicine.orderQuantityLimit,
                medicineStrengthId:medicine.strenghts[0].id,
                medicineBatchId:medicine.strenghts[0].id,
                strength:medicine.strenghts[0].strength,
                totalPriceToRetailer:medicine.strenghts[0].totalPriceToRetailer,
                MRP:medicine.strenghts[0].MRP,
                quantity:1,
                total:medicine.strenghts[0].MRP
                        }
          }
         
                      selections.push(data)
      })
this.setState({selections:selections})
console.log(this.state.selections)
     })
  }
// price=(medicine)=>{
//     if(medicine){
//         if(medicine.strenghts.length!==0){

//  return( <div>  
//                     </div>
//  )}

//     }
// }


  shhowMedicines=()=>{
      if(this.state.medicines.length!==0){
 
     
       var medicines=   this.state.selections.map(medicine=>{
      
           
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
                <Link to={Config.BASE_URL+`products-inner/${medicine.id}`}>   <h2>{medicine.genericName}</h2></Link>
                    <h3>{medicine.tabletPack} Units in box</h3>
                    <h3>Other Variants</h3>
                    <div className="product-varian">
                        {this.variant(medicine.strenghts,medicine.id)}
                       {/* <NavLink to={Config.BASE_URL+"#"} className="product-btn2">80 grams</NavLink> 
                        <NavLink to={Config.BASE_URL+"#"} className="product-btn2">100 grams</NavLink>  */}
                    </div>
                {/* {this.price(medicine)} */}
                <h5 className="underline" id="retailPrice">{medicine.totalPriceToRetailer}</h5>
                    <h4>Recommended retail price</h4>
                        
                    <h5 id="total">{medicine.MRP}</h5>
                    <div className="product-bar3">                   
       <Select defaultValue="1" style={{ width: 50,margin:"0 10px 0 0" }} className="quantity" onChange={(event)=>{this.handleChange(event,event,medicine.id)}}>
     {this.dropdown(medicine.orderQuantityLimit)}
     </Select>
                        <button onClick={()=>{this.addCart(medicine)}} className="product-btn1">ADD TO CART</button>
                        <div className="product-bar4">
                            <h6>TOTAL AMOUNT</h6><br />
                    <h5 className="total-amount">{medicine.total}</h5>
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

    console.log(this.state)
    return (
<div>

<Header />
	<LinkerWrapp />
    <ShowAlert message={this.state.message} error={this.state.error}/>
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

        return {
    
            cart:JSON.parse(state.cart),
        }
      
    }
      function mapDispatchToStates(dispatch){
        return{
       
          addCart:(product)=>{

         
              dispatch({type:"add",payload:{product,message:"Added To Cart"}})
              if(isAuth()){
  console.log(isAuth())
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
  
      export default withRouter(connect(mapStateToProps,mapDispatchToStates)(Products));
