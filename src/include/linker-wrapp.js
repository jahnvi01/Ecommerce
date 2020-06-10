import React, { Component } from 'react';
import dawabagLogo2 from '../images/dawabag-logo2.png';
import loginThumb1 from '../images/login-thumb1.png';
import cartThumb1 from '../images/cart-thumb1.png';
import { withRouter } from 'react-router-dom';
import {autocomplete,countries} from '../js/autocomplete'
import {signout,isAuth} from '../function/auth';
class LinkerWrapp extends Component {

	change=()=>{
		var name=document.getElementById("myInput").value
		//autocomplete(name,countries)
	  }
	search=(e)=>{


var name=document.getElementById("myInput").value;

this.props.history.push(`/search-products/${name}`)

	}

  render() {
	
	console.log(isAuth())
    return (
		<React.Fragment>
<section className="linker-wrapp">
	<div className="scroll float-panel" data-scroll="0" data-top="0">
	<div className="margin">
            
		<div className="linker-row1">
			<div className="linker-bar1">
				<a href="/"><img src={dawabagLogo2} alt="dawabag logo1" /></a>
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
                	<p><a href="/login">Login / Signup</a></p>
                    <p><img src={loginThumb1} /></p>
                </div>)}
				{isAuth() && (	<div className="login">
                	<p><a style={{cursor:"pointer"}} onClick={()=>signout()}>Logout</a></p>
                    <p><img src={loginThumb1} /></p>
                </div>)}
                <div className="cart-box">
                	<p><a href="/cart">Cart</a></p>
                    <p><img src={cartThumb1}/></p>
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

export default withRouter(LinkerWrapp);
