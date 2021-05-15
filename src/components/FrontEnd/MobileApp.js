import React, { Component } from 'react'
import ScrollAnimation from 'react-animate-on-scroll';
import Header from '../Includes/Header'
import Footer from '../Includes/Footer'
import img1 from '../../../src/assests/apple-service-mobile-app.png'
import img2 from '../../../src/assests/ios-serice-mobile-app.png'
import img3 from '../../../src/assests/web-app-service-mobile-app.png'
import img5 from '../../../src/assests/hybrid-service-mobile-app.png'
import img4 from '../../../src/assests/mobile-dream-app1.png'
import img20 from '../../../src/assests/contact-us2.PNG'
import internet from '../../assests/big-technolgy-soft.PNG'
import react from '../../assests/ios-mobile-tech-new.PNG'
import blockchain from '../../assests/android-mobile-tech-new.png'
import sketch from '../../assests/react-mobile-tech-new.png'
import xd from '../../assests/bloack-mobile-tech-new.png'
import figma from '../../assests/hybrid-mobile-tech-new.png'
import invision from '../../assests/web-mobile-tech-new.png'
import serviceIcon from '../../assests/service-mobile-icon-new.png'
import blueIcon from '../../assests/blue-under-icon-new.png'
import greenIcon from '../../assests/green-under-icon-new.png'
import darkGreenIcon from '../../assests/dark-green-icon-new.png'
import darkBlueICon from '../../assests/dark-blue-under-icon-new.png'
import appleIcon from '../../assests/apple-mobile-servicenew.png'
import iconShoose from '../../assests/mobile-app-back-why choose -new.png'
import PROGRAMMER from '../../assests/dedicated programmer.png'
import transparancy from '../../assests/transparancy.png'
import agile from '../../assests/agile-development-new-omkatech.png'
import days from '../../assests/days-new-omkatech.png'
import code from '../../assests/sourse-code-new-omkatech.png'
import delivery from '../../assests/delivery-new-omkatech.png'
import cross from '../../assests/cross-platform-new-omkatech.png'
import user from '../../assests/user-friendly-app-new-omkatech.png'

class MobileApp extends Component {

    componentDidMount() {
        window.scrollTo(0, 0)
    }
    render() {
        return (
            <div>
                <Header {...this.props} />
                <section id="banner-mobileapp" class="animated slideInDown">
                    <div class="container ">
                        <div class="row ">
                            <div class="col-md-6">
                                <h1>Mobile<strong style={{color : 'white'}}> App</strong><br/> Develop<strong style={{color : 'white'}}>ment</strong></h1>
                                <p>Let’s <strong style={{color : 'white' , fontWeight : '400' }}>Grow</strong> your  <strong style={{color : 'white' , fontWeight : '400' }}>Business</strong> <br/>by developing your <strong style={{color : 'white' , fontWeight : '400' }}>Dream Mobile App!</strong></p>
                                <div class="button-left-mobile-new">
                                    <button class="btn-register-header animation-on-hover clickcustomform ">Get In Touch</button>
                                </div>
                            </div>
                            {/* <div class="col-md-6">
                                <div class="col-md-10">
                                    <form class="form border animated rotateIn" id="form-banner">
                                        <h5>Let's Build Your Dream App</h5>
                                        <label>Name</label>
                                        <input type="text" class="form-control" />

                                        <label>Email</label>
                                        <input type="email" class="form-control" />

                                        <label>Phone</label>
                                        <input type="text" class="form-control" />

                                        <label>What's Your Project About</label>
                                        <input type="text" class="form-control" />

                                        <div class="button-right">
                                            <button type="submit" class="btn btn-danger">Submit</button>
                                        </div>
                                    </form>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </section>

                <section id="work-homepage">
                    <div class="container" >
                        <p class="new new1">Services We Offer</p>
                        <hr />
                        <h5 style={{fontFamily : 'Roboto'}}>Take Your Business to Next Level With Our Mobile App Development Solutions</h5>
                    </div>
                </section>

                <section class="overlap-mobile-apple">
                    <div class="contanier ">
                        <div className = "ma-upper-card-container" class="row">
                            <div className="col-md-12 mobile-app-image-div">
                                <img className = "mobile-app-image"  style={{ marginTop : '50px' }} src={serviceIcon} />
                            
                            </div>
                            <div className="row mobile-app-cards">

                                <div className="col-md-12 mobile-app-card1">                                
                                    <img className = "ma-image-major" style={{marginTop : '-1150px' , marginLeft : '540px'}} src={blueIcon} />
                                    
                                    <h5 style={{marginTop : '-620px' , marginLeft : '670px' , fontSize : '22px' , fontFamily : 'Roboto' }}>iOS APP </h5>
                                    <p style={{marginTop : '20px' , marginLeft : '610px' , fontSize : '18px', fontFamily : 'Roboto' }}>Our Developers will create <br/>from single page application<br/> to custorized complex web <br/>application.</p>
                                    <img className = "ma-image-minor" style={{marginLeft  : '670px' , marginTop : '-490px'}} src={img1} />
                                </div>
                                <div className="col-md-12 mobile-app-card2">                                
                                    <img className = "ma-image-major" style={{marginTop : '-1150px' , marginLeft : '540px'}} src={darkGreenIcon} />
                                    
                                    <h5 style={{marginTop : '-620px' , marginLeft : '670px' , fontSize : '22px' , fontFamily : 'Roboto' }}>ANDROID APP </h5>
                                    <p style={{marginTop : '20px' , marginLeft : '610px' , fontSize : '18px', fontFamily : 'Roboto' }}>Our Developers will create <br/>from single page application<br/> to custorized complex web <br/>application.</p>
                                    <img className = "ma-image-minor" style={{marginLeft  : '670px' , marginTop : '-490px'}} src={img2} />
                                </div>

                                
                                {/* <div className="col-md-12 mobile-app-card2">                                
                                <img className = "ma-image-major" style={{marginTop : '-1070px' , marginLeft : '920px' }} src={darkGreenIcon} />
                                <h5 style={{marginTop : '-580px' , marginLeft : '1020px' , fontSize : '22px', fontFamily : 'Roboto' }}>ANDROID APP </h5>
                                <p style={{marginTop : '20px' , marginLeft : '1000px' , fontSize : '18px', fontFamily : 'Roboto' }}>Our Developers will create <br/>from single page application<br/> to custorized complex web <br/>application.</p>
                                <img className = "ma-image-minor"  style={{marginLeft  : '1050px' , marginTop : '-490px'}} src={img2} />
                                </div> */}
                                
                                {/* <div className="col-md-12 mobile-app-card3">                                
                                <img className = "ma-image-major" style={{marginTop : '-400px' , marginLeft : '920px'}} src={darkBlueICon} />
                                <h5 style={{marginTop : '-250px' , marginLeft : '990px' , fontSize : '22px', fontFamily : 'Roboto' }}>HYBRID-NATIVE APP</h5>
                                <p style={{marginTop : '20px' , marginLeft : '980px' , fontSize : '18px', fontFamily : 'Roboto' }}>Our Developers will create <br/>from single page application<br/> to custorized complex web <br/>application.</p>
                                <img className = "ma-image-minor"  style={{marginLeft  : '1050px' , marginTop : '-490px'}} src={img5} />
                                </div> */}

                                
                                <div className="col-md-12 mobile-app-card4">                                
                                <img className = "ma-image-major" style={{marginTop : '-485px' , marginLeft : '540px'}} src={greenIcon} />
                                <h5 style={{marginTop : '-290px' , marginLeft : '590px' , fontSize : '22px', fontFamily : 'Roboto' }}>PROGRESSIVE WEB APP</h5>
                                <p style={{marginTop : '20px' , marginLeft : '610px' , fontSize : '18px', fontFamily : 'Roboto' }}>Our Developers will create <br/>from single page application<br/> to custorized complex web <br/>application.</p>
                                <img className = "ma-image-minor"  style={{marginLeft  : '675px' , marginTop : '-490px'}} src={img3} />
                                </div>

                                <div className="col-md-12 mobile-app-card3">                                
                                <img className = "ma-image-major" style={{marginTop : '-485px' , marginLeft : '540px'}} src={darkBlueICon} />
                                <h5 style={{marginTop : '-290px' , marginLeft : '590px' , fontSize : '22px', fontFamily : 'Roboto' }}>HYBRID-NATIVE APP</h5>
                                <p style={{marginTop : '20px' , marginLeft : '610px' , fontSize : '18px', fontFamily : 'Roboto' }}>Our Developers will create <br/>from single page application<br/> to custorized complex web <br/>application.</p>
                                <img className = "ma-image-minor"  style={{marginLeft  : '675px' , marginTop : '-490px'}} src={img5} />
                                </div>

                                </div>
                            
                                
                            </div>
                    </div>
                </section>

               
                


               

                <section id="work-homepage">
                    <div class="container" >
                        <p class="new new2">Build your Dream App with OMKA TECH</p>
                        <hr />
                    </div>
                </section>

                <section id="dream-app">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                {/* <h1>Let's Build Your Dream App!</h1> */}
                                <h5>OUR WIDE VARIETY OF MOBILE APP DEVELOPMENT SERVICES</h5>
                                <p>We develop mobile apps for various operating systems and mobile platforms, Catering to your diverse business needs and help you grow in this industry. Our professional developers’ expertise in designing and developing the apps as per your needs.Android, iOS, or Hybrid apps, whatever it may be and we are here to help you with our efficient mobile solutions. OMKA TECH can also build cross-platform mobile applications that will work on any device or platform. Companies and organizations choosing OMKA TECH to develop the best suited custom mobile applications for their business needs can be assured that the final end product, no matter on which technology its built on, will be secure, scalable, agile and sustainable in whatever environment it's hosted.

</p>
                                {/* <div class="button-left-mobile-dream-app">
                                    <button class="btn-register-header animation-on-hover clickcustomform ">Get In Touch</button>
                                </div> */}
                            </div>

                            <div className="col-md-6">
                                <img src={img4} />
                            </div>
                        </div>
                    </div>
                </section>

                <section id="banner-mobile-app-digital" style={{marginTop : '100px'}}>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <h2>Want to know more about our Enterprise Digital Services and <br/>out-of-the-box ideas from our professionals?
                            </h2>
                                <p>Our business consultant and professional developers will help and address all your queries.
</p>
                                <div class="button-left-mobile-app-digital">
                                    <button type="button" onClick={() => { this.props.history.push('contact-us'); }} class="btn-register-header animation-on-hover clickcustomform ">Let's Connect</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                <section id="work-homepage">
                    <div class="container" >
                        <p class="new" style={{fontWeight : '590'}}>Why choose OMKA TECH for your Dream Mobile App?</p>
                        <hr />
                    </div>
                </section>

                <section id="why-omka-mobile">
                    <div className="container">
                        <div className="row">
                            <div class="col-md-4 col-sm-4" >
                                <div class="why-omka-mobile-box1 " >
                                <img style={{marginTop : '30px'}} src={iconShoose} />
                                    <ScrollAnimation animateIn='zoomIn' >
                                    <img style={{    marginTop: "-240px",
    marginLeft: '150px'}} src={PROGRAMMER} />
                                        <h1>DEDICATED PROGRAMMER</h1>
                                        {/* <p>We provide specific enterprise <br />
                                            solutions needs to our clients for<br /> their business needs.</p> */}
                                    </ScrollAnimation >
                                </div>
                            </div>

                            <div class="col-md-4 col-sm-4" >
                                <div class="why-omka-mobile-box2 " >
                                <img style={{marginTop : '30px'}} src={iconShoose} />
                                    <ScrollAnimation animateIn='zoomIn' >
                                    <img style={{    marginTop: "-240px",
    marginLeft: '150px'}} src={transparancy} />
                                        <h1>100% TRANSPARENCY</h1>
                                        {/* <p>We provide specific enterprise <br />
                                            solutions needs to our clients for<br /> their business needs.</p> */}
                                    </ScrollAnimation >
                                </div>
                            </div>

                            <div class="col-md-4 col-sm-4" >

                                <div class="why-omka-mobile-box3 " >
                                <img style={{marginTop : '30px'}} src={iconShoose} />
                                    <ScrollAnimation animateIn='zoomIn' >
                                    <img style={{    marginTop: "-240px",
    marginLeft: '150px'}} src={days} />
                                        <h1>FREE 100 DAYS SUPPORT</h1>
                                        {/* <p>We provide specific enterprise <br />
                                            solutions needs to our clients for<br /> their business needs.</p> */}
                                    </ScrollAnimation >
                                </div>


                            </div>
                        </div>

                        <div className="row">
                            <div class="col-md-4 col-sm-4" >

                                <div class="why-omka-mobile-box4 " >
                                <img style={{marginTop : '30px'}} src={iconShoose} />
                                    <ScrollAnimation animateIn='zoomIn' >
                                    <img style={{    marginTop: "-240px",
    marginLeft: '150px'}} src={code} />
                                        <h1>COMPLETE SOURCE CODE</h1>
                                        {/* <p>We provide specific enterprise <br />
                                            solutions needs to our clients for<br /> their business needs.</p> */}
                                    </ScrollAnimation >
                                </div>


                            </div>

                            <div class="col-md-4 col-sm-4" >

                                <div class="why-omka-mobile-box5 " >
                                <img style={{marginTop : '30px'}} src={iconShoose} />
                                    <ScrollAnimation animateIn='zoomIn' >
                                    <img style={{    marginTop: "-240px",
    marginLeft: '150px'}} src={delivery} />
                                        <h1>ON TIME DELIVERY</h1>
                                        {/* <p>We provide specific enterprise <br />
                                            solutions needs to our clients for<br /> their business needs.</p> */}
                                    </ScrollAnimation >
                                </div>


                            </div>

                            <div class="col-md-4 col-sm-4" >

                                <div class="why-omka-mobile-box6 " >
                                <img style={{marginTop : '30px'}} src={iconShoose} />
                                    <ScrollAnimation animateIn='zoomIn' >
                                    <img style={{    marginTop: "-240px",
    marginLeft: '150px'}} src={agile} />
                                        <h1>AGILE DEVELOPMENT</h1>
                                        {/* <p>We provide specific enterprise <br />
                                            solutions needs to our clients for<br /> their business needs.</p> */}
                                    </ScrollAnimation >
                                </div>


                            </div>
                        </div>

                        <div className="row">
                            <div class="col-md-4 col-sm-4" >

                                <div class="why-omka-mobile-box7 " >
                                <img style={{marginTop : '30px'}} src={iconShoose} />
                                    <ScrollAnimation animateIn='zoomIn' >
                                    <img style={{    marginTop: "-240px",
    marginLeft: '150px'}} src={cross} />
                                        <h1>CROSS PLATFORM APPS</h1>
                                        {/* <p>We provide specific enterprise <br />
                                            solutions needs to our clients for<br /> their business needs.</p> */}
                                    </ScrollAnimation >
                                </div>


                            </div>

                            <div class="col-md-4 col-sm-4" >

                                <div class="why-omka-mobile-box8 " >
                                <img style={{marginTop : '30px'}} src={iconShoose} />
                                    <ScrollAnimation animateIn='zoomIn' >
                                    <img style={{    marginTop: "-240px",
    marginLeft: '150px'}} src={user} />
                                        <h1>USER FRIENDLY APPS</h1>
                                        {/* <p>We provide specific enterprise <br />
                                            solutions needs to our clients for<br /> their business needs.</p> */}
                                    </ScrollAnimation>
                                </div>


                            </div>


                        </div>
                    </div>
                </section>

                <section id="service-homepage">
                    <div class="container" >
                        <p class="new">Technology</p>
                        <hr />
                    </div>
                </section>

                {/* <section id="technology-mobile-app">
                    <div class="container" >

                        <div class="row">
                            <div class="col-md-4 col-sm-4 text-center">
                                <ScrollAnimation animateIn='slideInUp'>
                                    <div class="content-box-mobile-internet" >
                                        <img src={internet} />
                                    </div>
                                </ScrollAnimation>
                            </div>
                            <div class="col-md-4 col-sm-4" >
                                <ScrollAnimation animateIn='slideInUp'>
                                    <div class="content-box-mobile-app">
                                        <img src={app} />
                                    </div>
                                </ScrollAnimation>
                            </div>
                            <div class="col-md-4 col-sm-4">
                                <ScrollAnimation animateIn='slideInUp'>
                                    <div class="content-box-mobile-react">
                                        <img src={react} />

                                    </div>
                                </ScrollAnimation>
                            </div>



                        </div>

                        <div class="row">


                            <div class="col-md-6 col-sm-6" >
                                <ScrollAnimation animateIn='slideInUp'>
                                    <div class="content-box-mobile-blockchain">
                                        <img src={blockchain} />
                                    </div>
                                </ScrollAnimation>
                            </div>

                            <div class="col-md-6 col-sm-6" >
                                <ScrollAnimation animateIn='slideInUp'>
                                    <div class="content-box-mobile-apple">
                                        <img src={apple} />
                                    </div>
                                </ScrollAnimation>
                            </div>

                        </div>
                        <div class="row">


                            <div class="col-md-12 col-sm-12" >
                                <ScrollAnimation animateIn='slideInUp'>
                                    <div class="content-box-mobile-android">
                                      
                                        <img src={android} />
                                    </div>
                                </ScrollAnimation>
                            </div>



                        </div>




                        <div class="row">


                            <div class="col-md-12 col-sm-12" >
                                <div class="content-box-mobile-stack">
                                    <img src={mobile} />
                                </div>
                            </div>



                        </div>


                    </div>

                </section>
 */}


                <section id="technology-mobile-app-new">
                    <div class="container" >
                        <div class="row">
                            <h1>Technology<br /> Stack</h1>
                            <img className="line" src={internet} />
                        </div>
                        <div children="row">
                            <div className="col-md-8">
                                <img id="ps" className="ps animated slideInDown" src={blockchain} />
                                <img className="ai" src={react} />
                            </div>
                        </div>
                        <div children="row">
                            <div className="col-md-8">

                                <img id="sketch" className="sketch animated bounceInLeft" src={sketch} />

                            </div>
                        </div>
                        <div children="row">
                            <div className="col-md-8">
                                <img id="xd" className="xd animated slideInDown" src={xd} />
                            </div>
                        </div>
                        <div children="row">
                            <div className="col-md-8">
                                <img id="figma" className="figma animated bounceInLeft" src={figma} />
                            </div>
                        </div>
                        <div children="row">
                            <div className="col-md-8">
                                <img id="invison" className="invision animated slideInDown" src={invision} />
                            </div>
                        </div>
                    </div>
                </section>


                  <section id="contact" style={{marginTop  :'-70px'}}>
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
                </section>



                <Footer {...this.props} />
            </div>
        )
    }
}

export default MobileApp;