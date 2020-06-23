import React, { Component } from 'react';
import dawabagLogo2 from '../images/dawabag-logo2.png';
import loginThumb1 from '../images/login-thumb1.png';
import cartThumb1 from '../images/cart-thumb1.png';
import { withRouter } from 'react-router-dom';
import {signout,isAuth} from '../function/auth';
import Config from '../Config';
import { NavLink } from 'react-router-dom';


class LinkerWrapp extends Component {

handleScroll = () => {
	if (window.scrollY === 0) {
		document.getElementById("sticky").classList.remove("fixed")

	} else {
		document.getElementById("sticky").setAttribute("style", "position: fixed !important;");
		document.getElementById("sticky").setAttribute("style", "top: 0 !important;");
		document.getElementById("sticky").setAttribute("style", "z-index:999 !important;");
		document.getElementById("sticky").setAttribute("style", "background:white !important;");
		document.getElementById("sticky").setAttribute("style", "width: 100%;");
		document.getElementById("sticky").classList.add("fixed");
		
	}
}

componentDidMount() {
	window.addEventListener('scroll', this.handleScroll);
}

componentWillUnmount() {
	window.removeEventListener('scroll', this.handleScroll);
}
	change=()=>{
		var name=document.getElementById("myInput").value
		//autocomplete(name,countries)
	  }
	search=(e)=>{


var name=document.getElementById("myInput").value;

this.props.history.push(`/demo/search-products/${name}`)

	}

  render() {
	
	console.log(isAuth())
    return (
		<React.Fragment>
<section className="linker-wrapp">
	<div className="float-panel" id="sticky"  data-scroll="0" data-top="0">
	<div className="margin">
            
		<div className="linker-row1">
			<div className="linker-bar1">
				<NavLink to={Config.BASE_URL }><img src={dawabagLogo2} alt="dawabag logo1" /></NavLink>
			</div>
		</div>
        <div className="linker-row2">
			<div className="linker-bar2">
				<form autoComplete="off" action="/action_page.php">
                  <div className="autocomplete">
                    <input id="myInput" type="text" name="myCountry" onChange={()=>this.change()} placeholder="SEARCH YOUR MEDICINE" className="linker-fil1" />
                  </div>
                  <input type="" onClick={(event)=>this.search(event)} className="linker-btn1" />
                </form>
			</div>
		</div>
        <div className="linker-row3">
			<div className="linker-bar3">
				{!isAuth() && (	<div className="login">
                	<p><NavLink to={Config.BASE_URL +'login'}> Login / Signup</NavLink></p>
                    <p><img src={loginThumb1} /></p>
                </div>)}
				{isAuth() && (	<div className="login">
                	<p><a style={{cursor:"pointer"}} onClick={()=>signout()}>Logout</a></p>
                    <p><img src={loginThumb1} /></p>
                </div>)}
                <div className="cart-box">
                	<p><NavLink to={Config.BASE_URL +'cart'}>Cart</NavLink></p>
                    <p><img src={cartThumb1}/></p>
 {/* content: "02" */}

					<span style={{
position:"absolute", background: "#9fbd68",color: "#fff",lineHeight:"23px",textAlign:"center",top:"-5px",right:"-13px",
width:"23px", height:"23px",borderRadius:"30px",fontSize:"10px",boxShadow: "0 2px 5px rgba(0,0,0,.3)", zIndex:"9"
					}}> {JSON.parse(localStorage.getItem('cart')||'[]').length}</span>
                </div>
			</div>
		</div>
                
	</div>
    </div>
</section>
</React.Fragment>
    );
  }
}

// function mapStateToProps(state){

//     return {

//         cart:state.cart,
//     }
  
// }
//   function mapDispatchToStates(dispatch){
//     return{
   
//       getCart:()=>{
// 		const data={"apiVersion":Config.APIVERSION,
// 		"imei":Config.IMEI,
// 		"token":""
// 		}
// 		return fetch(Config.API+'/medicines',{
// 		  method: "post",
// 		  headers: {
// 			'Accept': 'application/json, text/plain, */*',
// 			'Content-Type': 'application/json'
// 		  },body:JSON.stringify(data)
// 		})
// 		.then(res=>res.json())
// 		.then(res=>dispatch({type:"get",payload:res.data.medicines})) 
// 	  }
//     }
//   }
export default withRouter(LinkerWrapp);
