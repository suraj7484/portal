import React, { Component } from 'react'
import Header from '../Includes/Header'
import Footer from '../Includes/Footer'
import ScrollAnimation from 'react-animate-on-scroll';
import Demo2 from '../../../src/assests/ident-soft.png'
import img from '../../../src/assests/ui-soft.png'
import img1 from '../../../src/assests/java-soft.png'
import img2 from '../../../src/assests/testing-soft.png'
import VirtualDesign from '../../../src/assests/lauch-soft.png'
import img19 from '../../../src/assests/new-banner-front.PNG'
import img11 from '../../../src/assests/complete-gaming-new.png'
import img12 from '../../../src/assests/superior-gaming-new.png'
import img13 from '../../../src/assests/user-gaming-new.png'
import freeCost from '../../../src/assests/free-cost-software-new.PNG'
import superrior from '../../../src/assests/superrior-quality-software-new.PNG'
import source from '../../../src/assests/source-software-new.PNG'
import user from '../../../src/assests/user-software-new.PNG'
import freeCostIcon from '../../../src/assests/free-cost-software-icon-new.PNG'
import internet from '../../assests/big-technolgy-soft.PNG'
import app from '../../assests/tech-soft-first.PNG'
import react from '../../assests/first-software-new-tech.png'
import blockchain from '../../assests/second-software-new-tech.png'
import sketch from '../../assests/third-software-new-tech.png'
import xd from '../../assests/forth-software-new-tech.png'
import figma from '../../assests/five-software-new-tech.png'
import invision from '../../assests/six-software-new-tech.png'
import img20 from '../../../src/assests/contact-us2.PNG'
import dummy from '../../assests/dummy-soft-software-new.JPG'
import iconShoose from '../../assests/icon-choose-us-mobile-new.PNG'

class SoftwareDevelopment extends Component {

    componentDidMount() {
        window.scrollTo(0, 0)
    }
    render() {
        return (
            <div>
                <Header {...this.props} />
                <section id="banner-software-dev" class="animated slideInDown">
                    <div class="container ">
                        <div class="row ">
                            <div class="col-md-6">
                                <h1>Software Development</h1>
                                <p>Get Custom Software Solutions <br/>for your Enterprise Business</p>
                                <div class="button-left-software">
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

                <section id="dummy-soft">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <img src={dummy} />
                            </div>
                        </div>
                    </div>
                </section>

                <section id="soft-choose">
                    <div class="container" >
                        <p class="newSoft">Why Choose OMKA TECH for your Enterprise Solutions</p>
                        <hr />
                    </div>
                </section>

                <section id="why-omka-software-page">
                    <div className="container">
                        <div className="row">
                            <div class="col-md-4 col-sm-4" >
                                <div class="why-omka-software-page-box1 " >
                                <img className = "sd-image-major" style={{marginTop : '30px'}} src={iconShoose} />
                                    <ScrollAnimation animateIn='zoomIn' >
                                        <h1>Automate your Business Processes</h1>
                                        <p>Switch from manual business management to automatic business process for more productivity. We help you in providing best solution where you can automate your business model like the CMS system. 

</p>
                                    </ScrollAnimation >
                                </div>
                            </div>

                            <div class="col-md-4 col-sm-4" >
                                <div class="why-omka-software-page-box2 " >
                                <img className = "sd-image-major" style={{marginTop : '30px'}} src={iconShoose} />
                                    <ScrollAnimation animateIn='zoomIn' >
                                        <h1>Grow Well and Grow Together</h1>
                                        <p>Our team will be in constant touch with you to understand your business model, your competitors, the structure of working and help you grow like the ERP solutions.</p>
                                    </ScrollAnimation >
                                </div>
                            </div>

                            <div class="col-md-4 col-sm-4" >

                                <div class="why-omka-software-page-box3 " >
                                <img className = "sd-image-major" style={{marginTop : '30px'}} src={iconShoose} />
                                    <ScrollAnimation animateIn='zoomIn' >
                                        <h1>Increase your Enterprise Efficiency</h1>
                                        <p>We use the OKR methodology which means that there will be certain objectives and key results which helps organizations to keep transparency in the work like CRM solutions</p>
                                    </ScrollAnimation >
                                </div>


                            </div>
                        </div>

                        <div className="row">
                            <div class="col-md-4 col-sm-4" >

                                <div class="why-omka-software-page-box4 " >
                                <img className = "sd-image-major" style={{marginTop : '70px'}} src={iconShoose} />
                                    <ScrollAnimation animateIn='zoomIn' >
                                        <h1>Optimize your Employee Potential</h1>
                                        <p>Easily monitor the employee performance by the HRMS portal. There will be different managers, employees who can constantly monitor the task given to them and  the areas of improvement.  </p>
                                    </ScrollAnimation >
                                </div>


                            </div>

                            <div class="col-md-4 col-sm-4" >

                                <div class="why-omka-software-page-box5 " >
                                <img className = "sd-image-major" style={{marginTop : '70px'}} src={iconShoose} />
                                    <ScrollAnimation animateIn='zoomIn' >
                                        <h1>Get Real Time Data Processing  </h1>
                                        <p>Our software will process the real time data where the system will automatically refresh itself and in no time it will be able to upload any changes/updates that have taken place like BPMS solutions.</p>
                                    </ScrollAnimation >
                                </div>


                            </div>

                            <div class="col-md-4 col-sm-4" >

                                <div class="why-omka-software-page-box6 " >
                                <img className = "sd-image-major" style={{marginTop : '70px'}} src={iconShoose} />
                                    <ScrollAnimation animateIn='zoomIn' >
                                        <h1 >Process Mapping and Security </h1>
                                        <p>We create a secure business model along with mapping solution for your business organization which is hosted on the client owned cloud server to ensure data security and easy accessibility. </p>
                                    </ScrollAnimation >
                                </div>


                            </div>
                        </div>


                    </div>
                </section>

                 <section id="work-homepage">
                    <div class="container" >
                        <p class="new new3">Software Solutions process</p>
                        <hr />
                    </div>
                </section>


                {/* <section id="software-page-simple" class="simple-div animated zoomIn mx-auto">
                    <div class="contanier">
                        <div class="row">
                            <div class="col-md-12">
                                <h1>Stop Running Behind Readymade Solution & Get <br />Custom Software To Boost Efficiency By 2X</h1>
                                <button class="btn-register-header animation-on-hover clickcustomform ">Get In Touch
            </button>
                            </div>
                        </div>
                    </div>
                </section> */}

                {/* <div id="arrowAnim">
  <div class="arrowSliding">
    <div class="arrow"></div>
  </div>
  <div class="arrowSliding delay1">
    <div class="arrow"></div>
  </div>
  <div class="arrowSliding delay2">
    <div class="arrow"></div>
  </div>
  <div class="arrowSliding delay3">
    <div class="arrow"></div>
  </div>
</div> */}

                <section class="overlap-second-soft">
                    <div class="contanier">
                        <div class="row">
                            <div class="col-md-12">
                                <div id="overlap-image-second" class="image-overlap-second-soft ">
                                    <img src={Demo2} />
                                </div>
                                <div id="overlap-content-second" class="content-overlap-second-soft ">
                                    <h1>1. Ideation</h1>
                                    <ul className="circle-list">
                                        <li className="items"> <p>Analyzing business scope</p></li>
                                        <li className="items"> <p>Finalizing app idea</p></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section class="overlap-third-ui-soft">
                    <div class="contanier">
                        <div class="row">
                            <div class="col-md-12">
                                <div id="overlap-image-third" class="image-overlap-third-ui-soft ">
                                    <img src={img} />
                                </div>
                                <div id="overlap-content-third" class="content-overlap-third-ui-soft ">
                                    <h1>2. UI/UX Designing</h1>
                                    <ul className="circle-list">
                                        <li className="items"><p>Finalizing user interface</p></li>
                                        <li className="items"><p>Wireframing</p></li>
                                    </ul>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section class="overlap-forth-development-soft">
                    <div class="contanier">
                        <div class="row">
                            <div class="col-md-12">
                                <div id="overlap-image-forth" class="image-overlap-forth-development-soft ">
                                    <img src={img1} />
                                </div>
                                <div id="overlap-content-forth" class="content-overlap-forth-development-soft ">
                                    <h1>3. Development</h1>
                                    <ul className="circle-list">
                                        <li className="items"> <p>Developing application code</p></li>
                                        <li className="items"> <p>Analytics development</p></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section class="overlap-five-test-soft">
                    <div class="contanier">
                        <div class="row">
                            <div class="col-md-12">
                                <div id="overlap-content-five" class="image-overlap-five-test-soft ">
                                    <img src={img2} />
                                </div>
                                <div id="overlap-content-five" class="content-overlap-five-test-soft ">
                                    <h1>4. Testing</h1>
                                    <ul className="circle-list">
                                        <li className="items"> <p>Mutiple device testing</p></li>
                                        <li className="items"> <p>UI/UX testing</p></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                <section class="overlap-six-launch-soft">
                    <div class="contanier">
                        <div class="row">
                            <div class="col-md-12">
                                <div id="overlap-image-six" class="image-overlap-six-launch-soft ">
                                    <img src={VirtualDesign} />
                                </div>
                                <div id="overlap-content-six" class="content-overlap-six-launch-soft">
                                    <h1>5. Launch & Marketing </h1>
                                    <ul className="circle-list">
                                        <li className="items"> <p>Performance testing & optimiztion</p></li>
                                        <li className="items"> <p>Performance on relevant platforms</p></li>
                                    </ul>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="banner-mobile-app-digital" style={{marginTop : '-600px'}}>
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

                {/* <section id="work-homepage" style={{background : '#09101f'}}>
                    <div class="container" >
                        <p class="new">Why Choose Us</p>
                        <hr />
                        <div class="row">
                            <div class="col-md-3 col-sm-3" >
                                <ScrollAnimation animateIn='zoomIn' >
                                    <div class="free-cost">
                                        <img class=" pic-1" src={img11} />
                                    </div>
                                </ScrollAnimation>
                                <div class="free-cost-content">
                                    <h4>Free Cost-Analysis</h4>
                                    <p class="more">
                                        The quote for the project is <br />
                                        free of cost . You can<button style={{ textAlign: 'center' }}>More</button>
                                    </p>
                                </div>
                            </div>

                            <div class="col-md-3 col-sm-3" >
                                <ScrollAnimation animateIn='zoomIn' >
                                    <div class="free-cost">
                                        <img class=" pic-1" src={img13} />
                                    </div>
                                </ScrollAnimation>
                                <div class="free-cost-content">
                                    <h4>Complete Source Code</h4>
                                    <p class="more">
                                        The quote for the project is <br />
                                        free of cost . You can<button>More</button>
                                    </p>
                                </div>
                            </div>

                            <div class="col-md-3 col-sm-3" >
                                <ScrollAnimation animateIn='zoomIn' >
                                    <div class="free-cost">
                                        <img class=" pic-1" src={img12} />
                                    </div>
                                </ScrollAnimation>
                                <div class="free-cost-content">
                                    <h4>User-Friendly Designs</h4>
                                    <p class="more">
                                        The quote for the project is <br />
                                        free of cost . You can<button>More</button>
                                    </p>
                                </div>
                            </div>

                            <div class="col-md-3 col-sm-3" >
                                <ScrollAnimation animateIn='zoomIn' >
                                    <div class="free-cost">
                                        <img class=" pic-1" src={img14} />
                                    </div>
                                </ScrollAnimation>
                                <div class="free-cost-content">
                                    <h4>Superior Quality</h4>
                                    <p class="more">
                                        The quote for the project is <br />
                                        free of cost . You can<button>More</button>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> */}

                 <section id="work-homepage">
                    <div class="container" >
                        <p class="new">Why Choose Us</p>
                        <hr />
                    </div>
                </section>

               <section id="why-choose-us-software-new">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-3">
                                <img className = "sd-card-image-main" style={{marginTop : '60px'}} src={freeCost} />
                                <h5 className = "sd-why-cu-h5" className = "sd-why-cu-h5" style={{color : 'white' , marginTop : '-264px' , fontSize : '16px' , textAlign : 'center', fontFamily : 'Roboto' , fontWeight : 'lighter'}}>Free Cost Analysis</h5>
                                <h4 className = "sd-card-h4" style={{fontSize : '16px' , marginTop : '120px', marginLeft : '25px', fontFamily : 'Roboto'}}>No fees to analyse your requirement and provide our suggestions. Free consultation where we suggest new ideas that help make your business a great success. </h4>
                                <img className = "sd-card-image-major major-major" style={{marginTop : '-375px' , marginLeft : '85px'}} src={freeCostIcon} />
                            </div>
                            <div className="col-md-3">
                                <img className = "sd-card-image-main" style={{marginTop : '60px'}} src={source} />
                                <h5 className = "sd-why-cu-h5" style={{color : 'white' , marginTop : '-264px' , fontSize : '16px' , textAlign : 'center', fontFamily : 'Roboto' , fontWeight : 'lighter'}}>Complete Source Code</h5>
                                <h4 className = "sd-card-h4-minor" style={{fontSize : '16px' , marginTop : '120px', marginLeft : '25px', fontFamily : 'Roboto'}}>We do not keep any ownership/credentials for the project. Once the project is complete, we provide the complete source code to the client.</h4>
                                <img className = "sd-card-image-major major-minor" style={{marginTop : '-375px' , marginLeft : '85px'}} src={img11} />
                            </div>
                            <div className="col-md-3">
                                <img className = "sd-card-image-main" style={{marginTop : '60px'}} src={user} />
                                <h5 className = "sd-why-cu-h5" style={{color : 'white' , marginTop : '-264px' , fontSize : '16px' , textAlign : 'center', fontFamily : 'Roboto' , fontWeight : 'lighter'}}>User- Friendly Designs </h5>
                                <h4 className = "sd-card-h4" style={{fontSize : '16px' , marginTop : '120px', marginLeft : '25px', fontFamily : 'Roboto'}}>Our designs are unique yet attractive and designing is done in such a way so that it can be used effortlessly. We do not limit our designs. </h4>
                                <img className = "sd-card-image-major major-minor" style={{marginTop : '-345px' , marginLeft : '85px'}} src={img13} />
                            </div>
                            <div className="col-md-3">
                                <img className = "sd-card-image-main" style={{marginTop : '60px'}} src={superrior} />
                                <h5 className = "sd-why-cu-h5" style={{color : 'white' , marginTop : '-264px' , fontSize : '16px' , textAlign : 'center', fontFamily : 'Roboto' , fontWeight : 'lighter'}}>Superior Quality </h5>
                                <h4 className = "sd-card-h4" style={{fontSize : '16px' , marginTop : '120px', marginLeft : '25px', fontFamily : 'Roboto'}}>Our experience and professional team develop superior quality code and mention comments while writing so that it is easy for anyone to understand the code.</h4>
                                <img className = "sd-card-image-minor" style={{marginTop : '-375px' , marginLeft : '85px'}} src={img12} />
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

                <section id="technology-mobile-app" >
                    <div class="container" >
                        <div class="row">
                            <h1>Technology<br /> Stack</h1>
                            <img className="line" src={internet} />                           
                        </div>
                        <div children="row">
                        <div className="col-md-8">
                                <img id="ps" className="ps animated slideInDown" src={react} />
                                <img className="ai" src={blockchain} />
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
                 <new style={{marginLeft : '66px' ,  fontFamily : 'Roboto'}}>A Block, Sector-46, Noida, Uttar Pradesh, 201303</new></p>
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

export default SoftwareDevelopment;