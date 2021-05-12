import React, { Component } from 'react'
import Header from '../Includes/Header'
import seoFriendly from '../../../src/assests/seo-friendly-web.PNG'
import responsive from '../../../src/assests/responsive-web.PNG'
import att from '../../../src/assests/att-web.PNG'
import userFriendly from '../../../src/assests/user-friendly-web.PNG'
import prof from '../../../src/assests/prof-web.PNG'
import speed from '../../../src/assests/spped-web.PNG'
import webServices from '../../../src/assests/web-services.PNG'
import Footer from '../Includes/Footer'
import ScrollAnimation from 'react-animate-on-scroll';
import img20 from '../../../src/assests/contact-us2.PNG'
import internet from '../../assests/big-technolgy-soft.PNG'
import app from '../../assests/tech-web-second.PNG'
import react from '../../assests/first-web-tech-new.png'
import blockchain from '../../assests/second-web-tech-new.png'
import sketch from '../../assests/third-web-tech-new.png'
import xd from '../../assests/forth-web-tech-new.png'
import figma from '../../assests/five-web-tech-new.png'
import invision from '../../assests/six-web-tech-new.png'
import require from '../../assests/require-web-icon-new.PNG'
import yellow from '../../assests/yellow-icon-new.PNG'
import blue from '../../assests/blue-icon-new.PNG'
import pink from '../../assests/pink-icon-new.PNG'
import analysis from '../../assests/analysis-web-new.png'
import img1 from '../../assests/define-web-new.png'
import img2 from '../../assests/design-web-new-dev.png'
import img3 from '../../assests/implemation-web-new.png'
import img4 from '../../assests/testing-web-new.png'
import img5 from '../../assests/maintancence-web-new.png'

class WebDevelopment extends Component {

    componentDidMount() {
        window.scrollTo(0, 0)
    }
    render() {
        return (
            <div>
                <Header {...this.props} />
                <section id="banner-web-dev" class="animated slideInDown">
                    <div class="container ">
                        <div class="row ">
                            <div class="col-md-6">
                                <h1>Web <br/>Development</h1>
                                <p>Agile Web Solutions To Boost<br/> Your Brand Growth</p>
                                <div class="button-left-web-new">
                                    <button class="btn-register-header animation-on-hover clickcustomform " onClick={() => {this.props.history.push('contact-us')}} >Get In Touch</button>
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

                <section id="web-service">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <h2>Web Development <strong>SERVICES</strong></h2>
                                <h3>We Develop Customized Web Portals For Your Precise Business Needs</h3>
                                <p>Web application development is one of the most sought field by the business                                  
                                    world since it is applicable right from streamlining business process to 
                                    communication building. There is huge demand for web applications like CRM
                                     (customer relationship management) which <br/>allows the business people to enhance 
                                     their sales and build long term customer relationship. Apart from enterprise solutions,
                                      there are web applications for commercial purpose, games, as well as for education <br/>via online.
                                       Our cloud computing services allow the people to access the application from anywhere at any time. 
                                       We adhere to strict coding styles and user interface that are simple and user-friendly.
                                        We deliver rich internet applications by adapting to quality development methodology.
                                         Want to develop a web platform to smooth out the business process? Reach out to us.</p>
                                <div class="button-left-web-service">
                                    <button class="btn-register-header animation-on-hover clickcustomform " onClick={() => {this.props.history.push('contact-us')}}>Get In Touch</button>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <img src={webServices} />
                            </div>
                        </div>
                    </div>
                </section>

                <section id="work-homepage" style={{marginTop : '-110px'}}>
                    <div class="container" >
                        <p class="new">Process We Follow To Build Your Business Website</p>
                        <hr />
                    </div>
                </section>

                <section id="process-web">
                    <div className="container">
                        <div className="row">
                            <div class="col-md-4 col-sm-4" >
                            
                            <div class="process-web-box1 " >
                            <img src={require} style={{marginTop : '30px'}}/>
                                    <ScrollAnimation animateIn='zoomIn' >
                                        <h1>Idea</h1>
                                        <p>To analyze the requirement through in-depth research with the help of brilliant tools. </p>
<img className = "web-deveopment-card-first" style={{    marginLeft: '160px',
    marginTop: '-375px'}} src={analysis} />
                                    </ScrollAnimation >
                                    </div>
                            </div>

                            <div class="col-md-4 col-sm-4" >
                                <div class="process-web-box2 " >
                                <img src={blue} style={{marginTop : '30px'}}/>
                                    <ScrollAnimation animateIn='zoomIn' >
                                        <h1>Sketch</h1>
                                        <p>To draft the design that is related to the research in order to check the feasibility. </p>
<img className = "web-deveopment-card-first" style={{    marginLeft: '160px',
    marginTop: '-375px'}} src={img1} />
                                    </ScrollAnimation >
                                </div>
                            </div>

                            <div class="col-md-4 col-sm-4" >

                                <div class="process-web-box3 " >
                                <img src={yellow} style={{marginTop : '30px'}}/>
                                    <ScrollAnimation animateIn='zoomIn' >
                                        <h1>Design</h1>
                                        <p>After completing feasibility test, a final<br/> design is prepared by using smart tools. </p>
<img className = "web-deveopment-card-design" style={{    marginLeft: '160px',
    marginTop: '-375px'}} src={img2} />
                                    </ScrollAnimation >
                                </div>


                            </div>
                        </div>

                        <div className="row">
                            <div class="col-md-4 col-sm-4" >

                                <div class="process-web-box4 " >
                                <img src={blue} style={{marginTop : '30px'}}/>
                                    <ScrollAnimation animateIn='zoomIn' >
                                        <h1>Develop</h1>
                                        <p> Now, our development team starts developing the solution according to the finalized design. </p>
<img className = "web-deveopment-card-first" style={{    marginLeft: '160px',
    marginTop: '-375px'}} src={img3} />
                                    </ScrollAnimation >
                                </div>


                            </div>

                            <div class="col-md-4 col-sm-4" >

                                <div class="process-web-box5 " >
                                <img src={pink} style={{marginTop : '30px'}}/>
                                    <ScrollAnimation animateIn='zoomIn' >
                                        <h1>Test</h1>
                                        <p>In testing phase, we test every component to make sure that our solution fits the requirement.</p>
<img className = "web-deveopment-card-image" style={{    marginLeft: '170px',
    marginTop: '-375px'}} src={img4} />
                                    </ScrollAnimation >
                                </div>


                            </div>

                            <div class="col-md-4 col-sm-4" >

                                <div class="process-web-box6 " >
                                <img src={require} style={{marginTop : '30px'}}/>
                                    <ScrollAnimation animateIn='zoomIn' >
                                        <h1>Celebrate</h1>
                                        <p> We make delivery for the solution and<br/> assist our clients to control and administer solution. </p>
<img className = "web-deveopment-card-image" style={{    marginLeft: '160px',
    marginTop: '-375px'}} src={img5} />
                                    </ScrollAnimation >
                                </div>


                            </div>
                        </div>

                    </div>
                </section>

                <section id="service-homepage">
                    <div class="container" >
                        <p class="new" style={{fontFamily : 'Roboto'}}>Why Choose OMKA TECH for your Business Website?</p>
                        <hr />
                    </div>
                </section>

                <section class="overlap-web-seo">
                    <div class="contanier">
                        <div class="row">
                            <div class="col-md-12">
                                <div id="overlap-image-second" class="image-overlap-web-seo ">
                                    <img src={seoFriendly} />
                                </div>
                                <div id="overlap-content-second" class="content-overlap-web-seo ">
                                    <h1>SEO Friendly Website </h1>
                                    <p>We will design and develop SEO friendly website which will help<br/> in better ranking on Google where we will avoid duplicate data, <br/>optimize the images, make the website compatible with all the devices, simplify the URLs. </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section class="overlap-resp-web">
                    <div class="contanier">
                        <div class="row">
                            <div class="col-md-12">
                                <div id="overlap-image-third" class="image-overlap-resp-web ">
                                    <img src={responsive} />
                                </div>
                                <div id="overlap-content-third" class="content-overlap-resp-web ">
                                    <h1>Agile Development</h1>
                                    <p>We follow an agile pattern in our development process from<br/> scratch to end where we divide the development process<br/> into bits and pieces and work over them one by one. </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section class="overlap-att-web">
                    <div class="contanier">
                        <div class="row">
                            <div class="col-md-12">
                                <div id="overlap-image-second" class="image-overlap-att-web ">
                                    <img src={att} />
                                </div>
                                <div id="overlap-content-second" class="content-overlap-att-web ">
                                    <h1>Attractive & Professional Website</h1>
                                    <p>Attractive visual appearance and good ergonomics is essential to make the users stay on the website for long. We develop overload free home page, use photographs to tell a story, which also helps <br/>in increasing traffic. </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section class="overlap-user-web">
                    <div class="contanier">
                        <div class="row">
                            <div class="col-md-12">
                                <div id="overlap-image-third" class="image-overlap-user-web ">
                                    <img src={userFriendly} />
                                </div>
                                <div id="overlap-content-third" class="content-overlap-user-web ">
                                    <h1>Complete Source Code </h1>
                                    <p>We keep 100% Transparency with our clients and provide complete source code at the completion of the project. After the project is completed, we provide complete rights and ownership to the client. 

</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section class="overlap-proff-web">
                    <div class="contanier">
                        <div class="row">
                            <div class="col-md-12">
                                <div id="overlap-image-second" class="image-overlap-proff-web ">
                                    <img src={prof} />
                                </div>
                                <div id="overlap-content-second" class="content-overlap-proff-web ">
                                    <h1>Professional Web Content </h1>
                                    <p>We provide high quality, affordable web content writing service. We have an expert website writers across industries and niche who help in writing 100% original and unique content.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section class="overlap-speed-web">
                    <div class="contanier">
                        <div class="row">
                            <div class="col-md-12">
                                <div id="overlap-image-third" class="image-overlap-speed-web ">
                                    <img src={speed} />
                                </div>
                                <div id="overlap-content-third" class="content-overlap-speed-web ">
                                    <h1>Speed Optimization </h1>
                                    <p>Website speed is the first impression and helps in high return visits, low bounce rates, higher engagement and better user experience. We check your website speed on different devices and find the best solution to improve it. 

</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                <section id="service-homepage" style={{marginTop : '-1100px'}}>
                    <div class="container" >
                        <p class="new">Technology</p>
                        <hr />
                    </div>
                </section>

                {/* <section id="technology-web-development">
                    <div class="container" >

                        <div class="row">
                            <div class="col-md-4 col-sm-4 text-center">
                                <ScrollAnimation animateIn='slideInUp'>
                                    <div class="content-box-web-development-first" >
                                        <img src={internet} />
                                    </div>
                                </ScrollAnimation>
                            </div>
                            <div class="col-md-4 col-sm-4" >
                                <ScrollAnimation animateIn='slideInUp'>
                                    <div class="content-box-web-development-second">
                                        <img src={app} />
                                    </div>
                                </ScrollAnimation>
                            </div>
                            <div class="col-md-4 col-sm-4">
                                <ScrollAnimation animateIn='slideInUp'>
                                    <div class="content-box-web-development-third">
                                        <img src={react} />

                                    </div>
                                </ScrollAnimation>
                            </div>



                        </div>

                        <div class="row">


                            <div class="col-md-6 col-sm-6" >
                                <ScrollAnimation animateIn='slideInUp'>
                                    <div class="content-box-web-development-forth">
                                        <img src={blockchain} />
                                    </div>
                                </ScrollAnimation>
                            </div>

                            <div class="col-md-6 col-sm-6" >
                                <ScrollAnimation animateIn='slideInUp'>
                                    <div class="content-box-web-development-five">
                                        <img src={apple} />
                                    </div>
                                </ScrollAnimation>
                            </div>

                        </div>
                        <div class="row">


                            <div class="col-md-12 col-sm-12" >
                                <ScrollAnimation animateIn='slideInUp'>
                                    <div class="content-box-web-development-six">
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


                 <section id="technology-web-new" >
                    <div class="container" >
                        <div class="row">
                            <h1>Technology<br /> Stack</h1>
                            <img   className="line" src={internet} />
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



               {/* <section id="contact" style={{marginTop : '-70px'}}>
                    <div class="container ">
                        <div class="row">
                            <div class="col-md-6">
                                <h3 >CONTACT US</h3>
                                <h2 class="mt-3" >Let's Work Together and Start A New Project</h2>
                                <h5 class="mt-3">India</h5>
                                <p style={{fontFamily : 'Roboto'}} id="desktop-address-view"> Address - Plot No. 183, Sector-28, Faridabad, Haryana, 121008<br/>
                 <new style={{marginLeft : '66px' , fontFamily : 'Roboto'}}>A Block, Sector-46, Noida, Uttar Pradesh, 201303</new></p>
                                <p id="mobile-address-view"> Address : Plot No. 183, Sector-28,<br /> Faridabad, Haryana & A Block,<br /> Sector-46, Noida, Uttar Pradesh</p>
                                <p><strong style={{ fontWeight: 'bold' , color: "black"}}>Email</strong> - info@omkatech.com</p>
                                <p><strong style={{ fontWeight: 'bold' , color: "black"}}>Sales </strong>:  +91 97175 11913 (GLOBAL) <br/> <new style={{marginLeft : '48px'}}>+1 786 855 1172 (USA)</new></p>
                            </div>
                           
                            <div class="col-md-6">                           
                                <img src={img20} />
                            </div>
                           
                        </div>
                    </div>
                </section> */}

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

export default WebDevelopment;