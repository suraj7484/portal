import React, { Component } from 'react'
import ScrollAnimation from 'react-animate-on-scroll';
import Header from '../Includes/Header'
import Footer from '../Includes/Footer'
import Unity from '../../assests/Unity-Gaming.jpg'
import HTML5 from '../../assests/HTML5-Game-Development.png'
import androidGaming from '../../assests/android-gaming.png'
import iosGaming from '../../assests/ios-gaming.png'
import hd from '../../assests/3d-gaming.png'
import app from '../../assests/tech-gaming-second.png'
import internet from '../../assests/big-technolgy-soft.PNG'
import react from '../../assests/first-gaming-tech-new.png'
import blockchain from '../../assests/third-gaming-tech-new.png'
import sketch from '../../assests/second-gaming-tech-new.png'
import xd from '../../assests/forth-gaming-tech-new.png'
import figma from '../../assests/five-gaming-tech-new.png'
import invision from '../../assests/six-gaming-tech-new.png'
import img20 from '../../../src/assests/contact-us2.PNG'
import img11 from '../../../src/assests/complete-gaming-new.png'
import img12 from '../../../src/assests/superior-gaming-new.png'
import img13 from '../../../src/assests/user-gaming-new.png'
import img14 from '../../../src/assests/omkatech5.png'
import img19 from '../../../src/assests/new-banner-front.PNG'
import freeCost from '../../../src/assests/firts-image-why-choose.png'
import freeCostIcon from '../../../src/assests/free-cost-software-icon-new.PNG'
import superrior from '../../../src/assests/forth-image-why-choose.png'
import source from '../../../src/assests/second-image-why-choose.png'
import user from '../../../src/assests/third-image-why-choose.png'
import gameImage from '../../../src/assests/game-image-word.png'

class GamingApp extends Component {

    componentDidMount() {
        window.scrollTo(0, 0)
    }
    render() {
        return (
            <div>
                <Header {...this.props} />
                <section id="banner-gaming" class="animated slideInDown">
                    <div class="container">
                        <div class="row ">
                            <div class="col-md-6">
                                <h1>Ga<img src={gameImage} />ing App Development</h1>
                                <p> Build Affordable, yet classy<br/> and unique Games</p>
                                <div class="button-left">
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

                <section id="work-homepage" style={{marginTop : '-80px'}}>
                    <div class="container" >
                        <p class="new">Experience a World Class Gaming Development Service</p>
                        <hr />
                        {/* <h5>We Provide The Best Service For Our Customer</h5> */}
                    </div>
                </section>

                <section id="service-gaming">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 ga-unity-content">
                                <h1>Unity Game Development</h1>
                                {/* <h5>Unmatched End-to-End Execution</h5> */}
                                <p>Unity is a specially created engine by Unity Technologies for Gaming<br/> Applications. Any type of application - 2D, 3D , Virtual reality, augmented<br/> reality games can be build. Our dedicated gaming developers have <br/>created multiple games on unity that are live and generating a good <br/>revenue for our clients. </p>
                            </div>
                            <div className="col-md-6">
                                <img src={Unity} />
                            </div>
                        </div>
                    </div>
                </section>

                <section id="service-gaming-html">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <img src={HTML5} />
                            </div>
                            <div className="col-md-6">
                                <h1>HTML5 Game Development</h1>
                                {/* <h5>Unmatched End-to-End Execution</h5> */}
                                <p>HTML games work on all the devices and are easy and fast to develop. Most of the videos games are developed using HTML5 as it is easy to be played through web browsers of smartphones and desktops. HTML5 games are cross-platform and cross-browser enabled, hence developers get the freedom to write one code and conquer all, with just a bit  of personalization in the code for each platform. </p>
                            </div>

                        </div>
                    </div>
                </section>

                <section id="service-gaming-hd">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <h1>2D & 3D Game Development</h1>
                                {/* <h5>Unmatched End-to-End Execution</h5> */}
                                <p>There was a time when the gaming industry was limited to 2D games, but now we have 3D games which are growing rapidly. But the evolution of 3D games did not stop 2D games and both have their own pros and cons. 3D games have rich visual experiences but 2D games have more simpler controls. We provide you the best version of games as per your idea. </p>
                            </div>
                            <div className="col-md-6">
                                <img src={hd} />
                            </div>
                        </div>
                    </div>
                </section>

                <section id="service-gaming-ios">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <img src={iosGaming} />
                            </div>
                            <div className="col-md-6">
                                <h1>Android and iOS Game Development
</h1>
                                {/* <h5>Unmatched End-to-End Execution</h5> */}
                                <p>Gaming has become a very integral part in our lives specially after the COVID 19, people have found really good scope of revenue in the gaming industry. The debate between Android and iOS is endless, and when it comes to the gaming industry it is good to focus on both the platforms as both have different pros and cons. </p>           </div>

                        </div>
                    </div>
                </section>

                <section id="service-gaming-android">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <h1>VR Game Development</h1>
                                {/* <h5>Unmatched End-to-End Execution</h5> */}
                                <p>Virtual reality is the next generation and future of technology. Virtual reality has revolutionized the gaming industry and has taken it to another level. We have developed highly engaging and immersing games that help people interact with their devices like headsets, googles. We tend to provide games that can stand out.</p>
                            </div>
                            <div className="col-md-6">
                                <img src={androidGaming} />
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
                                    <button type="button" onClick={() => { this.props.history.push('Contact'); }} class="btn-register-header animation-on-hover clickcustomform ">Let's Connect</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                <section id="work-homepage">
                    <div class="container" >
                        <p class="new">Why Choose Us </p>
                        <hr />
                       
                    </div>
                </section>

                 <section id="why-choose-us-gaming-new">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-3 ">
                                <img className  = "gaming-app-card" style={{marginTop : '35px'}} src={freeCost} />
                                <h5 className = "gaming-app-card-h5-exc" style={{color : 'white' , marginLeft : '34px', marginTop : '-80px' , fontSize : '14px' , textAlign : 'center' , fontFamily : 'Roboto' , fontWeight : 'lighter'}}>Creative Game Developers</h5>
                                {/* <h4 style={{fontSize : '16px' , marginTop : '140px', marginLeft : '25px'}}>We do mot take any fees to<br/>analyse the requirement  <br/>and provide the quote for the same.</h4>
                                <img style={{marginTop : '-330px' , marginLeft : '85px'}} src={freeCostIcon} /> */}
                            </div>
                            <div className="col-md-3 ">
                                <img className  = "gaming-app-card" style={{marginTop : '35px'}} src={source} />
                                <h5 className = "gaming-app-card-h5" style={{color : 'white' , marginLeft : '34px', marginTop : '-90px' , fontSize : '14px' , textAlign : 'center', fontFamily : 'Roboto' , fontWeight : 'lighter'}}>More Than 10 Years of Game Development Experience</h5>
                                {/* <h4 style={{fontSize : '16px' , marginTop : '140px', marginLeft : '25px'}}>We do mot take any fees to<br/>analyse the requirement  <br/>and provide the quote for the same.</h4>
                                <img style={{marginTop : '-330px' , marginLeft : '85px'}} src={img11} /> */}
                            </div>
                            <div className="col-md-3 ">
                                <img className  = "gaming-app-card" style={{marginTop : '35px'}} src={user} />
                                <h5 className = "gaming-app-card-h5" style={{color : 'white' , marginLeft : '36px', marginTop : '-80px' , fontSize : '14px' , textAlign : 'center', fontFamily : 'Roboto' , fontWeight : 'lighter'}}>Gaming Apps Delivered On Time</h5>
                                {/* <h4 style={{fontSize : '16px' , marginTop : '140px', marginLeft : '25px'}}>We do mot take any fees to<br/>analyse the requirement  <br/>and provide the quote for the same.</h4>
                                <img style={{marginTop : '-330px' , marginLeft : '85px'}} src={img13} /> */}
                            </div>
                            <div className="col-md-3 ">
                                <img className  = "gaming-app-card" style={{marginTop : '35px'}} src={superrior} />
                                <h5 className = "gaming-app-card-h5-exc" style={{color : 'white' , marginLeft : '36px', marginTop : '-90px' , fontSize : '14px' , textAlign : 'center', fontFamily : 'Roboto' , fontWeight : 'lighter'}}>Delivering Highly Functional Games</h5>
                                {/* <h4 style={{fontSize : '16px' , marginTop : '140px', marginLeft : '25px'}}>We do mot take any fees to<br/>analyse the requirement  <br/>and provide the quote for the same.</h4>
                                <img style={{marginTop : '-330px' , marginLeft : '85px'}} src={img12} /> */}
                            </div>
                        </div>
                    </div>
                </section>

                   <section id="work-homepage">
                    <div class="container" >
                        <p class="new">Technology Stack</p>
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

                </section> */}


                    <section id="technology-gaming-new">
                    <div class="container" >
                        <div class="row">
                            <h1>Technology<br /> Stack</h1>
                            <img className="line" src={internet} />
                        </div>
                        <div children="row">
                            <div className="col-md-8">
                                <img id="ps" className="ps animated slideInDown" src={blockchain} />
                                <img className="ai" src={xd} />
                            </div>
                        </div>
                        <div children="row">
                            <div className="col-md-8">

                                <img id="sketch" className="sketch animated bounceInLeft" src={react} />

                            </div>
                        </div>
                        <div children="row">
                            <div className="col-md-8">
                                <img id="xd" className="xd animated slideInDown" src={sketch} />
                            </div>
                        </div>
                        <div children="row">
                            <div className="col-md-8">
                                <img id="figma" className="figma animated bounceInLeft" src={invision} />
                            </div>
                        </div>
                        <div children="row">
                            <div className="col-md-8">
                                <img id="invison" className="invision animated slideInDown" src={figma} />
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

export default GamingApp;