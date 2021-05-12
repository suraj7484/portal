import React, { Component } from 'react'
import Header from '../Includes/Header'
import Footer from '../Includes/Footer'
import img20 from '../../../src/assests/contact-us2.PNG'
import FirstImage from '../../../src/assests/hotel-booking-ready.JPG'

class ReadyToUse extends Component {

    componentDidMount() {
        window.scrollTo(0, 0)
    }
    render() {
        return (
            <div>
                <Header {...this.props} />

                  <section id="ready-banner-new" >
                    <div class="container" id="container-banner">
                        <div class="row ">
                            <div id="banner-content-homepage" class="col-md-6">

                                <h1>Ready To Use <br/> Solution</h1>
                                <p>we can say that ready made product does not require any extra time for the development since, it can be use immediately after you purchase.</p>
                                <div class="button-left-ready-banner-new">
                                    <button type="button" class="btn-register-header animation-on-hover clickcustomform " style={{ fontSize: '20px', fontFamily: 'Roboto' }}>Get In Touch</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="service-homepage">
                    <div class="container" >
                        <p class="new">Our ready Solutions</p>
                        <hr />
                    </div>
                </section>

                <section id="OurReadySolution">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-5" >
                                <div class="wrapper">
                                    <div class="parent" onclick="">
                                        <div class="child bg-one">
                                            <h1>Hotel Booking Platform</h1>
                                            <button style={{fontFamily : 'Roboto'}} class="btn-register-header-ready animation-on-hover clickcustomform ">Find Out More</button>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-5" >
                                <div class="wrapper" style={{ marginLeft: '100px' }}>
                                    <div class="parent" onclick="">
                                        <div class="child bg-two">
                                            <h1>Food Delivery Platform</h1>
                                            <button style={{fontFamily : 'Roboto'}}  class="btn-register-header-ready animation-on-hover clickcustomform ">Find Out More</button>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-11" >
                                <div class="wrapper" >
                                    <div class="parent" style={{ height: '350px', width: '1075px' }} onclick="">
                                        <div class="child bg-three">
                                            <h1 style={{ marginLeft: '185px' }}>Ecommerce website and mobile app</h1>
                                            <button class="btn-register-header-ready animation-on-hover clickcustomform button-of-large" style={{ marginLeft: '470px', fontFamily : 'Roboto' }}>Find Out More</button>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="row">
                            <div className="col-md-5" >
                                <div class="wrapper">
                                    <div class="parent" onclick="">
                                        <div class="child bg-four">
                                            <h1 style={{ marginLeft: '30px' }}>Taxi Booking App</h1>
                                            <button style={{fontFamily : 'Roboto'}}  class="btn-register-header-ready animation-on-hover clickcustomform ">Find Out More</button>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-5" >
                                <div class="wrapper" style={{ marginLeft: '100px' }}>
                                    <div class="parent" onclick="">
                                        <div class="child bg-five">
                                            <h1 style={{ marginLeft: '40px' }}>Dating Platform</h1>
                                            <button style={{fontFamily : 'Roboto'}}  class="btn-register-header-ready animation-on-hover clickcustomform ">Find Out More</button>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-11" >
                                <div class="wrapper" >
                                    <div class="parent" style={{ height: '350px', width: '1075px' }} onclick="">
                                        <div class="child bg-six">
                                            <h1 style={{ marginLeft: '310px' }}>Marketplace Platform</h1>
                                            <button   class="btn-register-header-ready animation-on-hover clickcustomform button-of-large" style={{ marginLeft: '470px' , fontFamily : 'Roboto'}}>Find Out More</button>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-5" >
                                <div class="wrapper">
                                    <div class="parent" onclick="">
                                        <div class="child bg-seven">
                                            <h1 style={{ marginLeft: '15px' }}>HR Managment System</h1>
                                            <button style={{fontFamily : 'Roboto'}}  class="btn-register-header-ready animation-on-hover clickcustomform ">Find Out More</button>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-5">
                            <div class="wrapper" style={{ marginLeft: '100px' }}>
                                    <div class="parent" onclick="">
                                        <div class="child bg-eight">
                                            <h1 style={{ marginLeft: '15px' }}>Social Media Platform</h1>
                                            <button style={{fontFamily : 'Roboto'}}  class="btn-register-header-ready animation-on-hover clickcustomform ">Find Out More</button>

                                        </div>
                                    </div>
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

                  {/* <section id="contact">
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

export default ReadyToUse;