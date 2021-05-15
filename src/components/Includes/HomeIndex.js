import React, { Component } from 'react';
import ReactWOW from 'react-wow'
import ScrollAnimation from 'react-animate-on-scroll';
import Demo from '../../../src/assests/circle-arrow.png'
import Demo2 from '../../../src/assests/branding-design-service.png'
import Demo3 from '../../../src/assests/mobile-home-page-merge-name-new.png'
import Demo4 from '../../../src/assests/seo-home-page-merge-name-new.png'
import Demo5 from '../../../src/assests/gaming-home-page-merge-name-new.png'
import service1 from '../../../src/assests/web-home-page-merge-name-new.PNG'
import service2 from '../../../src/assests/mobile-app-home-page.png'
import service3 from '../../../src/assests/seo-home-page.png'
import service4 from '../../../src/assests/gaming-home-page.png'
import img from '../../../src/assests/hh.png'
import img1 from '../../../src/assests/hhk.png'
import img2 from '../../../src/assests/aa.png'
import img3 from '../../../src/assests/cc.png'
import img4 from '../../../src/assests/SOFTWARE.png'
import img5 from '../../../src/assests/search-new-how-we-work.png'
import img6 from '../../../src/assests/Design-and-Artwork.png'
import img7 from '../../../src/assests/build-and-write.png'
import img8 from '../../../src/assests/test-and-fix.png'
import img9 from '../../../src/assests/approap-and-llaunch.png'
import img10 from '../../../src/assests/support-and-maintain.png'
import img11 from '../../../src/assests/why-omkatech-home-page-back-pink.png'
import img13 from '../../../src/assests/why-omkatech-home-page-back-blue.png'
import img12 from '../../../src/assests/free-cost-why-omkatech-new.png'
import img14 from '../../../src/assests/Free-Cost-Analysis-why-omkatech-new.png'
import img15 from '../../../src/assests/supperior-quality-why-omkatech-new.png'
import img16 from '../../../src/assests/user-why-omkatech-new.png'
import img17 from '../../../src/assests/full-custo-why-omkatech-new.png'
import img18 from '../../../src/assests/handle-holding-why-omkatevh-new.png'
import img21 from '../../../src/assests/white-label-why-omkatech-new.png'
import img22 from '../../../src/assests/customerwhy-why-omkatech-new.png'
import img19 from '../../../src/assests/new-banner-front.PNG'
import img20 from '../../../src/assests/contact-us2.PNG'
import dotLine from '../../../src/assests/Dottedline.PNG'
import Typing from 'react-typing-animation';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import WhyCard from './WhyCard';

class HomeIndex extends Component {

    componentDidMount() {
        window.scrollTo(0, 0)
    }
    render() {
        return (
            <>
                <section id="banner-homepage" className="desktop-banner-home-page">
                    <div class="container" id="container-banner">
                        <div class="row ">
                            <div id="banner-content-homepage" class="col-md-12">
                                <Typing >
                                    <h1>Web Development</h1>
                                    <Typing.Backspace count={15} />
                                    <Typing.Delay ms={500} />
                                    <h2>Mobile App <br/>Development</h2>
                                    <Typing.Backspace count={25} />
                                    <Typing.Delay ms={500} />
                                    <h3>Digital Marketing</h3>
                                    <Typing.Backspace count={19} />
                                    <h5>Website Design</h5>
                                    <Typing.Backspace count={15} />
                                    <h5>UI/UX Design</h5>
                                    <Typing.Backspace count={15} />
                                    <h5>Strategy/Consulting</h5>
                                    <Typing.Backspace count={20} />
                                    <h5>ERP Solutions</h5>
                                </Typing>

                                <div class="button-left-homepage" id="desktop-view">
                                    <button type="button" class="btn" style={{ fontSize: '20px', fontFamily: 'Roboto' }} onClick={() => { this.props.history.push('Contact-us'); }}>Talk to an Expert</button>
                                </div>

                               
                            </div>

                        </div>
                    </div>
                </section>


                <section id="banner-homepage" className="mobile-banner-home-page">
                    <div class="container" id="container-banner">
                        <div class="row ">
                            <div id="banner-content-homepage" class="col-md-12">
                                <Typing >
                                    <h1>Web Development</h1>
                                    <Typing.Backspace count={15} />
                                    <Typing.Delay ms={500} />
                                    <h2>Mobile App <br/>Development</h2>
                                    <Typing.Backspace count={25} />
                                    <Typing.Delay ms={500} />
                                    <h3>Digital Marketing</h3>
                                    <Typing.Backspace count={19} />
                                    <h5>Website Design</h5>
                                    <Typing.Backspace count={15} />
                                    <h5>UI/UX Design</h5>
                                    <Typing.Backspace count={15} />
                                    <h5>Strategy/Consulting</h5>
                                    <Typing.Backspace count={20} />
                                    <h5>ERP Solutions</h5>
                                </Typing>

                               

                                <div class="button-left-homepage-mobile" id="mobile-view">
                                    <button type="button" class="btn" style={{ fontSize: '14px', fontFamily: 'Roboto'  }} onClick={() => { this.props.history.push('Contact-us'); }}> Talk to an Expert</button>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                 <section id="service-homepage" className="desktop-service-home-page">
                    <div class="container" >
                        <p class="new">OUR SERVICES</p>
                        <hr />
                        <h5>We provide comprehensive and integrated IT services</h5>
                        <div class="row cards-div-main">
                            {/* <div className = "main-1"> */}

                                {/* <div className="col-md-2 col-div-spans">
                                
                                    <img  className = "image-1" style={{ marginLeft : '-100px' , marginTop : '50px'}} class=" image-1"  src={Demo2} />
                                </div> */}
                                <div className="col-md-2 col-div-spans">
                                
                                    <img  className = "pic-1 homepage-first-picture" style={{ marginLeft : '-100px' , marginTop : '50px'}} class=" pic-1" src={Demo5} />
                                </div>
                                <div className="col-md-2 col-div-spans">
                                
                                    <img  className = "pic-1" style={{ marginLeft : '-20px' , marginTop : '50px'}} class=" pic-1" src={Demo3} />
                                </div>
                                <div className="col-md-2 col-div-spans">
                                
                                    <img  className = "pic-1" style={{ marginLeft : '60px' , marginTop : '50px'}} class=" pic-1" src={Demo4} />
                                </div>
                                <div className="col-md-2 col-div-spans">
                                    
                                    <img className = "pic-1" style={{ marginLeft : '140px' , marginTop : '50px'}}  class=" pic-1" src={Demo5} />
                                </div>
                                <div className="col-md-2 col-div-spans">
                                
                                    <img className = "pic-1" style={{ marginLeft : '230px', marginTop : '50px'}} class=" pic-1" src={Demo2} />
                                </div>
                            {/* </div> */}
                       
                            
                        </div>
                    </div>
                </section>


                 <section id="service-homepage-mobile" className="mobile-service-home-page" style={{marginTop : '20px'}}>
                    <div class="container" >
                        <p class="new">OUR SERVICES</p>
                        <hr />
                        <h5 style={{fontSize : '10px'}}>We provide comprehensive and integrated IT services</h5>
                        <div class="row cards-div-main">
                            <div className="col-md-2 ">
                             
                                <img  style={{ height : '80px'}} class=" pic-1"   src={Demo2} />
                            </div>
                               <div className="col-md-2">
                               
                                <img  style={{  height : '80px'}} class=" pic-1" src={Demo3} />
                            </div>
                           <div className="col-md-2">
                               
                                <img  style={{  height : '80px'}} class=" pic-1" src={Demo4} />
                            </div>
                             <div className="col-md-2">
                                
                                <img style={{  height : '80px'}}  class=" pic-1" src={Demo5} />
                            </div>
                            <div className="col-md-2">
                               
                                <img style={{  height : '80px'}} class=" pic-1" src={service1} />
                            </div>
                            
                        </div>
                    </div>
                </section>

                 

                <section id="service-homepage" className="desktop-how-we-work-tagline" style={{ marginTop: '50px' }}>
                    <div class="container" >
                        <p class="new">HOW WE WORK</p>
                        <hr />
                    </div>
                </section>

                   <section id="service-homepage-mobile" className="mobile-how-we-work-tagline" style={{ marginTop: '-150px' }}>
                    <div class="container" >
                        <p class="new">HOW WE WORK</p>
                        <hr />
                    </div>
                </section>




              <section id="values" className="desktop-how-we-work-view">
                    <div class="container" >
                        <div class="row" id="demo">
                            <div id="values-para-homepage" class="col-md-3" style={{ marginLeft: '-60px' }} >

                                <ReactWOW animation='slideInLeft'>

                                    <h3 className = "first-homepage-slide-h3" style={{ marginLeft: '80px' }}>1.Research & Analyse</h3>
                                    <p style={{ marginLeft: '80px' }}>Our team analyses your requirement deeply and<br />  make a plan and provide the best possible solution<br /> for the product and business. It is very important <br/>to do a through research and discussion before starting.</p>

                                </ReactWOW>
                                <div class="dots">
                                </div>
                            </div>

                            <div id="section1-value" class="col-md-9 col-sm-9 ">
                                <ReactWOW animation='slideInRight'>
                                    <div className="circle">
                                        <img src={img5} />
                                    </div>
                                </ReactWOW>

                            </div>
                        </div>

                        <div class="row how-we-work"  >

                            <div id="section2-value" class="col-md-9 col-sm-8">
                                <ReactWOW animation='slideInLeft'>
                                    <div className="circle-second">
                                        <img src={img6} />
                                    </div>
                                </ReactWOW>
                            </div>
                            <div id="values-para-homepage homepage-second-para" class="col-md-3 " >
                                <ReactWOW animation='slideInRight'>
                                    <h3 className = "how-we-work-h3 second-homepage-slide-h3" style={{ marginLeft: '-80px' }}>2.Design & Artwork</h3>
                                    <p className = "how-we-work-p second-homepage-slide-p" style={{ marginLeft: '-80px' }}>Browsing and finalizing the latest technologies, designing and prototyping an exceptional UI for better customer experience. We provide the Wireframe designs, review them and if required refine them after which the development process starts.</p>
                                </ReactWOW>
                                <div class="dots-second">
                                </div>
                            </div>
                        </div>

                        <div class="row" id="demo">
                            <div id="values-para-homepage" class="col-md-3 homepage-third-para" style={{ marginLeft: '-60px', marginTop: '-40px' }} >
                                <ReactWOW animation='slideInLeft'>
                                    <h3 className = "third-homepage-slide-h3" style={{ marginLeft: '80px' }}>3.Develop & Build</h3>
                                    <p style={{ marginLeft: '80px' }}>The next step is the development of the core functionalities along with the advanced features<br/> where we first switch graphic designs in HTML/<br/>CSS code and then develop the style and structure<br/>  as well as optimize the code.</p>
                                </ReactWOW>
                                <div class="dots">
                                </div>
                            </div>
                            <div id="section" class="col-md-9 col-sm-8 " >
                                <ReactWOW animation='slideInRight'>
                                    <div className="circle-third">
                                        <img src={img7} />
                                    </div>
                                </ReactWOW>
                            </div>
                        </div>

                        <div class="row" id="demo">
                            <div id="section" class="col-md-9  ">
                                <ReactWOW animation='slideInLeft'>
                                    <div className="circle-forth">
                                        <img src={img8} />
                                    </div>
                                </ReactWOW>
                            </div>
                            <div id="values-para-homepage" class="col-md-3 homepage-forth-para" style={{ marginTop: '-60px' }}>
                                <ReactWOW animation='slideInRight'>
                                    <h3 className = "forth-homepage-slide-h3" style={{ marginLeft: '-80px' }}>4.Testing & Bug-Fixing</h3>
                                    <p style={{ marginLeft: '-80px' }}>We test the project and make sure it is working fine across different browsers, various operating systems and different devices. It is also important to search for all possible errors, and deliver a digital solution that meets your specifications.
											</p>
                                </ReactWOW>
                                <div class="dots-second">
                                </div>
                            </div>
                        </div>

                        <div class="row" id="demo" >

                            <div id="values-para-homepage" class="col-md-3 homepage-five-para" style={{ marginTop: '-100px', marginLeft: '-60px' }}>
                                <ReactWOW animation='slideInLeft'>
                                    <h3 className = "five-homepage-slide-h3" style={{ marginLeft: '80px' }}>5.Launch & Get Started</h3>
                                    <p style={{ marginLeft: '80px' }}>The final step where the project is migrated to the hosting server and successfully launched and is visible to all the visitors. The hosting process is done by OMKATECH and we guarantee 100% on-time delivery.
											</p>
                                </ReactWOW>
                                <div class="dots">
                                </div>
                            </div>

                            <div id="section" class="col-md-9 col-sm-8  ">
                                <ReactWOW animation='slideInRight'>
                                    <div className="circle-five">
                                        <img src={img9} />
                                    </div>
                                </ReactWOW>
                            </div>
                        </div>

                        <div class="row" id="demo">

                            <div id="section" class="col-md-9 col-sm-8 ">
                                <ReactWOW animation='slideInLeft'>
                                    <div className="circle-six">
                                        <img src={img10} />

                                    </div>
                                </ReactWOW>
                            </div>

                            <div id="values-para-homepage" class="col-md-3 homepage-six-para" style={{ marginTop: '-120px' }}>
                                <ReactWOW animation='slideInRight'>
                                    <h3 className = "six-homepage-slide-h3" style={{ marginLeft: '-80px' }}>6.Promotion & Maintenance</h3>
                                    <p style={{ marginLeft: '-80px' }}>Once the project is live, the process does not stop here. It is important to promote your project for more visibility and also keep on upgrading for a long run as the digital field is getting advanced day by day.
											</p>
                                </ReactWOW>
                                <div class="dots-second">
                                </div>
                            </div>


                        </div>
                    </div>


                </section>


              
              <section id="values" className="mobile-how-we-work-view">
                     <div class="container" >
                        <div class="row slider-main" id="demo">
                            <div id="values-para-homepage" class="col-md-3 " style={{ marginLeft: '-60px' }} >

                                <ReactWOW animation='slideInLeft'>

                                <h3 style={{ marginLeft: '50px', fontSize: '10px' }}>1.Research & Analyse</h3>
                                    <p style={{ marginLeft: '50px', fontSize: '10px' }}>Our team analyses your requirement<br />  deeply and make a plan and provide the best possible solution for the<br /> product and business. It is very <br/> importantto do a through research and discussion before starting.</p>

                                    
                                </ReactWOW>
                                <div class="dots">
                                </div>
                            </div>
                           
                        <div id="section1-value" >
                                <ReactWOW animation='slideInRight'>
                                    <div className="circle">
                                        <img src={img5} />
                                    </div>
                                </ReactWOW>

                           
                        </div> </div>
 
                        <div class="row slider-main"  >

                            <div id="section2-value" >
                                <ReactWOW animation='slideInLeft' >
                                    <div className="circle-second">
                                        <img src={img6} />
                                    </div>
                                </ReactWOW>
                            </div>
                           <div id="values-para-homepage-second" class="col-md-3 " >
                                <ReactWOW animation='slideInRight' >

                                   <h3 style={{ paddingLeft: '50px', fontSize: '10px', marginTop: '-30px' , marginLeft : '140px' }}>2.Design & Artwork</h3>
                                    <p style={{ marginLeft: '190px', fontSize: '10px', paddingLeft: '0px'}}>Browsing and finalizing the <br/>latest technologies, designing <br/>and prototyping an exceptional UI for better customer experience. We provide the Wireframe designs, review them and if required refine them after which the development process starts.</p>
                                        </ReactWOW>
                              
                                <div class="dots-second">
                                </div>
                                </div> 
                        </div>
                       


                           <div class="row slider-main" id="demo">
                            <div id="values-para-homepage" class="col-md-3" style={{ marginLeft: '-60px', marginTop: '120px' }} >
                                <ReactWOW animation='slideInLeft' >
                                <h3 style={{ marginLeft: '50px', fontSize: '10px' }}>3.Develop & Build</h3>
                                    <p style={{ marginLeft: '50px', fontSize: '10px' }}>The next step is the development of the core functionalities along with the<br/> advanced features where we first switch graphic designs in HTML/ <br/>CSS code and then develop the style<br/> and structure  as well as optimize the code.</p>
                                  </ReactWOW>
                                <div class="dots-third">
                                </div>
                            </div>
                            <div id="section"  >
                                <ReactWOW animation='slideInRight' >
                                    <div className="circle-third">
                                        <img src={img7} />
                                    </div>
                                </ReactWOW>
                            </div>
                        </div>
                     

                       <div class="row slider-main" id="demo">
                            <div id="section" >
                                <ReactWOW animation='slideInLeft' >
                                    <div className="circle-forth">
                                        <img src={img8} />
                                    </div>
                                </ReactWOW>
                            </div>
                            <div id="values-para-homepage-second" class="col-md-3 " >
                                <ReactWOW animation='slideInRight' >
                                <h3 style={{paddingLeft: '50px', fontSize: '10px', marginTop: '-30px' , marginLeft : '140px' }}>4.Testing & Bug-Fixing</h3>
                                    <p style={{marginLeft: '190px', fontSize: '10px', paddingLeft: '0px' }}>We test the project and make sure it is working fine across<br/>  different browsers, various operating systems and different<br/> devices. It is also important to<br/> search for all possible errors, <br/>and deliver a digital solution that meets your specifications.</p>
                              </ReactWOW>
                                <div class="dots-second">
                                </div>
                            </div>
                        </div>



                         <div class="row slider-main" id="demo" >

                            <div id="values-para-homepage" class="col-md-3" style={{ marginTop: '150px', marginLeft: '-60px' }}>
                                <ReactWOW animation='slideInLeft' >
                                <h3 style={{ marginLeft: '50px', fontSize: '10px'}}>5.Launch & Get Started</h3>
                                    <p style={{ marginLeft: '50px', fontSize: '10px' }}>The final step where the project is migrated to the hosting server and successfully launched and is <br/>visible to all the visitors. The hosting process is done by OMKATECH and we guarantee 100% on-time delivery.
											</p>
                                  
                                </ReactWOW>
                                <div class="dots">
                                </div>
                            </div>

                            <div id="section">
                                <ReactWOW animation='slideInRight' >
                                    <div className="circle-five">
                                        <img src={img9} />
                                    </div>
                                </ReactWOW>
                            </div>
                        </div>
                       

                         <div class="row slider-main" id="demo">

                            <div id="section" >
                                <ReactWOW animation='slideInLeft' >
                                    <div className="circle-six">
                                        <img src={img10} />

                                    </div>
                                </ReactWOW>
                            </div>

                            <div id="values-para-homepage-second" class="col-md-3" style={{ marginTop: '-20px' }}>
                                <ReactWOW animation='slideInRight' >
                                <h3 style={{paddingLeft: '50px', fontSize: '10px', marginTop: '-30px' , marginLeft : '140px'}}>6.Promotion & Maintenance</h3>
                                    <p style={{ marginLeft: '190px', fontSize: '10px', paddingLeft: '0px' }}>Once the project is live, the process does not stop here. It is important to promote your project for more visibility and also keep on upgrading for a long run as the digital field is getting advanced day by day.
											</p>
                               </ReactWOW>
                                <div class="dots-six">
                                </div>
                            </div>


                        </div>
                        </div>
                       
                       </section>
                   

                

                <section id="work-homepage" className="desktop-work-home-page-tagline">
                    <div class="container" >
                        <p class="new">Why OMKA TECH?</p>
                        <hr />
                        <h5 >We Guarantee and Ensure the best Digital Solution for your Business</h5>
                        
                      
                       
                        <div class="row why-omka-tech">
                        {/* Here I made a new component and render it here to make it dynamic #START */}
                            <WhyCard className = "whyCardSection" bg = {img11} top = {img12} head = "Free Cost-Analysis" para = "We provide free consultation for your project. We try our best to provide you with the best solution and make the process a cakewalk for you."/>
                            <WhyCard className = "whyCardSection" bg = {img13} top = {img14} head = "Complete Source Code" para = "We do not keep any ownership/credentials for the project. Once the project is complete, we provide the complete source code and ownership to the client."/>
                            <WhyCard className = "whyCardSection" bg = {img11} top = {img15} head = "User-Friendly Designs" para = "Our designs are unique yet attractive and designing is done in such a way that it can be used effortlessly."/>
                            <WhyCard className = "whyCardSection" bg = {img13} top = {img16} head = "Superior Quality" para = "Our experience and professional team develop the superior quality code and we also mention comments while writing so that it is easy for anyone to understand the code and work later."/>
                            <WhyCard className = "whyCardSection" bg = {img11} top = {img17} head = "Fully Customized Platform" para = "Your project should be developed as per your imagination, Hence we do customized development to bring the end product best suited to the client and their business."/>
                            <WhyCard className = "whyCardSection" bg = {img13} top = {img18} head = "Hand-Holding Approach" para = "We keep in touch from the start of the project till the client is satisfied with our work. We go hand in hand with our clients so that we can help each other grow."/>
                            <WhyCard className = "whyCardSection" bg = {img11} top = {img21} head = "White Label" para = "We just develop/produce, you can re-brand the project. After our work is complete and handed over to you, you can reuse it for any purpose."/>
                            <WhyCard className = "whyCardSection" bg = {img13} top = {img22} head = "24*7 Customer Support" para = "We provide 24*7 email/message/call support to our clients. You can anytime reach out to us and we will be there for you."/>
                            {/* Here I made a new component and render it here to make it dynamic #END */}


                            {/* <div class="col-md-3 col-sm-3" >
                                <img style={{marginTop : '50px'}} src={img11} />
                                
                            <ScrollAnimation animateIn='fadeIn'
                            animateOnce={true}>
                                <img  style={{marginTop : '-530px' , marginLeft : '102px'}} src={img12} />
                                
                                </ScrollAnimation>
                                <h4 style={{marginTop : '-200px' , textAlign : 'center' , fontFamily : 'Roboto'}} >Free Cost-Analysis</h4>
                                <p style={{marginTop : '20px' ,marginLeft: '15px',  textAlign : 'center' , fontFamily : 'Roboto'}}>We provide free consultation for your project. We try our best to provide you with the best solution and make the process a cakewalk for you.</p>

                            </div>

                            <div class="col-md-3 col-sm-3" >
                                <img style={{ marginTop: '70px' }} src={img13} />
                                <ScrollAnimation animateIn='fadeIn'
                            animateOnce={true}>
                                <img  style={{marginTop : '-530px' , marginLeft : '102px'}} src={img14} />
                                </ScrollAnimation>
                                <h4 style={{marginTop : '-210px' , textAlign : 'center' , fontFamily : 'Roboto'}} >Complete Source Code</h4>
                                <p style={{marginTop : '20px' ,marginLeft: '15px', textAlign : 'center' , fontFamily : 'Roboto'}}>We do not keep any ownership/credentials for the project. Once the project is complete, we provide the complete source code and ownership to the client.</p>
                            </div>
                            <div class="col-md-3 col-sm-3" >
                                <img style={{marginTop : '50px'}} src={img11} />
                                <ScrollAnimation animateIn='fadeIn'
                            animateOnce={true}>
                                <img  style={{marginTop : '-530px' , marginLeft : '102px'}} src={img15} />
                                </ScrollAnimation>
                                <h4 style={{marginTop : '-200px' , textAlign : 'center' , fontFamily : 'Roboto'}} >User-Friendly Designs</h4>
                                <p style={{marginTop : '20px' , marginLeft: '15px', textAlign : 'center' , fontFamily : 'Roboto'}}>Our designs are unique yet attractive and designing is done in such a way that it can be used effortlessly.</p>
                            </div>
                            <div class="col-md-3 col-sm-3" >
                                <img style={{ marginTop: '70px' }} src={img13} />
                                <ScrollAnimation animateIn='fadeIn'
                            animateOnce={true}>
                                <img  style={{marginTop : '-530px' , marginLeft : '102px'}} src={img16} />
                                </ScrollAnimation>
                                <h4 style={{marginTop : '-210px', textAlign : 'center' , fontFamily : 'Roboto'}} >Superior Quality</h4>
                                <p style={{marginTop : '20px' , marginLeft: '15px', textAlign : 'center' , fontFamily : 'Roboto'}}>Our experience and professional team develop the superior quality code and we also mention comments while writing so that it is easy for anyone to understand the code and work later.</p>
                            </div> */}
                        </div>
                      

                       
                        {/* <div class="row">
                            <div class="col-md-3 col-sm-3" >
                                <img style={{marginTop : '50px'}} src={img11} />
                                <ScrollAnimation animateIn='fadeIn'
                            animateOnce={true}>
                                <img  style={{marginTop : '-530px' , marginLeft : '102px'}} src={img17} />
                                </ScrollAnimation>
                                <h4 style={{marginTop : '-220px', textAlign : 'center' , fontFamily : 'Roboto'}} >Fully Customized Platform</h4>
                                <p style={{marginTop : '15px' , marginLeft: '15px', textAlign : 'center' , fontFamily : 'Roboto'}}>Your project should be developed as per your imagination, Hence we do customized development to bring the end product best suited to the client and their business.</p>
                            </div>

                            <div class="col-md-3 col-sm-3" >
                                <img style={{ marginTop: '70px' }} src={img13} />
                                <ScrollAnimation animateIn='fadeIn'
                            animateOnce={true}>
                                <img  style={{marginTop : '-530px' , marginLeft : '102px'}} src={img18} />
                                </ScrollAnimation>
                                <h4 style={{marginTop : '-215px', textAlign : 'center' , fontFamily : 'Roboto'}} >Hand-Holding <br/>Approach</h4>
                                <p style={{marginTop : '15px' , marginLeft: '15px', textAlign : 'center' , fontFamily : 'Roboto'}}>We keep in touch from the start of the project till the client is satisfied with our work. We go hand in hand with our clients so that we can help each other grow.</p>
                            </div>
                            <div class="col-md-3 col-sm-3" >
                                <img style={{marginTop : '50px'}} src={img11} />
                                <ScrollAnimation animateIn='fadeIn'
                            animateOnce={true}>
                                <img  style={{marginTop : '-530px' , marginLeft : '102px'}} src={img21} />
                                </ScrollAnimation>
                                <h4 style={{marginTop : '-200px', textAlign : 'center' , fontFamily : 'Roboto'}} >White Label</h4>
                                <p style={{marginTop : '20px' , marginLeft: '15px', textAlign : 'center' , fontFamily : 'Roboto'}}> We just develop/produce, you can re-brand the project. After our work is complete and handed over to you, you can reuse it for any purpose.</p>
                            </div>
                            <div class="col-md-3 col-sm-3" >
                                <img style={{ marginTop: '70px' }} src={img13} />
                                <ScrollAnimation animateIn='fadeIn'
                            animateOnce={true}>
                                <img  style={{marginTop : '-530px' , marginLeft : '102px'}} src={img22} />
                                </ScrollAnimation>
                                <h4 style={{marginTop : '-200px', textAlign : 'center' , fontFamily : 'Roboto'}} >24*7 Customer<br/> Support</h4>
                                <p style={{marginTop : '20px' , marginLeft: '15px', textAlign : 'center' , fontFamily : 'Roboto'}}>We provide 24*7 email/message/call support to our clients. You can anytime reach out to us and we will be there for you.</p>
                            </div>
                        </div> */}
                       
                    </div>
                </section>


                 <section id="work-homepage-mobile" className="mobile-work-home-page-tagline">
                    <div class="container" >
                        <p class="new">Why OMKA TECH?</p>
                        <hr />
                       
                        <h5 style={{fontSize : '10px'}} >We Guarantee and Ensure the best Digital Solution for your Business</h5>
                        
                      
                       
                        <div class="row">
                            {/* Here I made a new component and render it here to make it dynamic #START */}
                            <WhyCard className = "whyCardSection" bg = {img11} top = {img12} head = "Free Cost-Analysis" para = "We provide free consultation for your project. We try our best to provide you with the best solution and make the process a cakewalk for you."/>
                            <WhyCard className = "whyCardSection" bg = {img13} top = {img14} head = "Complete Source Code" para = "We do not keep any ownership/credentials for the project. Once the project is complete, we provide the complete source code and ownership to the client."/>
                            <WhyCard className = "whyCardSection" bg = {img11} top = {img15} head = "User-Friendly Designs" para = "Our designs are unique yet attractive and designing is done in such a way that it can be used effortlessly."/>
                            <WhyCard className = "whyCardSection" bg = {img13} top = {img16} head = "Superior Quality" para = "Our experience and professional team develop the superior quality code and we also mention comments while writing so that it is easy for anyone to understand the code and work later."/>
                            <WhyCard className = "whyCardSection" bg = {img11} top = {img17} head = "Fully Customized Platform" para = "Your project should be developed as per your imagination, Hence we do customized development to bring the end product best suited to the client and their business."/>
                            <WhyCard className = "whyCardSection" bg = {img13} top = {img18} head = "Hand-Holding Approach" para = "We keep in touch from the start of the project till the client is satisfied with our work. We go hand in hand with our clients so that we can help each other grow."/>
                            <WhyCard className = "whyCardSection" bg = {img11} top = {img21} head = "White Label" para = "We just develop/produce, you can re-brand the project. After our work is complete and handed over to you, you can reuse it for any purpose."/>
                            <WhyCard className = "whyCardSection" bg = {img13} top = {img22} head = "24*7 Customer Support" para = "We provide 24*7 email/message/call support to our clients. You can anytime reach out to us and we will be there for you."/>
                            {/* Here I made a new component and render it here to make it dynamic #END */}

                            {/* <div class="col-md-3 col-sm-3" >
                                <img style={{marginTop : '50px' ,width  : '140px' , height : '170px'}} src={img11} />
                         
                                <img  style={{marginTop : '-75px' , marginLeft : '-85px' , width : '30px'}} src={img12} />
                                
                          
                                <h4 style={{width: '140px', marginTop : '-100px' , textAlign : 'center' , fontFamily : 'Roboto' ,fontSize  : '10px' , marginLeft : '-190px'}} >Free Cost-Analysis</h4>
                                <p style={{width: '140px', marginTop : '10px' ,marginLeft: '-190px',  textAlign : 'center' , fontFamily : 'Roboto' , fontSize : '8px'}}>We provide free consultation<br/> for your project. We try our<br/> best to provide you with the<br/> best solution and make the<br/> process a cakewalk for you.</p>

                            </div>
                        
                            
                            <div class="col-md-3 col-sm-3" >
                                <img style={{ marginTop : '-187px' ,width  : '140px' , height : '170px', marginLeft : '170px'}} src={img13} />
                                <img  style={{marginTop : '-355px' , marginLeft : '225px' , width : '30px'}} src={img14} />
                                <h4 style={{width: '140px', marginTop : '-140px' , textAlign : 'center' , fontFamily : 'Roboto' ,fontSize  : '10px' , marginLeft : '197px'}} >Complete Source Code</h4>
                                <p style={{width: '140px', marginTop : '10px' ,marginLeft: '175px', textAlign : 'center' , fontFamily : 'Roboto' ,fontSize  : '8px'}}>We do not keep any ownership/credentials for the project. Once the project is complete, we provide the complete source code and ownership to the client.</p>
                            </div>
                           

                           
                            <div class="col-md-3 col-sm-3" >
                                <img style={{marginTop : '50px' ,width  : '140px' , height : '170px', marginLeft : '-12px'}} src={img11} />
                                <img  style={{marginTop : '-70px' , marginLeft : '-85px' , width : '30px'}} src={img15} />
                                <h4 style={{width: '140px', marginTop : '-100px' , textAlign : 'center' , fontFamily : 'Roboto',fontSize  : '10px', marginLeft : '-180px'}} >User-Friendly Designs</h4>
                                <p style={{width: '140px', marginTop : '10px' , marginLeft: '-175px', textAlign : 'center' , fontFamily : 'Roboto',fontSize  : '8px'}}>Our designs are unique<br/> yet attractive and designing is<br/> done in such a way that it <br/>can be used effortlessly.</p>
                            </div>
                           
                            <div class="col-md-3 col-sm-3" >
                                <img style={{ marginTop : '-170px' ,width  : '140px' , height : '170px', marginLeft : '170px' }} src={img13} />
                                <img  style={{marginTop : '-335px' , marginLeft : '225px' , width : '30px'}} src={img16} />
                                <h4 style={{width: '140px', marginTop : '-140px', textAlign : 'center' , fontFamily : 'Roboto',fontSize  : '10px', marginLeft : '177px'}} >Superior Quality</h4>
                                <p style={{width: '140px', marginTop : '10px' , marginLeft: '175px', textAlign : 'center' , fontFamily : 'Roboto',fontSize  : '8px'}}>Our experience and professional<br/>  team develop the superior quality <br/> code and we also mention<br/> comments while writing so that it is easy for anyone to understand the code and work later.</p>
                            </div> */}
                       
                        </div>

                       
                         {/* <div class="row">
                            <div class="col-md-3 col-sm-3" >
                                <img style={{marginTop : '50px' ,width  : '140px' , height : '170px' }} src={img11} />
                                <img  style={{marginTop : '-75px' , marginLeft : '-85px' , width : '30px'}} src={img17} />
                                <h4 style={{width: '140px', marginTop : '-100px' , textAlign : 'center' , fontFamily : 'Roboto' ,fontSize  : '10px' , marginLeft : '-190px'}} >Fully Customized Platform</h4>
                                <p style={{width: '140px', marginTop : '10px' ,marginLeft: '-190px',  textAlign : 'center' , fontFamily : 'Roboto' , fontSize : '8px'}}>Your project should be developed <br/>as per your imagination, Hence <br/>we do customized development to <br/>bring the end product best suited<br/> to the client and their business.</p>
                            </div>
                          

                            <div class="col-md-3 col-sm-3" >
                                <img style={{marginTop : '-187px' ,width  : '140px' , height : '170px', marginLeft : '185px' }} src={img13} />
                                <img  style={{marginTop : '-345px' , marginLeft : '240px' , width : '30px'}} src={img18} />
                                <h4 style={{width: '140px', marginTop : '-140px' , textAlign : 'center' , fontFamily : 'Roboto' ,fontSize  : '10px' , marginLeft : '177px'}} >Hand-Holding <br/>Approach</h4>
                                <p style={{width: '140px', marginTop : '10px' ,marginLeft: '175px', textAlign : 'center' , fontFamily : 'Roboto' ,fontSize  : '8px'}}>We keep in touch from the start <br/>of the project till the client is<br/> satisfied with our work. We go<br/> hand in hand with our clients so<br/> that we can help each other grow.</p>
                            </div>
                            </div>
                           
                           <div class="col-md-3 col-sm-3" >
                                <img style={{marginTop : '50px' ,width  : '140px' , height : '170px', marginLeft : '-12px'}} src={img11} />
                                <img  style={{marginTop : '-70px' , marginLeft : '-85px' , width : '30px'}} src={img21} />
                                <h4 style={{width: '140px', marginTop : '-100px', textAlign : 'center' , fontFamily : 'Roboto',fontSize  : '10px', marginLeft : '-177px'}} >White Label</h4>
                                <p style={{width: '140px', marginTop : '10px' , marginLeft: '-180px', textAlign : 'center' , fontFamily : 'Roboto',fontSize  : '8px'}}> We just develop/produce, you can<br/> re-brand the project. After our work <br/>is complete and handed over to you,<br/> you can reuse it for any purpose.</p>
                            </div>
                         <div class="col-md-3 col-sm-3" >
                                <img style={{ marginTop : '-170px' ,width  : '140px' , height : '170px', marginLeft : '170px' }} src={img13} />
                                <img  style={{marginTop : '-335px' , marginLeft : '225px' , width : '30px'}} src={img22} />
                                <h4 style={{width: '140px', marginTop : '-130px', textAlign : 'center' , fontFamily : 'Roboto',fontSize  : '10px', marginLeft : '177px'}} >24*7 Customer<br/> Support</h4>
                                <p style={{width: '140px', marginTop : '10px' , marginLeft: '175px', textAlign : 'center' , fontFamily : 'Roboto',fontSize  : '8px'}}>We provide 24*7 email/message/call support to our clients. You can anytime reach out to us and we will be there for you.</p>
                            </div> */}
                    </div>
                </section>


                   {/*     <section id="banner-mobile-app-digital" style={{marginTop : '100px'}}>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <h2>Want to know more about our Enterprise Digital Services and <br/>out-of-the-box ideas from our professionals?
                            </h2>
                                <p>Our business consultant and professional developers will help and address all your queries.
</p>
                                <div class="button-left-mobile-app-digital">
                                    <button type="button" onClick={() => { this.props.history.push('Contact'); }} class="btn-register-header animation-on-hover clickcustomform ">Let's Connect</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> */}


                <section id="service-homepage" style={{marginTop : '50px'}}>
                    <div class="container" >
                        <p class="new">TESTMONIAL</p>
                        <hr />
                    </div>
                </section>


                 <section id="testmonial">


                    <div className="slider-area">
                        <div className="container">
                            <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                                <ol class="carousel-indicators">
                                    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                                </ol>
                                <h1 className="text-center" style={{ color : 'black', fontSize: '1.7rem' }} id="desktop-testmonail">What our clients have to say.</h1>
                                <h1 style={{ fontSize: '16px', marginLeft: '120px' , color : 'black' }} id="mobile-testmonail">What our clients have to say.</h1>
                                <div class="carousel-inner">
                                    <div class="carousel-item active">
                                        <div className="img-area">
                                            <img src={img19} />
                                        </div>
                                        <div className="carousel-caption-textmonail">
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br/> Lorem Ipsum has been the industry's standard dummy text ever since the<br/> 1500s, when an unknown printer took a galley of type and scrambled it to<br/> make a type specimen book.</p>
                                            <h3>Nitish kumar</h3>
                                            <h4>Developer</h4>

                                        </div>
                                    </div>
                                    <div class="carousel-item">
                                        <div className="img-area">
                                            <img src={img20} />
                                        </div>
                                        <div className="carousel-caption-textmonail">
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br/> Lorem Ipsum has been the industry's standard dummy text ever since the<br/> 1500s, when an unknown printer took a galley of type and scrambled it to<br/> make a type specimen book.</p>

                                            <h3>Nitish kumar</h3>
                                            <h4>Developer</h4>
                                        </div>
                                    </div>
                                    <div class="carousel-item">
                                        <div className="img-area">
                                            <img src={img20} />
                                        </div>
                                        <div className="carousel-caption-textmonail">
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br/> Lorem Ipsum has been the industry's standard dummy text ever since the <br/>1500s, when an unknown printer took a galley of type and scrambled it to<br/> make a type specimen book.</p>
                                            <h3>Nitish kumar</h3>
                                            <h4>Developer</h4>

                                        </div>
                                    </div>
                                </div>
                                 <a class="left carousel-control" href="#carouselExampleIndicators" role="button" data-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="sr-only">Previous</span>
                        </a>
                        <a class="right carousel-control" href="#carouselExampleIndicators" role="button" data-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="sr-only">Next</span>
                        </a> 
                            </div>
                        </div>
                    </div>

                </section> 


                {/* <section id="Blog">
                    <div className="container">
                        <p class="new-Blog" style={{ marginTop: '-50px' }}>BLOG</p>
                        <hr />

                        <div className="row" >

                            <div class="col-md-4"  >
                            <div class="wrapper-blogs">
                                    <div class="parent-blogs" onclick="">
                                        <div class="childBlogs" id="blog-img">                                          
                                             <h1>Importance of product Prototyping</h1>
                                        </div>
                                    </div>
                                </div>


                            </div>


                            <div class="col-md-4 col-sm-4" >
                            <div class="wrapper-blogs">
                                    <div class="parent-blogs" >
                                        <div class="childBlogs" id="blog-img1">                                          
                                        <h1>Essential Elements of<br/> Web  & Mobile App<br/> Development</h1>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>

                            <div class="col-md-4 col-sm-4"  >
                            <div class="wrapper-blogs">
                                    <div class="parent-blogs" >
                                        <div class="childBlogs" id="blog-img2">                                          
                                        <h1>Hire Developer for your <br/>Business Needs</h1>
                                        </div>
                                    </div>
                                </div>
                               
                            </div>
                        </div>
                    </div>
                </section> 

                <section id="contact">
                    <div class="container ">
                        <div class="row">
                            <div class="col-md-6">
                                <h3 >CONTACT US</h3>
                                <h2 class="mt-3" >Let's Work Together and Start A New Project</h2>
                                <h5 class="mt-3">India</h5>
                                <p style={{fontFamily : 'Roboto'}} id="desktop-address-view"> Address - Plot No. 183, Sector-28, Faridabad, Haryana, 121008<br/>
                 <new style={{marginLeft : '66px' , fontFamily : 'Roboto'}}>A Block, Sector-46, Noida, Uttar Pradesh, 201303</new></p>
                                <p id="mobile-address-view"> Address : Plot No. 183, Sector-28,<br /> Faridabad, Haryana & A Block,<br /> Sector-46, Noida, Uttar Pradesh</p>
                                <p style={{fontFamily : 'Roboto'}}><strong style={{ fontWeight: 'bold' , color: "black" , fontFamily : 'Roboto'}}>Email</strong> - info@omkatech.com</p>
                                <p style={{fontFamily : 'Roboto'}}><strong style={{ fontWeight: 'bold' , color: "black" , fontFamily : 'Roboto'}}>Sales </strong>:  +91 97175 11913 (GLOBAL) <br/> <new style={{marginLeft : '48px'}}>+1 786 855 1172 (USA)</new></p>
                            </div>
                           
                            <div class="col-md-6">                           
                                <img src={img20} />
                            </div>
                           
                        </div>
                    </div>
                </section> */}



            </>
        )
    }
}

export default HomeIndex;