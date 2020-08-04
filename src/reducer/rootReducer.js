import { isAuth } from "../function/auth";
import Config from '../Config';
if(localStorage.getItem('cart')===null){
var value=[];
localStorage.setItem('cart',JSON.stringify(value)); 
console.log(localStorage.getItem("cart"));
if(isAuth()){
  const data={
     apiVersion:Config.APIVERSION,
 userId:isAuth().userId,
 token:"",
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
 // .then(res=>console.log(res))
  .then(res=>{
     localStorage.setItem('cart',JSON.stringify(res.data.medicines)); 
console.log(localStorage.getItem("cart"));
})
}


}


if(isAuth()){
  const data={
     apiVersion:Config.APIVERSION,
 userId:isAuth().userId,
 token:"",
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
 // .then(res=>console.log(res))
  .then(res=>{
     localStorage.setItem('cart',JSON.stringify(res.data.medicines)); 
console.log(localStorage.getItem("cart"));
})
}



if(localStorage.getItem('bill')===null){
  var data={
    total:0,
    bill:0
}
localStorage.setItem('bill',JSON.stringify(data)) 
}

var initState={
  cart:localStorage.getItem('cart')||[],
  message:"",
  total:JSON.parse(localStorage.getItem('bill')).total ||0,
  bill:JSON.parse(localStorage.getItem('bill')).bill ||0
  }

const rootReducer =(state=initState,action)=>{
 console.log(action.payload);
//  console.log(state);
// //var currentColor = localStorage.getItem('token');
//console.log(currentColor);


    switch(action.type){

      case "get":    localStorage.setItem('cart',JSON.stringify(action.payload));  return{...state,cart:localStorage.getItem('cart')||[]}
         case "add":var cart=JSON.parse(state.cart);
         console.log(cart)
          cart=[action.payload.product,...cart];
          localStorage.setItem('cart',JSON.stringify(cart)); 
          return{...state,message:action.payload.message,cart:localStorage.getItem('cart')};

         case "remove":  var cart=JSON.parse(state.cart);cart=cart.filter(product=>product.id!==action.payload.id);localStorage.setItem('cart',JSON.stringify(cart)); return {...state,message:action.payload.message,cart: localStorage.getItem('cart')};
       default:
    return state;
    }
    
    }
    export default rootReducer;