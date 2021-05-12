import React, { Component } from 'react'
import logo from '../../../src/assests/logo-new-S.png'
import Demo from '../../../src/assests/logo.png'
import facebook from '../../assests/facebook.png'
import insta from '../../assests/insta.png'
import linkedin from '../../assests/linkdin.png'
import send from '../../assests/sendNew.png'

class Footer extends Component {
  render() {
    return (
    
      <section id="footer-omka">
        <footer style={{ marginTop: '-100px' }} >


          <div class="container text-center text-md-left">


            <div class="row">

              <div id="logo-footer" class="col-md-3 col-sm-3">
                <p>"The World revolves around Technology" and we are a young and a passionate bunch of creative souls, and we do off-shore development and help our clients convert their ideas and dreams into reality.</p>

              </div>
             


              <div id="quick-link-footer" style={{ paddingLeft: '20px', marginTop : '25px' }} class="col-md-3 col-sm-3">


                <h5 style={{fontFamily : 'Roboto'}} >Quick Links</h5>

                <ul class="list-unstyled">
                  <li>
                    <a className="mt-3" onClick={() => {this.props.history.push('ready-to-use-projects');}} type="button">Ready To Use</a>
                  </li>
                  <li>
                    <a className="mt-2" onClick={() => {this.props.history.push('portfolio');}} type="button">Portfolio</a>
                  </li>
                  <li>
                    <a className="mt-2" onClick={() => {this.props.history.push('about-us') ; }} type="button">About Us</a>
                  </li>
                  <li>
                    <a className="mt-2" onClick={() => { this.props.history.push('contact-us'); }} type="button">Contact Us</a>
                  </li>
                </ul>

              </div>


              <div id="services-footer" class="col-md-3 col-sm-3">

                <h5 style={{marginTop : '25px' , fontFamily : 'Roboto'}}>Services</h5>

                <ul class="list-unstyled">
                  <li>
                    <a className="mt-3" onClick={ () => {this.props.history.push('web-development');}} type="button">Web Development</a>
                  </li>
                  <li>
                    <a className="mt-2" onClick={() => {this.props.history.push('mobile-app-development');}} type="button">Mobile App Development</a>
                  </li>
                  <li>
                    <a className="mt-2" onClick={() => {this.props.history.push('software-development');}} type="button">Enterprise Solutions</a>
                  </li>
                  <li>
                    <a className="mt-2" onClick={() => {this.props.history.push('gaming-app-development');}} type="button">Gaming App Development</a>
                  </li>
                  <li>
                    <a className="mt-2" onClick={() => {this.props.history.push('ui-ux-design');}} type="button">UI/UX Designing</a>
                  </li>
                  <li>
                    <a className="mt-2" onClick={() => {this.props.history.push('digital-marketing');}} type="button">Digital Marketing Services</a>
                  </li>
                </ul>

              </div>




              <div id="icon-footer"  class="col-md-3 col-sm-3 desktop-footer">
                <form>
                  <h5 style={{marginTop : '25px', fontFamily : 'Roboto'}}>Sign Up</h5>
                  <div className="row">


                    <div className="col-md-10">
                      <input type="email" style={{height : '30px', marginTop : '5px'}} className="form-control" placeholder="Email" />
                    </div>
                    
                    <div class="rectangle">                    
                    <a type="button"><img src={send} /></a>
                    </div>


                  </div>
                </form>

                <h5 className="mt-3" style={{fontFamily : 'Roboto'}}>Follow Us</h5>

                <ul class="list-unstyled">

                  <a id="icon-facebook" type="button"><img src={facebook} /></a>
                  <a id="icon-instagram" type="button"><img src={insta} /></a>
                  <a id="icon-linkin" type="button"><img src={linkedin} /></a>


                </ul>

              </div>


              

              <div id="icon-footer" class="col-md-3 col-sm-3 mobile-footer">
                <form>
                  <h5 style={{fontFamily : 'Roboto'}} >Get In Touch</h5>
                  <div className="row">


                    <div className="col-md-2">
                      <input type="email" style={{height : '10px', marginLeft : '270px' , width : '60px' , marginTop : '15px'}} className="form-control" id="test-form" placeholder="Email" />
                    </div>
                    <div  id="send-footer"className="col-md-2">
                      <a type="button"><img style={{height : '10px', marginLeft : '330px' , marginTop : '-40px'}} src={send} /></a>
                    </div> 



                  </div>
                </form>

                <h5 style={{marginLeft : '265px' , fontSize : '14px', marginTop : '20px'}}>Follow Us</h5>

                <ul class="list-unstyled">

                  <a id="icon-facebook" type="button"><img src={facebook}  style={{height : '15px'}} /></a>
                  <a id="icon-instagram" type="button"><img src={insta} style={{height : '15px'}} /></a>
                  <a id="icon-linkin" type="button"><img src={linkedin} style={{height : '15px'}}/></a>


                </ul>

              </div>

            </div>
          </div>
        </footer>
        <div class="footer">
          <p>© 2020 Copyright Omka Tech All Right Reserved </p>
        </div>
  </section>
    )
  }
}

export default Footer;