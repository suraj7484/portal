import React, { Component } from 'react'
import Header from '../Includes/Header'
import Footer from '../Includes/Footer'
import img20 from '../../../src/assests/contact-us2.PNG'
import portfolioBanner from '../../assests/portfolio-banner.PNG'
import portfolioWeb from '../../assests/portfolio-web.PNG'
import portfolioMobile from '../../assests/portfolio-mobile.PNG'
import portfolioSoftware from '../../assests/portfolio-software.PNG'
import portfolioGaming from '../../assests/portfolio-Gamingk.PNG'
import portfolioDigital from '../../assests/portfolio-Digital.PNG'
import arrow from '../../assests/arrow-portfolio.PNG'

class Portfolio extends Component {
    componentDidMount() {
        window.scrollTo(0, 0)
    }
    
  
    render() {
        return (
            <div>
                <Header {...this.props} />

                <section id="portfolio-banner" >
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <h1>Real results for all kinds of clients.</h1>
                                <h5>Omkatech is here to help you find the <br /> state-of-the-art technology services<br />you need.</h5>
                                <div class="button-left-portfolio">
                                    <button class="btn-register-header animation-on-hover clickcustomform ">Get In Touch</button>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <img src={portfolioBanner} />
                            </div>
                        </div>
                    </div>
                </section>

                

                <section id="portfolio-web" >
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <h1>Website Development</h1>
                                <h5>Omkatech is here to help you find the <br /> state-of-the-art technology services<br />you need.</h5>
                                <div class="button-left-portfolio-web">
                                    <button onClick={() => {this.props.history.push('WebsitePortfolio')}} className="border border-white">View More<img style={{marginTop : '-2px', marginLeft :'10px'}} src={arrow} /></button>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <img src={portfolioWeb} />
                            </div>
                        </div>
                    </div>
                </section>

                <section id="portfolio-Mobile" >
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <img src={portfolioMobile} />
                            </div>
                            <div className="col-md-6">
                                <h1>Mobile App Development</h1>
                                <h5>Omkatech is here to help you find the <br /> state-of-the-art technology services<br />you need.</h5>
                                <div class="button-left-portfolio-web">
                                    <button className="border border-white">View More<img style={{marginTop : '-2px', marginLeft :'10px'}} src={arrow} /></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="portfolio-Software" >
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <h1>Software Development</h1>
                                <h5>Omkatech is here to help you find the <br /> state-of-the-art technology services<br />you need.</h5>
                                <div class="button-left-portfolio-web">
                                    <button className="border border-white">View More<img style={{marginTop : '-2px', marginLeft :'10px'}} src={arrow} /></button>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <img src={portfolioSoftware} />
                            </div>
                        </div>
                    </div>
                </section>

                <section id="portfolio-Gaming">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <img src={portfolioGaming} />
                            </div>
                            <div className="col-md-6">
                                <h1>Gaming App Development</h1>
                                <h5>Omkatech is here to help you find the <br /> state-of-the-art technology services<br />you need.</h5>
                                <div style={{marginLeft : '70px'}} class="button-left-portfolio-web">
                                    <button className="border border-white">View More<img style={{marginTop : '-2px', marginLeft :'10px'}} src={arrow} /></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                
                <section id="portfolio-Digital">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <h1>Digital Marketing</h1>
                                <h5>Omkatech is here to help you find the <br /> state-of-the-art technology services<br />you need.</h5>
                                <div class="button-left-portfolio-web">
                                    <button className="border border-white">View More<img style={{marginTop : '-2px', marginLeft :'10px'}} src={arrow} /></button>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <img src={portfolioDigital} />
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

export default Portfolio;