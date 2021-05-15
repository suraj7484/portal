import React, { Component } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import Demo from '../../../src/assests/banner-below-ux.png'
import Demo2 from '../../../src/assests/Research.PNG'
import img from '../../../src/assests/storyboarding-ux-new.PNG'
import img1 from '../../../src/assests/Sketching-ux-new.PNG'
import img2 from '../../../src/assests/WireFrames-ux-new.PNG'
import VirtualDesign from '../../../src/assests/virtual-ux-new.PNG'
import img3 from '../../../src/assests/contact-us2.PNG'
import img4 from '../../../src/assests/linkin-tech-ux-new.png'
import img5 from '../../../src/assests/diamond-tech-ux-new.png'
import img6 from '../../../src/assests/tech-ux-third-new.png'
import img7 from '../../../src/assests/tech-ux-forth-new.png'
import img8 from '../../../src/assests/tech-ux-five-new.PNG'
import img9 from '../../../src/assests/omni-tech-ux-new.PNG'
import img10 from '../../../src/assests/html-tech-ux-new.png'
import img11 from '../../../src/assests/adobe-tech-ux-new.png'
import img12 from '../../../src/assests/bootstrap-tech-ux-new.png'
import img13 from '../../../src/assests/ps-tech-ux-new.png'
import img14 from '../../../src/assests/mobile screen.PNG'
import Header from '../Includes/Header'
import line from '../../assests/line.PNG'
import Footer from '../Includes/Footer'
import { Player } from 'video-react';
import video1 from '../../../src/assests/research-ux-new.PNG'
import internet from '../../assests/big-technolgy-soft.PNG'
import app from '../../assests/tech-soft-first.PNG'
import react from '../../assests/photoshop-tech-software.PNG'
import blockchain from '../../assests/illustrater-tech-software.PNG'
import sketch from '../../assests/sketch-tech-software.PNG'
import xd from '../../assests/xd-tech-software.PNG'
import figma from '../../assests/figma-tech-software.PNG'
import invision from '../../assests/invision-tech-software.PNG'
import Typing from 'react-typing-animation';

class Ux extends Component {

    componentDidMount() {
        window.scrollTo(0, 0)
    }
    render() {
        return (
            <>
                <Header {...this.props} />
                <section id="banner" class="animated slideInDown">
                    <div class="container ">
                        <div class="row ">
                            <div class="col-md-6">
                            <Typing >
                                <h1>UI/UX DESIGN</h1>
                                <p>We Bring your imagination from Canvas to Reality</p>
                            </Typing>
                                <div class="button-left-ux">
                                    <button class="btn-register-header animation-on-hover clickcustomform " onClick={() => {this.props.history.push('contact-us')}}>Get In Touch</button>
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

                <section class="overlap">
                    <div class="contanier">
                        <div class="row">
                     
                            <div class="col-md-12">
                            <ScrollAnimation animateIn='slideInRight'
                                duration={5}
                                initiallyVisible={true}
                                animateOnce={true}>
                                <div class="content">
                                
                                    <h1>Creative designers creating unique digital experiences</h1>
                                    <p>We help brands achieve significance in a complex, consumer-driven, technology-enabled world. Our professional graphic designers are proficient in <br/>different designing tools and have a remarkable experience in handling designing projects. </p>
                                
                                </div>
                                </ScrollAnimation>
                                <ScrollAnimation animateIn='slideInLeft'
                                duration={5}
                                initiallyVisible={true}
                                animateOnce={true}>
                                <div class="image">                             
                                    <img src={Demo} />                                  
                                </div>
                                </ScrollAnimation>
                            </div>
                        </div>
                    </div>
                </section>

                {/* <section id="simple" class="simple-div animated zoomIn mx-auto">
                    <div class="contanier">
                        <div class="row">
                            <div class="col-md-12">
                                <h1>Our User Experience Design Process Has Proven Itself</h1>
                                <p>Time And Time Again. We Take The Following Steps<br />For every Design We Produce</p>
                            </div>
                        </div>
                    </div>
                </section> */}

                <section id="about-tough-design-line-Produce" style={{marginTop : '-40px'}}>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <h5 className = "ux-our-unique-h5" style={{fontSize : '2rem' , textAlign: 'center' , lineHeight : '1.30' , fontFamily : 'Roboto'}}>Our unique graphic designs create visual concepts that inspire and captivate customers, which helps in making your business become a brand.</h5>
                                <img className = "line-image" src={line} />
                            </div>
                        </div>
                    </div>
                </section>


                <section class="overlap-second">
                    <div class="contanier">
                        <div class="row">
                            <div class="col-md-12 overlap-second-div">
                                <div id="overlap-image-second" class="image-overlap-second ">
                                    <ScrollAnimation animateIn='slideInRight'
                                    duration={2}
                                    animateOnce={true}>
                                    <img src={video1} />
                                    </ScrollAnimation>
                                </div>
                                <div id="overlap-content-second" class="content-overlap-second ">
                                    <h1>1. Product Research</h1>
                                    <ul className="circle-list">
                                        <li className="items"> <p>Once the idea is defined, research phase starts where data is collected for the target audience by doing both user and market research.</p></li>
                                        <li className="items"> <p>Research also helps UX designers understand industry standards and opportunities.</p></li>
                                    </ul>



                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section class="overlap-third">
                    <div class="contanier">
                        <div class="row">
                            <div class="col-md-12">
                                <div id="overlap-image-third" class="image-overlap-third ">
                                <ScrollAnimation animateIn='slideInLeft'
                                duration={2}
                                animateOnce={true}>
                                    <img src={img} />
                                    </ScrollAnimation>
                                </div>
                                <div id="overlap-content-third" class="content-overlap-third ">
                                    <h1>2. Analysis</h1>
                                    <ul className="circle-list">
                                        <li className="items"><p>We create fictional characters that represent different user types of the product. Designers then create the user stories to understand the product/service interactions.
</p></li>
                                        <li className="items"><p>The final analysis if done by storyboarding where designers connect these fictional characters with the user stories.</p></li>
                                    </ul>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section class="overlap-forth">
                    <div class="contanier">
                        <div class="row">
                            <div class="col-md-12">
                                <div id="overlap-image-forth" class="image-overlap-forth ">
                                <ScrollAnimation animateIn='slideInRight'
                                duration={2}
                                animateOnce={true}>
                                    <img src={img1} />
                                    </ScrollAnimation>
                                </div>
                                <div id="overlap-content-forth" class="content-overlap-forth ">
                                    <h1>3. Wireframing</h1>
                                    <ul className="circle-list">
                                        <li className="items"> <p>Before wireframing, Sketching is done where hand drawing on paper or white board is done to visualize the ideas.After which wireframing is done.</p></li>
                                        <li className="items"> <p> Wireframe helps in creating the future pages including the key elements and how they fit together.</p></li>
                                    </ul>


                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section class="overlap-five">
                    <div class="contanier">
                        <div class="row">
                            <div class="col-md-12">
                                <div id="overlap-image-five" class="image-overlap-five ">
                                <ScrollAnimation animateIn='slideInLeft'
                                duration={2}
                                animateOnce={true}>
                                    <img src={img2} />
                                    </ScrollAnimation>
                                </div>
                                <div id="overlap-content-five" class="content-overlap-five ">
                                    <h1>4. Prototyping</h1>
                                    <ul className="circle-list">
                                        <li className="items"> <p> Prototyping includes the final look and feel of the product. Sometimes defining each component, pattern, style is also required for large products.</p></li>
                                        <li className="items"> <p> Designers provide the design specification to the developers to turn prototype into a working product.</p></li>
                                    </ul>



                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section class="overlap-six">
                    <div class="contanier">
                        <div class="row">
                            <div class="col-md-12">
                                <div id="overlap-image-six" class="image-overlap-six ">
                                <ScrollAnimation animateIn='slideInRight'
                                duration={2}
                                animateOnce={true}>
                                    <img src={VirtualDesign} />
                                    </ScrollAnimation>
                                </div>
                                <div id="overlap-content-six" class="content-overlap-six">
                                    <h1>5. Design Validation</h1>
                                    <ul className="circle-list">
                                        <li className="items"> <p> Validation is done after the final prototyping to understand if the design works for the users which is then tested by the client.</p></li>
                                        <li className="items"> <p>After the final approval from the client, we move on to the Development stage.</p></li>
                                    </ul>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* <section id="service-homepage">
                    <div class="container" >
                        <p class="new">Technology</p>
                        <hr />
                    </div>
                </section> */}

                <section id="about-tough-design-line-ux">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                           
                           <img className = "line-image" style={{marginTop : '-1500px'}} src={line} />
                            </div>
                            <h1 className = "technology-h1" style={{marginTop : '-820px' , marginLeft : '480px' , fontFamily : 'Roboto'}}>Technology</h1>
                        </div>
                    </div>
                </section>

                {/* <section id="technology">
                    <div class="container" >

                        <div class="row">
                            <div class="col-md-3 col-sm-3 " >
                                <ScrollAnimation animateIn='slideInUp'>
                                    <div id="ui-animation-tech" class="content-box animated bounceInRight " >
                                        <div class="zoom ">
                                            <img src={img4} />
                                        </div>
                                    </div>
                                </ScrollAnimation>
                            </div>
                            <div class="col-md-3 col-sm-3" >
                                <ScrollAnimation animateIn='slideInUp'>
                                    <div id="ui-animation-tech" class="content-box1 animated bounceInRight">
                                        <img src={img5} />

                                    </div>
                                </ScrollAnimation>
                            </div>
                            <div class="col-md-3 col-sm-3">
                                <ScrollAnimation animateIn='slideInUp'>
                                    <div id="ui-animation-tech" class="content-box2 animated bounceInRight" >
                                        <img src={img6} />

                                    </div>
                                </ScrollAnimation>
                            </div>

                            <div class="col-md-3 col-sm-3" >
                                <ScrollAnimation animateIn='slideInUp'>
                                    <div id="ui-animation-tech" class="content-box3 animated bounceInRight">
                                        <img src={img7} />

                                    </div>
                                </ScrollAnimation>
                            </div>

                        </div>

                        <div class="row">
                            <div class="col-md-4 col-sm-4 text-center">
                                <ScrollAnimation animateIn='slideInUp'>
                                    <div id="ui-animation-tech" class="content-box4 animated bounceInRight" >
                                        <img src={img8} />
                                    </div>
                                </ScrollAnimation>
                            </div>
                            <div class="col-md-4 col-sm-4" >
                                <ScrollAnimation animateIn='slideInUp'>
                                    <div id="ui-animation-tech" class="content-box5 animated bounceInRight">
                                        <img src={img9} />
                                    </div>
                                </ScrollAnimation>
                            </div>
                            <div class="col-md-4 col-sm-4">
                                <ScrollAnimation animateIn='slideInUp'>
                                    <div id="ui-animation-tech" class="content-box6 animated bounceInRight">
                                        <img src={img10} />

                                    </div>
                                </ScrollAnimation>
                            </div>



                        </div>

                        <div class="row">


                            <div class="col-md-6 col-sm-6" >
                                <ScrollAnimation animateIn='slideInUp'>
                                    <div id="ui-animation-tech" class="content-box7 animated bounceInRight">
                                        {/* <h3>Executive Search</h3> 
                                        <img src={img11} />
                                    </div>
                                </ScrollAnimation>
                            </div>

                            <div class="col-md-6 col-sm-6" >
                                <ScrollAnimation animateIn='slideInUp'>
                                    <div id="ui-animation-tech" class="content-box8 animated bounceInRight">
                                        {/* <h3>Executive Search</h3> 
                                        <img src={img12} />
                                    </div>
                                </ScrollAnimation>
                            </div>

                        </div>
                        <div class="row">


                            <div class="col-md-12 col-sm-12" >
                                <ScrollAnimation animateIn='slideInUp'>
                                    <div id="ui-animation-tech" class="content-box9 animated bounceInRight">
                                        {/* <h3>Executive Search</h3> 
                                        <img src={img13} />
                                    </div>
                                </ScrollAnimation>
                            </div>



                        </div>




                        <div class="row">


                            <div class="col-md-12 col-sm-12" >
                                <div class="content-box10">
                                    <img src={img14} />
                                </div>
                            </div>



                        </div>


                    </div>

                </section> */}


                 <section id="technology">
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


                <section id="contact" style={{marginTop : '-70px'}}>
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
                                <img src={img3} />
                            </div>
                           
                        </div>
                    </div>
                </section>
              
                <Footer {...this.props} />
            </>
        )
    }
}

export default Ux;