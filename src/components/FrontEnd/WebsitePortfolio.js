import React , { Component } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Header from '../Includes/Header'
import Footer from '../Includes/Footer'
import img20 from '../../../src/assests/contact-us2.PNG'
import Webpage from '../../../src/assests/website-portfolio-banner-first.PNG'
import WebpageSecond from '../../../src/assests/website-portfolio-banner-second.PNG'
import Webpagethird from '../../../src/assests/website-portfolio-banner-third.PNG'
import Webpageforth from '../../../src/assests/website-portfolio-banner-forth.PNG'
import Webpagefive from '../../../src/assests/website-portfolio-banner-five.PNG'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class WebsitePortfolio extends Component {

    componentDidMount() {
        window.scrollTo(0, 0)
    }


    render() {     
        const settings = {
            dots: true,
            fade: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay : true,
          };
        return(
            <div>
                <Header {...this.props} />
                <Slider {...settings}>
                <section id="websitePortfolio-banner" >
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <h1>Project 1</h1>
                                <h5>It is a long established fact that a render will<br/>
                                be distracted by the readable content of a <br/>page when looking at its layout.</h5>
                                <div class="button-left-portfolio">
                                    <button class="btn-register-header animation-on-hover clickcustomform ">Get a Quote</button>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <img src={Webpage} />
                            </div>
                        </div>
                    </div>
                </section>
                
                <section id="websitePortfolio-banner-second">
                    <div className="container">
                        <div className="row">
                        
                            <div className="col-md-6">
                                <h1>Project 2</h1>
                                <h5>It is a long established fact that a render will<br/>
                                be distracted by the readable content of a <br/>page when looking at its layout.</h5>
                                <div class="button-left-portfolio">
                                    <button class="btn-register-header animation-on-hover clickcustomform ">Get a Quote</button>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <img src={WebpageSecond} />
                            </div>
                           
                        </div>
                    </div>
                </section>

                <section id="websitePortfolio-banner-three" >
                    <div className="container">
                        <div className="row">
                        
                            <div className="col-md-6">
                                <h1>Project 3</h1>
                                <h5>It is a long established fact that a render will<br/>
                                be distracted by the readable content of a <br/>page when looking at its layout.</h5>
                                <div class="button-left-portfolio">
                                    <button class="btn-register-header animation-on-hover clickcustomform ">Get a Quote</button>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <img src={Webpagethird} />
                            </div>
                           
                        </div>
                    </div>
                </section>

                <section id="websitePortfolio-banner-four" >
                    <div className="container">
                        <div className="row">
                        
                            <div className="col-md-6">
                                <h1>Project 4</h1>
                                <h5>It is a long established fact that a render will<br/>
                                be distracted by the readable content of a <br/>page when looking at its layout.</h5>
                                <div class="button-left-portfolio">
                                    <button class="btn-register-header animation-on-hover clickcustomform ">Get a Quote</button>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <img src={Webpageforth} />
                            </div>
                           
                        </div>
                    </div>
                </section>

                <section id="websitePortfolio-banner-five" >
                    <div className="container">
                        <div className="row">
                        
                            <div className="col-md-6">
                                <h1>Project 5</h1>
                                <h5>It is a long established fact that a render will<br/>
                                be distracted by the readable content of a <br/>page when looking at its layout.</h5>
                                <div class="button-left-portfolio">
                                    <button class="btn-register-header animation-on-hover clickcustomform ">Get a Quote</button>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <img src={Webpagefive} />
                            </div>
                           
                        </div>
                    </div>
                </section>
                </Slider>

                
             
                <section id="contact">
                    <div class="container ">
                        <div class="row">
                            <div class="col-md-6">
                                <h3 >CONTACT US</h3>
                                <h2 class="mt-3" >Let's Fire Up Your Business</h2>
                                <h5 class="mt-3">India</h5>
                                <p> Address : Plot No. 183, Sector-28, Faridabad, Haryana &<br /> A Block, Sector-46, Noida, Uttar Pradesh</p>
                                <p>Email : info@omkatech.com</p>
                                <p>Phone No : +91 9717511913</p>
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

export default WebsitePortfolio;