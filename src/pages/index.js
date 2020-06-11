import React, { Component } from 'react';
import Header from '../include/header';
import LinkerWrapp from '../include/linker-wrapp';
import JudgerWrapp from '../include/judger-wrapp';
import CallusWrapp from '../include/callus-wrapp';
import ImpoerWrapp from '../include/impoer-wrapp';
import bannerThumb1 from '../images/banner-thumb/banner-thumb1.jpg';
import bannerThumb2 from '../images/banner-thumb/banner-thumb2.jpg';
import enquerIcon1 from '../images/enquer-icon1.png';
import enquerIcon3 from '../images/enquer-icon3.png';
import enquerIcon4 from '../images/enquer-icon4.png';
import honoerThumb1 from '../images/honoer-thumb1.jpg'
import honoerThumb2 from '../images/honoer-thumb2.jpg'
import honoerThumb3 from '../images/honoer-thumb3.jpg'
import KnowerWrapp from '../include/knower-wrapp';
import Footer from '../include/footer';
import $ from 'jquery';
import OwlCarousel from 'react-owl-carousel';
import Slider from 'react-slick-slider';

class Home extends Component {
  
    state={
        message:"",
        error:"",
        banners:[],
    blogs:[],
        options:{
            items: 1,
                loop: true,
                autoplay: true,
                smartSpeed: 1500,
                animateIn: 'fadeIn',
                animateOut: 'fadeOut',
                autoplayTimeout: 7000,
                nav: false
          
        },
        settings:{
            dots: false,
            speed: 1500,
            autoplayTimeout: 7000,
            arrows: true,
            autoplay: true,
            pauseOnHover: false,
            slidesToShow: 3,
            slidesToScroll: 1,
            responsive: [
        {
              breakpoint: 1024,
            settings: {
            slidesToShow: 3,
            slidesToScroll: 1
        }
        },
        {
            breakpoint: 901,
            settings: {
            slidesToShow: 3,
            slidesToScroll: 1
        }
        },
        {
            breakpoint: 768,
            settings: {
            slidesToShow: 1,
            slidesToScroll: 1
        }
        },
        {
            breakpoint: 600,
            settings: {
            slidesToShow: 1,
            slidesToScroll: 1
        }
        },
        {
            breakpoint: 480,
            settings: {
            slidesToShow: 1,
            slidesToScroll: 1
        }
        }
        ]
        }
          
        
    }
    
      componentWillMount(){
    
         const data={
             apiVersion:"1.0",
             token:""
          }
        fetch('http://projects-demo.tk/dawabag/webservices/web/home_data',{
            method: "post",
            headers: {
              'Accept': 'application/json, text/plain, */*',
              'Content-Type': 'application/json'
            },body:JSON.stringify({
                apiVersion:"1.0",
             token:"",
             imei:""
             })
          })
          .then(res=>res.json())
      
          .then(res=>{this.setState({banners:res.data.banners[0]||[],blogs:res.data.blogs[0]||[],error:res.error||""})
          console.log(this.state)       })
  

        //   fetch('http://projects-demo.tk/dawabag/webservices/web/banners',{
        //     method: "post",
        //     headers: {
        //       'Accept': 'application/json, text/plain, */*',
        //       'Content-Type': 'application/json'
        //     },body:JSON.stringify({
        //         apiVersion:"1.0",
        //      token:"",
        //      imei:""
        //      })
        //   })
        //   .then(res=>res.json())
      
        //   .then(res=>{this.setState({  banners:res.data.banners||[],error:res.error||""})
        //   console.log(this.state)       })
        
   
    }
    
    shhowBlogs=()=>{
        if(this.state.blogs.length!==0){
         var blogs=   this.state.blogs.map(blog=>{
                return(
                    <div key={blog.id}>
           
                    <div className="honoer-row2">
                        <div className="honoer-bar1"><img src={blog.image1} alt="honoer thumb1"/></div>
                        <div className="honoer-bar2">
                <h3>{blog.title}</h3>
                <p>{blog.description.slice(0,30)}...</p>
                            <a href="#" className="honoer-btn1">Read more</a>
                        </div>
                    </div>
                    </div>
                )
            })
            return blogs;
        }
    }
  showBanners=()=>{
      if(this.state.banners.length!==0){
         var banners=this.state.banners.map(banner=>{
            return(
                <OwlCarousel margin={10} items={4} {...this.state.options} key={banner.id} > 
                <div className="single-welcome-slide">
                    <div className="main-bg-img">
                        <img src={banner.image1} alt="Dawabag - 1" />
                    </div>
                    <div className="banner-row1">
                        
                        <div className="margin">
                            <div className="banner-bar1">
                                <h2>COUPONS/ADVERTISEMENTS</h2>
                                <h3>SILK BED LINEN</h3>
                                <p>For the ultimate luxury sleeping experience</p>
                                <a href="#" className="banner-btn1">Shop now!</a>
                            </div>
                        </div>
                        
                    </div>
                </div>
                <div className="single-welcome-slide">
                    <div className="main-bg-img">
                        <img src={banner.image2} alt="Dawabag - 2" />
                    </div>
                    <div className="banner-row1">
                        
                        <div className="margin">
                            <div className="banner-bar1">
                                <h2>COUPONS/ADVERTISEMENTS</h2>
                                <h3>SILK BED LINEN</h3>
                                <p>For the ultimate luxury sleeping experience</p>
                                <a href="#" className="banner-btn1">Shop now!</a>
                            </div>
                        </div>
                        
                    </div>
                </div>
                <div className="single-welcome-slide">
                    <div className="main-bg-img">
                        <img src={banner.image3} alt="Dawabag - 1" />
                    </div>
                    <div className="banner-row1">
                        
                        <div className="margin">
                            <div className="banner-bar1">
                                <h2>COUPONS/ADVERTISEMENTS</h2>
                                <h3>SILK BED LINEN</h3>
                                <p>For the ultimate luxury sleeping experience</p>
                                <a href="#" className="banner-btn1">Shop now!</a>
                            </div>
                        </div>
                        
                    </div>
                </div>
                <div className="single-welcome-slide">
                    <div className="main-bg-img">
                        <img src={banner.image4} alt="Dawabag - 2" />
                    </div>
                    <div className="banner-row1">
                        
                        <div className="margin">
                            <div className="banner-bar1">
                                <h2>COUPONS/ADVERTISEMENTS</h2>
                                <h3>SILK BED LINEN</h3>
                                <p>For the ultimate luxury sleeping experience</p>
                                <a href="#" className="banner-btn1">Shop now!</a>
                            </div>
                        </div>
                        
                    </div>
                </div>
                
            </OwlCarousel>
         )
         }) 
      return banners;
      }
  }
  
  render() {
    

    return (
<div>
	<Header />
	<LinkerWrapp />
  

<section className="banner-wrapp">
	<div className="welcome-slides">
{this.showBanners()}

    </div>
  
</section>

<section className="enquer-wrapp">
	<div className="margin">
    	
        <div className="enquer-row1">
        	<div className="enquer-row2">
        	    <a href="/products">
                <div className="enquer-bar1">
                	<div className="enquer-box1">
						<img src={enquerIcon1} alt="enquer icon1" />
                    </div>
                </div>
                <div className="enquer-bar2">
                    <h2>Order</h2>
                    <p>Medicines</p>
                </div>
                </a>
            </div>
      {/* <!--      <div className="enquer-row2">-->
      <!--          <div className="enquer-bar1">-->
      <!--          	<div className="enquer-box1">-->
						<!--<img src="images/enquer-icon2.png" alt="enquer icon2" />-->
      <!--              </div>-->
      <!--          </div>-->
      <!--          <div className="enquer-bar2">-->
      <!--              <h2>Healthcare</h2>-->
      <!--              <p>Products</p>-->
      <!--          </div>-->
      <!--      </div>--> */}
            <div className="enquer-row2">
                <a href="/offers">
                <div className="enquer-bar1">
                	<div className="enquer-box1">
						<img src={enquerIcon3} alt="enquer icon3" />
                    </div>
                </div>
                <div className="enquer-bar2">
                    <h2>Special</h2>
                    <p>Offers</p>
                </div>
                </a>
            </div>
            <div className="enquer-row2">
                <a href="/orders">
                <div className="enquer-bar1">
                	<div className="enquer-box1">
						<img src={enquerIcon4} alt="enquer icon4" />
                    </div>
                </div>
                <div className="enquer-bar2">
                    <h2>My</h2>
                    <p>Orders</p>
                </div>
                </a>
            </div>
        </div>
    	
	</div>
</section>

<section className="facier-wrapp">
	<div className="margin">
    
		<h2>Authenticate Your Medicine</h2>
        <p>Lorem khaled Ipsum is a major key to success.</p>
        
		<div className="facier-row1">
        
			<div className="facier-row2">
				<div className="facier-box1">
					<div className="facier-text">01</div>
				</div>
                <div className="facier-bar2">
                    <h3>Spot The QR <span>Code</span></h3>
                    <p>Lorem khaled Ipsum is a major key to success.</p>
                </div>
            </div>
            <div className="facier-row2">
				<div className="facier-box1">
					<div className="facier-text">02</div>
				</div>
                <div className="facier-bar2">
                    <h3>Scan The <span>Code</span></h3>
                    <p>Lorem khaled Ipsum is a major key to success.</p>
                </div>
            </div>
            <div className="facier-row2">
				<div className="facier-box1">
					<div className="facier-text">01</div>
				</div>
                <div className="facier-bar2">
                    <h3>Verify The <span>Medicine</span></h3>
                    <p>Lorem khaled Ipsum is a major key to success.</p>
                </div>
            </div>
    {/* <!--        <div className="facier-row2">-->
				<!--<div className="facier-box1">-->
				<!--	<div className="facier-text">01</div>-->
				<!--</div>-->
    <!--            <div className="facier-bar2">-->
    <!--                <h3>Saving products <span>And Payment</span></h3>-->
    <!--                <p>Lorem khaled Ipsum is a major key to success.</p>-->
    <!--            </div>-->
    <!--        </div>--> */}
            
		</div>
        
    </div>
</section>

<section className="gester-wrapp">
	<div className="margin">
    	<div className="gester-row1">
        	<h2>Buy Lifesaving And Anti Cancer <span>Drugs At Dawabag.Com Only!</span></h2>
            <p>Lorem Ipsum is simply dummy text of the printing and <span>typesetting industry.</span></p>
            <a href="#" className="gester-btn1">Shop now!</a>
        </div>
    </div>
</section>

<section className="facier-wrapp">
	<div className="margin">
    
		<h2>Order Process</h2>
        <p>Lorem khaled Ipsum is a major key to success.</p>
        
		<div className="facier-row1">
        
			<div className="facier-row2">
				<div className="facier-box1">
					<div className="facier-text">01</div>
				</div>
                <div className="facier-bar2">
                    <h3>search and order <span>Medicine</span></h3>
                    <p>Lorem khaled Ipsum is a major key to success.</p>
                </div>
            </div>
            <div className="facier-row2">
				<div className="facier-box1">
					<div className="facier-text">02</div>
				</div>
                <div className="facier-bar2">
                    <h3>Upload Your <span>Prescription</span></h3>
                    <p>Lorem khaled Ipsum is a major key to success.</p>
                </div>
            </div>
            <div className="facier-row2">
				<div className="facier-box1">
					<div className="facier-text">01</div>
				</div>
                <div className="facier-bar2">
                    <h3>Make Payment And <span>Confirm Order</span></h3>
                    <p>Lorem khaled Ipsum is a major key to success.</p>
                </div>
            </div>
            <div className="facier-row2">
				<div className="facier-box1">
					<div className="facier-text">01</div>
				</div>
                <div className="facier-bar2">
                    <h3>Get Your Medicine <span>At Your Door Step</span></h3>
                    <p>Lorem khaled Ipsum is a major key to success.</p>
                </div>
            </div>
            
		</div>
        
    </div>
</section>

<section className="honoer-wrapp">
	<div className="margin">
    
		<h2>Latest News</h2>
        <p>Lorem khaled Ipsum is a major key to success.</p>
        
		<div className="honoer-row1">
        
        <div className="slider autoplay secslider">
        <Slider {...this.state.settings}>	
        {this.shhowBlogs()}
            
            {/* <div>
            <div className="honoer-row2">
				<div className="honoer-bar1"><img src={honoerThumb2} alt="honoer thumb2"/></div>
                <div className="honoer-bar2">
                	<h3>Even light drinkers at risk <span>of cancer</span></h3>
                    <p>Lorem ipsum dolor adipisicing amet, <span>consectetur sit elit. Aspernatur incidihil</span> quo officia.</p>
                    <a href="#" className="honoer-btn1">Read more</a>
                </div>
            </div>
            </div>
            
            <div>
            <div className="honoer-row2">
				<div className="honoer-bar1"><img src={honoerThumb3} alt="honoer thumb3"/></div>
                <div className="honoer-bar2">
                	<h3>Even light drinkers at risk <span>of cancer</span></h3>
                    <p>Lorem ipsum dolor adipisicing amet, <span>consectetur sit elit. Aspernatur incidihil</span> quo officia.</p>
                    <a href="#" className="honoer-btn1">Read more</a>
                </div>
            </div>
            </div>
            
            <div>
            <div className="honoer-row2">
				<div className="honoer-bar1"><img src={honoerThumb3} alt="honoer thumb3"/></div>
                <div className="honoer-bar2">
                	<h3>Even light drinkers at risk <span>of cancer</span></h3>
                    <p>Lorem ipsum dolor adipisicing amet, <span>consectetur sit elit. Aspernatur incidihil</span> quo officia.</p>
                    <a href="#" className="honoer-btn1">Read more</a>
                </div>
            </div>
            
            </div> */}
            </Slider>
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

export default Home;
