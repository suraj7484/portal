import React, { Component } from 'react'
import ScrollAnimation from 'react-animate-on-scroll';
import Header from '../Includes/Header'
import Footer from '../Includes/Footer'
import trafic from '../../../src/assests/seo-trafic.PNG'
import seo from '../../../src/assests/seo.PNG'
import smo from '../../../src/assests/smo-para.png'
import content from '../../../src/assests/content-para.png'
import ppc from '../../../src/assests/ppc-para.png'
import smm from '../../../src/assests/smm-para.png'
import web from '../../../src/assests/web-design-seo.png'
import seoSeo from '../../../src/assests/seo-seo.png'
import semSeo from '../../../src/assests/sem-seo.png'
import smmSeo from '../../../src/assests/smm-seo.png'
import internet from '../../assests/big-technolgy-soft.PNG'
import react from '../../assests/first-seo-tech-new.png'
import blockchain from '../../assests/second-seo-tech-new.png'
import sketch from '../../assests/thirdseo-tech-new.png'
import xd from '../../assests/forth-seo-tech-new.png'
import figma from '../../assests/five-seo-tech-new.png'
import img20 from '../../../src/assests/contact-us2.PNG'
import img19 from '../../../src/assests/new-banner-front.PNG'
import buffer from '../../../src/assests/buffer-seo-digital-new.png'

class SeoDigital extends Component {

    componentDidMount() {
        window.scrollTo(0, 0)
    }
    render() {
        return (
            <div>
                <Header {...this.props} />

                <section id="banner-digital" class="animated slideInDown">
                    <div class="container ">
                        <div class="row ">
                            <div class="col-md-6">
                                <h1>Digital Marketing</h1>
                                <p>More traffic, more conversations,<br/><strong style={{color : '#ff511f'}}> more results</strong></p>
                                <div class="button-left-digital">
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

                <section id="seo-trafic">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <h2>Our Digital Marketing Services are unique to the industry with verifiable results</h2>
                                {/* <h3>more results</h3> */}
                                <p>We offer a wide range of digital marketing services to our clients, enabling them to select the ones that are the best for their business.  We don't offer a 'one-size-fits-all' solution because every business is unique and no one wants to follow same process like others. Our SEO team has a track record of improving the organic ranking of a website with strategic on- and offsite marketing tactics.</p>
                                <div class="button-left-seo-trafic">
                                    <button class="btn-register-header animation-on-hover clickcustomform ">Get In Touch</button>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <img src={trafic} />
                            </div>
                        </div>
                    </div>
                </section>

                {/* <section id="simple-digital-banner" class="simple-div animated zoomIn mx-auto">
                    <div class="contanier">
                        <div class="row">
                            <div class="col-md-12">
                                <h1>Result-Proven Marketing Strategies Drive Monumental Growth</h1>
                                <p>Our Digital Marketing Services are unique to the industry with verifiable results.Every <br />
                                    digital marketing strategy would likely comprise various digital marketing channels.</p>
                            </div>
                        </div>
                    </div>
                </section> */}

                <section id="work-homepage" style={{marginTop : '-200px'}}>
                    <div class="container" >
                        <p class="new">Our Digital Marketing Services</p>
                        <hr />
                    </div>
                </section>

                <section class="overlap-seo">
                    <div class="contanier">
                        <div class="row">
                            <div class="col-md-12">
                                <div id="overlap-image-second" class="image-overlap-seo ">
                                    <img src={seo} />
                                </div>
                                <div id="overlap-content-second" class="content-overlap-seo ">
                                    <h1>Search Engine Optimization (SEO)</h1>
                                    <p>Search Engine Optimization (SEO) is the process which
helps to increase rank of website on major search engines
which results in increase site traffic and revenue. Our SEO
services are unique to the industry with visible results.
Our SEO team has a track record of improving the organic
ranking of a website with unique and different strategies.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section class="overlap-smo">
                    <div class="contanier">
                        <div class="row">
                            <div class="col-md-12">
                                <div id="overlap-image-third" class="image-overlap-smo ">
                                    <img src={smo} />
                                </div>
                                <div id="overlap-content-third" class="content-overlap-smo ">
                                    <h1>Search Media Optimization (SMO)</h1>
                                    <p>Social Media plays a vital role in marketing these days. It
is one of the top and most effective strategies used by
businesses looking to maximize their reach online is
Social Media Optimization (SMO). It is about strategically
creating,building and maximizing your social media plan to
connect With your target audience.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section class="overlap-content">
                    <div class="contanier">
                        <div class="row">
                            <div class="col-md-12">
                                <div id="overlap-image-second" class="image-overlap-content ">
                                    <img src={content} />
                                </div>
                                <div id="overlap-content-second" class="content-overlap-content ">
                                    <h1>Content Marketing</h1>
                                    <p>Our content marketing services help you achieve your
business and marketing goals. We leverage engaging
content to help you connect with users. Whether that’s
generating leads and driving sales, or driving traffic and
increasing awareness, we’re a content marketing partner
that help you make it possible</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section class="overlap-ppc">
                    <div class="contanier">
                        <div class="row">
                            <div class="col-md-12">
                                <div id="overlap-image-third" class="image-overlap-ppc ">
                                    <img src={ppc} />
                                </div>
                                <div id="overlap-content-third" class="content-overlap-ppc ">
                                    <h1>Pay-Per-Click Advertising</h1>
                                    <p>PPC helps set realistic campaign goals based on your
unique needs and budget. It helps identify powerful new
revenue streams for your business. It brings more traffic
to your site in real time.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section class="overlap-smm">
                    <div class="contanier">
                        <div class="row">
                            <div class="col-md-12">
                                <div id="overlap-image-second" class="image-overlap-smm ">
                                    <img src={smm} />
                                </div>
                                <div id="overlap-content-second" class="content-overlap-smm ">
                                    <h1>Social Media Marketing (SMM)</h1>
                                    <p>Social Media Marketing has grown a lot over the past few
years and today it is a very powerful tactic in any digital
marketing campaign. Utilizing different social media
platforms helps you connect with new customers and
build loyalty with current followers. Social media platforms
provide amazing opportunities.</p>
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
                                    <button type="button" onClick={() => { this.props.history.push('contact-us'); }} class="btn-register-header animation-on-hover clickcustomform ">Let's Connect</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>



                <section id="web-design-seo">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <h1>Web Design</h1>
                                <h2>Crafting Experiences That <br />Brings Results</h2>
                                <ul className = "seo-ul1">
                                    <li><p>Convey your brand’s message & increase brand’s <br/>visibility using intuitive UI/ UX designs crafted <br/>by our in-house design studio, Allurive.</p></li>
                                    <li><p>Give a seamless experience to your customers<br />
                                        with mobile-first websites which drives more<br />
                                        engagement & sales opportunities.</p></li>
                                </ul>
                            </div>
                            <div className="col-md-6">
                                <img src={web} />
                            </div>
                        </div>
                    </div>
                </section>

                <section id="seo-seo">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <img src={seoSeo} />
                            </div>
                            <div className="col-md-6">
                                <h1>SEO</h1>
                                <h2>Increasing Traffic Organically</h2>
                                <ul className = "seo-ul" style={{ marginLeft: '120px' }}>
                                    <li><p>Enhance click-through rates with optimized meta tags, images, content etc. for your website.</p></li>
                                    <li><p>We help you drive high quality traffic from relevant back-links, which is though time-consuming process yet promises great results.</p></li> </ul>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="sem-seo">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <h1>SEM</h1>
                                <h2>Reach Your Audience Faster<br /> Than Ever</h2>
                                <ul className = "seo-ul1">
                                    <li><p>Connect with the right audience at the right time through advertising campaigns on the right platform</p></li>
                                    <li><p>Boost your presence online with robust search engine marketing campaigns, in a shorter span.</p></li> </ul>
                            </div>
                            <div className="col-md-6">
                                <img src={semSeo} />
                            </div>
                        </div>
                    </div>
                </section>

                <section id="smm-seo">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <img src={smmSeo} />
                            </div>
                            <div className="col-md-6">
                                <h1>SMM</h1>
                                <h2>Grow YOur Brand With<br /> Social Media</h2>
                                <ul className = "seo-ul" style={{ marginLeft: '120px' }}>
                                    <li><p>Make your brand heard & shared with social media strategy/campaign crafted after in-depth study of your business goals.</p></li>
                                    <li><p>Boost customer engagement & satisfaction, offering them content that they would love to share.</p></li>  </ul>
                            </div>
                        </div>
                    </div>
                </section>


                <section id="technology-seo-digital">
                    <div class="container" >
                        <p class="newSeo">Technology</p>
                        <hr />
                    </div>
                </section>

                {/* <section id="technology-seo">
                    <div class="container" >

                        <div class="row">
                            <div class="col-md-4 col-sm-4 text-center">
                                <ScrollAnimation animateIn='slideInUp'>
                                    <div class="content-box-seo-wordpress" >
                                        <img src={wordpress} />
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


                 <section id="technology-seo-new">
                    <div class="container" >
                        <div class="row">
                            <h1>Technology<br /> Stack</h1>
                            <img className="line" src={internet} />
                        </div>
                        <div children="row">
                            <div className="col-md-8">
                                <img id="ps" className="ps animated slideInDown" src={xd} />
                                <img className="ai" src={buffer} />
                            </div>
                        </div>
                        <div children="row">
                            <div className="col-md-8">

                                <img id="sketch" className="sketch animated bounceInLeft" src={figma} />

                            </div>
                        </div>
                        <div children="row">
                            <div className="col-md-8">
                                <img id="xd" className="xd animated slideInDown" src={react} />
                            </div>
                        </div>
                        
                        <div children="row">
                            <div className="col-md-8">
                                <img id="figma" className="figma animated bounceInLeft" src={sketch} />
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

export default SeoDigital;