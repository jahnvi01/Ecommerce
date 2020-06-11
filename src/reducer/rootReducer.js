import { isAuth } from "../function/auth";

if(localStorage.getItem('cart')===null){
var value=[];
localStorage.setItem('cart',JSON.stringify(value)); 
console.log(localStorage.getItem("cart"));

}
if(isAuth()){
   console.log(isAuth().userId)
   const data={
      apiVersion:"1.0",
  userId:"1",
  token:"",
  imei:""
  }
   fetch('http://projects-demo.tk/dawabag/webservices/web/get_cart_items',{
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
var initState={
cart:localStorage.getItem('cart')||[],
message:""
}

const rootReducer =(state=initState,action)=>{
//  console.log(action.payload);
//  console.log(state);
// //var currentColor = localStorage.getItem('token');
//console.log(currentColor);


    switch(action.type){

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