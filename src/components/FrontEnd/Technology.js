import React, { Component } from 'react'
import Header from '../Includes/Header'
import Footer from '../Includes/Footer'
import img20 from '../../../src/assests/contact-us2.PNG'
import tech from '../../assests/our technology-new.PNG'
import technology from '../../../src/assests/design-technolgy-new.png'
import Adobe from '../../../src/assests/ai-technolgy-new.PNG'
import AdobeEffects from '../../../src/assests/ae-technolgy-new.PNG'
import Azure from '../../../src/assests/azure-technolgy-new.PNG'
import sketch from '../../../src/assests/sketch-technolgy-new.PNG'
import invision from '../../../src/assests/invision-technolgy-new.PNG'
import AngularJS from '../../../src/assests/angular-software-new.PNG'
import Java from '../../../src/assests/java-software-new.PNG'
import Swift from '../../../src/assests/shift-software-new.PNG'
import C from '../../../src/assests/csoftware-new.PNG'
import PHP from '../../../src/assests/php-software-new.PNG'
import SQL from '../../../src/assests/sql-software-new.PNG'
import mongo from '../../../src/assests/mongoDB-technology.png'
import dynamo from '../../../src/assests/DYNAMODB-technology.png'
import MySql from '../../../src/assests/MYSQL-technology.png'
import firebase from '../../../src/assests/FIREBASE-technology.png'
import iconShoose from '../../assests/icon-choose-us-mobile-new.PNG'


class Technology extends Component {

    componentDidMount() {
        window.scrollTo(0, 0)
    }
    render() {
        return (
            <div>
                <Header {...this.props} />

                <section id="banner-technology" >
                    <div class="container" id="container-banner">
                        <div class="row ">
                            <div id="banner-content-homepage" class="col-md-6">

                                <h1>Our Technologies</h1>

                                <div class="button-left-about-us">
                                    <button type="button" class="btn" onClick={() => {this.props.history.push('contact-us')}} style={{ fontSize: '20px', fontFamily: 'Roboto' }}>Talk to an Expert</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="expert-about-us">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <h1 className = "technoloy-main-h1" style={{fontFamily : 'roboto' , fontWeight : '700'}}>Our Technologies</h1>
                                <p className = "technoloy-main-p" style={{fontFamily : 'roboto' , fontSize : '18px' , marginTop : '20px'}}>“Technology is considered to be extremely
   important in any project because it provides
   faster and more efficient methods of getting a
   job done. The reason for Omka Tech being a Top
   Web and Mobile App development company is
   that our team know very well that how to blend
   the trend with innovative nations. We have a rich
   experience of different programming knowledge
   along with the modern tools that are crucial for
   Designing, Development, and Testing. Our rich
   experience makes us capable of proving what you
   exactly want.”</p>
                            </div>
                            <div className="col-md-6 " >

                                <img src={tech} />
                            </div>
                        </div>
                    </div>
                </section>

                <section id="service-technology">
                    <div class="container" >
                        <p class="newTechnology">Technologies that we use for <strong style={{ color: '#ff511f' }}>Web Development</strong></p>
                        <hr />
                        <h5 style={{fontFamily : 'roboto' , fontWeight : '400'}}>We use the most secure and preffered technology depending upon the type of your <br />business and need</h5>
                    </div>
                </section>

                <section id="technology-web-developmen">
                    <div className="container">
                        <div className="row">
                            <div class="col-md-4 col-sm-4" >
                                <div class="process-technolgy " >
                                <img className = "technology-types-image" style={{marginTop : '30px'}} src={iconShoose} />
                                    <h1>Laravel</h1>
                                    <p>Laravel is a robust PHP framework,
with expressive designed and elegant
syntax to create full-functional advan-
ced web applications.</p>
                                </div>
                            </div>

                            <div class="col-md-4 col-sm-4" >
                                <div class="process-technolgy2 " >
                                <img className = "technology-types-image" style={{marginTop : '30px'}} src={iconShoose} />
                                    <h1>Code Igniter</h1>
                                    <p>CodeIgniter is an open-source platform
for the quick dynamic website develop-
ment with PHP, it is build for coders who
need a flexible and elegant syntax to
create full-functional web panel.</p>
                                </div>
                            </div>

                            <div class="col-md-4 col-sm-4" >

                                <div class="process-technolgy3 " >
                                <img className = "technology-types-image" style={{marginTop : '30px'}} src={iconShoose} />
                                    <h1>WordPress</h1>
                                    <p>Wordpress is an open source content
managment tool based on PHP and
Mysql.Wordpress is used to build robust
and attractive Web pages.</p>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div class="col-md-4 col-sm-4" >
                                <div class="process-technolgy4 " >
                                <img className = "technology-types-image" style={{marginTop : '30px'}} src={iconShoose} />
                                    <h1>Magento</h1>
                                    <p>Magento is an open source technology
ecommerce platform which provides
online vendor with a flexible shopping
experiences.</p>
                                </div>
                            </div>

                            <div class="col-md-4 col-sm-4" >
                                <div class="process-technolgy5 " >
                                <img className = "technology-types-image" style={{marginTop : '30px'}} src={iconShoose} />
                                    <h1>Angular js</h1>
                                    <p>Wordpress is an open source content
managment tool based on PHP and
Mysql.Wordpress is used to build robust
and attractive Web pages.</p>
                                </div>
                            </div>

                            <div class="col-md-4 col-sm-4" >
                                <div class="process-technolgy6 " >
                                <img className = "technology-types-image" style={{marginTop : '30px'}} src={iconShoose} />
                                    <h1>Ionic</h1>
                                    <p>Ionic is the open-source SDK application
development framework that enables to
build top quality hybrid mobile.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="service-technology">
                    <div class="container" >
                        <p class="newTechnology">Technologies that we use for <strong style={{ color: '#ff511f' }}>Designing</strong></p>
                        <hr />
                        <h5 style={{fontFamily : 'roboto' , fontWeight : '400'}}>Design impacts how your audience perceives your brand. A good design helps<br />you keep your leads on your page.</h5>
                    </div>
                </section>

                <section id="design-technology">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4">
                                <img className = "technology-for-sd-image" style={{ marginLeft: '130px', marginTop: '20px' }} src={technology} />
                                <h2 className = "technologies-for-sd-h2" style={{ marginLeft: '120px', marginTop: '10px', fontSize: '20px',fontFamily : 'roboto' , fontWeight : '400' }}>Adobe Photoshop</h2>
                            </div>
                            <div className="col-md-4">
                                <img className = "technology-for-sd-image" style={{ marginLeft: '130px', marginTop: '20px' }} src={Adobe} />
                                <h2 className = "technologies-for-sd-h2" style={{ marginLeft: '120px', marginTop: '10px', fontSize: '20px',fontFamily : 'roboto' , fontWeight : '400' }}>Adobe Illustrator</h2>
                            </div>
                            <div className="col-md-4">
                                <img className = "technology-for-sd-image" style={{ marginLeft: '130px', marginTop: '20px' }} src={AdobeEffects} />
                                <h2 className = "technologies-for-sd-h2" style={{ marginLeft: '120px', marginTop: '10px', fontSize: '20px',fontFamily : 'roboto' , fontWeight : '400' }}>Adobe After Effects</h2>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-4">
                                <img className = "technology-for-sd-image" style={{ marginLeft: '130px', marginTop: '30px' }} src={sketch} />
                                <h2 className = "technologies-for-sd-h2" style={{ marginLeft: '130px', marginTop: '10px', fontSize: '20px',fontFamily : 'roboto' , fontWeight : '400' }}>Sketch Effects</h2>
                            </div>
                            <div className="col-md-4">
                                <img className = "technology-for-sd-image" style={{ marginLeft: '130px', marginTop: '30px' }} src={Azure} />
                                <h2 className = "technologies-for-sd-h2 technology-h2-minor" style={{ marginLeft: '170px', marginTop: '10px', fontSize: '20px',fontFamily : 'roboto' , fontWeight : '400' }}>Azure</h2>
                            </div>
                            <div className="col-md-4">
                                <img className = "technology-for-sd-image" style={{ marginLeft: '130px', marginTop: '30px' }} src={invision} />
                                <h2 className = "technologies-for-sd-h2 technology-h2-minor" style={{ marginLeft: '160px', marginTop: '10px', fontSize: '20px',fontFamily : 'roboto' , fontWeight : '400' }}>InVsion</h2>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="service-technology">
                    <div class="container" >
                        <p class="newTechnology">Technologies that we use for <strong style={{ color: '#ff511f' }}>Mobile Application Development</strong></p>
                        <hr />
                        <h5 style={{fontFamily : 'roboto' , fontWeight : '400'}}>Speed and Safety are the two components we take care while choosing <br />Mobile App Technology depending upon the need.</h5>
                    </div>
                </section>

                <section id="technology-mobile-developmet">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4">
                                <div class="process-technolgy " >
                                <img className = "technology-types-image" style={{marginTop : '30px'}} src={iconShoose} />
                                    <h1>Native</h1>
                                    <p>We equipped with cutting-edge technology to customize native android
application according to the trending
customers business requirements.</p>
                                </div>
                            </div>
                            <div class="col-md-4 col-sm-4" >
                                <div class="process-technolgy2 " >
                                <img className = "technology-types-image" style={{marginTop : '30px'}} src={iconShoose} />
                                    <h1>Unity</h1>
                                    <p>Unity is the robust game development
platform to build higher quality of 3D
and 2D games.</p>
                                </div>
                            </div>

                            <div class="col-md-4 col-sm-4" >

                                <div class="process-technolgy3 " >
                                <img className = "technology-types-image" style={{marginTop : '30px'}} src={iconShoose} />
                                    <h1>Hybrid</h1>
                                    <p>Hybrid application is a mixture of
modules, technology and approaches,
which can accicble on both website
and on mobile solution.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4">
                                <div class="process-technolgy " >
                                <img className = "technology-types-image" style={{marginTop : '30px'}} src={iconShoose} />
                                    <h1>PhoneGap</h1>
                                    <p>It is an open source platform for buil-
ding cross-platform applications with
standards technologies like JS,HTML,
CSS..</p>
                                </div>
                            </div>
                            <div class="col-md-4 col-sm-4" >
                                <div class="process-technolgy2 " >
                                <img className = "technology-types-image" style={{marginTop : '30px'}} src={iconShoose} />
                                    <h1>Swift</h1>
                                    <p>Swift is a robust and scalable program-
ming for mac OS, iOS, watch OS and
also supports all IOS platforms.</p>
                                </div>
                            </div>

                            <div class="col-md-4 col-sm-4" >

                                <div class="process-technolgy3 " >
                                <img className = "technology-types-image" style={{marginTop : '30px'}} src={iconShoose} />
                                    <h1>Ionic</h1>
                                    <p>Ionic is the open-source SDK application
development framework that enables to
build top quality hybrid mobile.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="service-technology">
                    <div class="container" >
                        <p class="newTechnology">Technologies that we use for <strong style={{ color: '#ff511f' }}>Software Development</strong></p>
                        <hr />
                        <h5 style={{fontFamily : 'roboto' , fontWeight : '400'}}> Create your Cryptoigraphy that is the essentail for organistions on the Internet<br />as the future of money is digital currency</h5>
                    </div>
                </section>

                <section id="design-technology">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4 technology-for-sd">
                                <img className = "technology-for-sd-image" style={{ marginLeft: '130px', marginTop: '20px' }} src={AngularJS} />
                                <h2 className = "technology-for-sd-h2" style={{ marginLeft: '150px', marginTop: '10px', fontSize: '20px',fontFamily : 'roboto' , fontWeight : '400' }}>AngularJS</h2>
                            </div>
                            <div className="col-md-4 technology-for-sd">
                                <img className = "technology-for-sd-image" style={{ marginLeft: '130px', marginTop: '20px' }} src={Java} />
                                <h2 className = "technology-for-sd-h2" style={{ marginLeft: '170px', marginTop: '10px', fontSize: '20px', fontFamily : 'roboto' , fontWeight : '400' }}>Java</h2>
                            </div>
                            <div className="col-md-4 technology-for-sd">
                                <img className = "technology-for-sd-image" style={{ marginLeft: '130px', marginTop: '20px' }} src={Swift} />
                                <h2 className = "technology-for-sd-h2" style={{ marginLeft: '170px', marginTop: '10px', fontSize: '20px', fontFamily : 'roboto' , fontWeight : '400' }}>Swift</h2>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-4 technology-for-sd">
                                <img className = "technology-for-sd-image" style={{ marginLeft: '130px', marginTop: '30px' }} src={C} />
                                <h2 className = "technology-for-sd-h2" style={{ marginLeft: '170px', marginTop: '10px', fontSize: '20px', fontFamily : 'roboto' , fontWeight : '400' }}>C++</h2>
                            </div>
                            <div className="col-md-4 technology-for-sd">
                                <img className = "technology-for-sd-image" style={{ marginLeft: '130px', marginTop: '30px' }} src={PHP} />
                                <h2 className = "technology-for-sd-h2" style={{ marginLeft: '170px', marginTop: '10px', fontSize: '20px', fontFamily : 'roboto' , fontWeight : '400' }}>PHP</h2>
                            </div>
                            <div className="col-md-4 technology-for-sd">
                                <img className = "technology-for-sd-image" style={{ marginLeft: '130px', marginTop: '30px' }} src={SQL} />
                                <h2 className = "technology-for-sd-h2" style={{ marginLeft: '170px', marginTop: '10px', fontSize: '20px',fontFamily : 'roboto' , fontWeight : '400' }}>SQL</h2>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="service-technology">
                    <div class="container" >
                        <p class="newTechnology">Technologies that we use for <strong style={{ color: '#ff511f' }}>Database</strong></p>
                        <hr />
                        <h5 style={{fontFamily : 'roboto' , fontWeight : '400'}}>Highly Secure</h5>
                    </div>
                </section>

                <section id="database-technology">
                    <div className="contanier">
                        <div className="row">
                            <div className="col-md-6">
                                <div class="free-cost-technology">
                                    <img style={{ marginLeft: '10px', marginTop: '0px' }} src={mongo} />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div class="free-cost-technology-dynamo">
                                    <img style={{ marginLeft: '10px', marginTop: '0px' }} src={dynamo} />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <div class="free-cost-technology-mysql">
                                    <img style={{ marginLeft: '10px', marginTop: '0px' }} src={MySql} />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div class="free-cost-technology-firebase">
                                    <img style={{ marginLeft: '10px', marginTop: '0px' }} src={firebase} />
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
                                <p id="desktop-address-view" style={{fontFamily : 'Roboto'}}> Address - Plot No. 183, Sector-28, Faridabad, Haryana, 121008<br/>
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

export default Technology;