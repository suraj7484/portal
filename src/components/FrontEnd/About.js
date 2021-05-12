import React, { Component } from 'react'
import Typing from 'react-typing-animation';
import Header from '../Includes/Header'
import Footer from '../Includes/Footer'
import about from '../../assests/expert-about.png'
import img20 from '../../../src/assests/contact-us2.PNG'
import ScrollAnimation from 'react-animate-on-scroll';
import line from '../../assests/line.PNG'
import about2 from '../../assests/ui-about.png'
import about3 from '../../assests/mobile-about.png'
import about4 from '../../assests/web-about.png'
import about5 from '../../assests/digital-about.png'
import about6 from '../../assests/branding-about.png'
import about7 from '../../assests/erp-about.png'
import about8 from '../../assests/gaming-about.png'
import about9 from '../../assests/marketing-about.png'
import about10 from '../../assests/crypto-about.png'
import about11 from '../../assests/ai-about.png'
import about12 from '../../assests/line-new-our-expertise.png'
import img19 from '../../../src/assests/new-banner-front.PNG'

class About extends Component {

    componentDidMount() {
        window.scrollTo(0, 0)
    }

    render() {
        return (
            <div>
                <Header {...this.props} />
                <section id="banner-about" >
                    <div class="container" id="container-banner">
                        <div class="row ">
                            <div id="banner-content-homepage" class="col-md-12">
                                <Typing >
                                    <Typing.Speed ms={100} />
                                    <h1>Our Core Expertise</h1>
                                </Typing>
                                <div class="button-left-about">
                                    <button type="button" onClick={() => { this.props.history.push('Contact-us'); }} class="btn" style={{ fontSize: '20px', fontFamily: 'Roboto' }}>Talk to an Expert</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="expert-about">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <h1>“The World revolves around Technology”</h1>
                                <p>Cloud Computing, IoT, Application Development, Application Integration, Project Management, Mobile Applications, Reports are only a few areas of our expertise. Due to our rich experience in this industry and with the help our skilled team, we are able to develop innovative technology solutions to meet the business needs of our clients. </p>
                            </div>
                            <div className="col-md-6 " >
                                <ScrollAnimation animateIn='zoomIn' >
                                    <img src={about} />
                                </ScrollAnimation>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="about-tough-design-line" style={{marginTop : '50px'}}>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <img className = "line-image" src={line} />
                            </div>
                        </div>
                    </div>
                </section>

                <section id="about-tough-design">
                    <div className="container">
                        <div className="row">
                            <div id="ui-about-tough" className="col-md-4">
                                <h1>01</h1>
                                <ScrollAnimation animateIn='zoomIn' >
                                    <img src={about2} />
                                </ScrollAnimation>
                                <h2>UI/UX Designs</h2>
                                <p>We Design as per the client’s taste and preference. Our professional designers design the UI/UX in such a way that it looks more attractive, unique and friendly.</p>
                                {/* <img src={about12} /> */}
                            </div>
                            <div id="mobile-about-tough" className="col-md-4">
                                <h1>02</h1>
                                <ScrollAnimation animateIn='zoomIn' >
                                    <img src={about3} />
                                </ScrollAnimation>
                                <h2>Mobile Application <br/>Development</h2>
                                <p>We do Native and Hybrid Mobile Application development where we take our clients business idea and convert it into reality. </p>
                            </div>
                            <div id="web-about-tough" className="col-md-4">
                                <h1>03</h1>
                                <ScrollAnimation animateIn='zoomIn' >
                                    <img src={about4} />
                                </ScrollAnimation>
                                <h2>Web Development</h2>
                                <p>Website is important for every business big or small for representation in today’s world. We at OMKA TECH provide consultation with just your business model and help you in establishing a place on internet.</p>
                            </div>
                        </div>

                        <div className="row">
                            <div id="digital-about-tough" className="col-md-4">
                                <h1>04</h1>
                                <ScrollAnimation animateIn='zoomIn' >
                                    <img src={about5} />
                                </ScrollAnimation>
                                <h2>Digital Marketing<br/> Services</h2>
                                <p>Our team does a thorough research on every single project that includes Client’s business website, their industry, market and competition along with the target audience. We prepare online marketing strategy for your online presence. </p>
                            </div>
                            <div id="brand-about-tough" className="col-md-4">
                                <h1>05</h1>
                                <ScrollAnimation animateIn='zoomIn' >
                                    <img src={about6} />
                                </ScrollAnimation>
                                <h2>Branding</h2>
                                <p>We help bring your business become a brand, built just for you. We help you in doing correct marketing to launch your business and make it a brand.	</p>
                            </div>
                            <div id="erp-about-tough" className="col-md-4">
                                <h1>06</h1>
                                <ScrollAnimation animateIn='zoomIn' >
                                    <img src={about7} />
                                </ScrollAnimation>
                                <h2>ERP<br/> Implementation</h2>
                                <p>We implement various ERPs for School, Offices and Staff Management. We have a rich experience in this industry.</p>
                            </div>
                        </div>

                        <div className="row">
                            <div id="gaming-about-tough" className="col-md-4">
                                <h1>07</h1>
                                <ScrollAnimation animateIn='zoomIn' >
                                    <img src={about8} />
                                </ScrollAnimation>
                                <h2>Gaming <br/> Development</h2>
                                <p>We have developed various games for our clients. We believe Players are the foundation of our community and it’s for them that we continue evolving our games</p>
                            </div>
                            <div id="marketing-about-tough" className="col-md-4">
                                <h1>08</h1>
                                <ScrollAnimation animateIn='zoomIn' >
                                    <img src={about9} />
                                </ScrollAnimation>
                                <h2>Marketing</h2>
                                <p>It is something which can’t be ignored. If Marketing is done right, it can lead any business to success. We sit with our client’s and understand their business and the target audience and with the help of our experience we assist them in the right direction for marketing.</p>
                            </div>
                            <div id="crypto-about-tough" className="col-md-4">
                                <h1>09</h1>
                                <ScrollAnimation animateIn='zoomIn' >
                                    <img src={about11} />
                                </ScrollAnimation>
                                <h2>AI/IOT</h2>
                                <p> Artificial Intelligence is the future of IT. We provide machines and software that think exactly like humans and mimic their exact actions. We build system that exchange data over internet between devices</p>
                            </div>
                        </div>

                        {/* <div className="row">
                            <div id="ai-about-tough" className="col-md-4">
                                <h1>10</h1>
                                <ScrollAnimation animateIn='zoomIn' >
                                    <img src={about11} />
                                </ScrollAnimation>
                                <h2>AI/IOT</h2>
                                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                            </div>

                        </div> */}
                    </div>
                </section>

                
                <section id="banner-mobile-app-digital">
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


                {/* <section id="contact" >
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

                  <section id="contact" >
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

export default About;