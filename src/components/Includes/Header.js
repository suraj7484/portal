import React, { Component } from 'react'
import logo from '../../../src/assests/logo-new-S.png'
import Sidenav from '../Includes/Sidenav'
import ui from '../../assests/ui-header-new.PNG'
import mobile from '../../assests/mobilr-app-new.PNG'
import game from '../../assests/game-new.PNG'
import digital from '../../assests/digital-marketing-new.PNG'
import web from '../../assests/web-development-new.PNG'
import software from '../../assests/softwareDevelopment-new.PNG'


class Header extends Component {


	render() {
		return (
			<>
				<Sidenav {...this.props} />
				<section id="nav-bar">

					<nav class="navbar navbar-expand-lg navbar-light">
						<a class="navbar-brand" onClick={() => { this.props.history.push('/'); }}><img src={logo} /></a>
						<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
							<span class="navbar-toggler-icon"></span>
						</button>
						<div class="collapse navbar-collapse" id="navbarNav">
							<ul class="navbar-nav ml-auto">
								<div class="dropdown " id="desktop-view-dropdown">
									<a type="button" class="nav-link">Services</a>
									<div class="dropdown-content" >
										<a type="button" style={{ marginLeft: '50px', marginTop: '20px' }} onClick={() => { this.props.history.push('ui-ux-design'); }}><img style={{ height: '30px' }} src={ui} className="icon" /><h5 style={{ marginLeft: '35px', marginTop: '-22px', fontSize: '16px', fontFamily: 'Roboto', fontWeight : '500'}}>UI/UX Design</h5></a>
										<a type="button" style={{ marginLeft: '300px', marginTop: '-30px' }} onClick={() => { this.props.history.push('mobile-app-development'); }}> <img style={{ height: '30px', marginTop: '-15px' }} src={mobile} /><h5 style={{ marginLeft: '35px', marginTop: '-24px', fontSize: '16px' , fontFamily: 'Roboto', fontWeight : '500'}}>Mobile App Development</h5></a>
										<a type="button" style={{ marginLeft: '50px', marginTop: '20px' }} onClick={() => { this.props.history.push('digital-marketing'); }}><img style={{ height: '30px' }} src={digital} /><h5 style={{ marginLeft: '35px', marginTop: '-22px', fontSize: '16px', fontFamily: 'Roboto', fontWeight : '500' }}>Digital Marketing</h5></a>
										<a type="button" style={{ marginLeft: '300px', marginTop: '-30px' }} onClick={() => { this.props.history.push('gaming-app-development'); }}><img style={{ height: '30px', marginTop: '-15px' }} src={game} /><h5 style={{ marginLeft: '35px', marginTop: '-24px', fontSize: '16px', fontFamily: 'Roboto', fontWeight : '500' }}>Gaming App Development</h5></a>
										<a type="button" style={{ marginLeft: '50px', marginTop: '20px' }} onClick={() => { this.props.history.push('web-development'); }}><img style={{ height: '30px' }} src={web} /><h5 style={{ marginLeft: '35px', marginTop: '-22px', fontSize: '16px' , fontFamily: 'Roboto', fontWeight : '500'}}>Web Development</h5></a>
										<a type="button" style={{ marginLeft: '300px', marginTop: '-30px' }} onClick={() => { this.props.history.push('software-development'); }}><img style={{ height: '30px', marginTop: '-15px' }} src={software} /><h5 style={{ marginLeft: '35px', marginTop: '-24px', fontSize: '16px' , fontFamily: 'Roboto', fontWeight : '500'}}>Software Development</h5></a>
									</div>
								</div>

								<div class="dropdown " id="mobile-view-dropdown">
									<a type="button" class="nav-link">Services</a>

									<div class="dropdown-content" >
										<a type="button" style={{ marginLeft: '50px' }} onClick={() => { this.props.history.push('ui-ux-design'); }}><img style={{ marginLeft: '-50px', height: '30px' }} src={ui} /><h5 style={{ marginLeft: '-15px', marginTop: '-20px', fontSize: '10px' }}>UI/UX DESIGN</h5></a>
										<a type="button" style={{ marginLeft: '300px', marginTop: '-30px' }} onClick={() => { this.props.history.push('mobile-app-development'); }}> <img style={{ marginLeft: '-160px', height: '30px', marginTop: '0px' }} src={mobile} /><h5 style={{ marginLeft: '-120px', marginTop: '-20px', fontSize: '10px' }}>MOBILE APP DEVELOPMENT</h5></a>
										<a type="button" style={{ marginLeft: '50px', marginTop: '20px' }} onClick={() => { this.props.history.push('digital-marketing'); }}><img style={{ marginLeft: '-50px', height: '30px' }} src={digital} /><h5 style={{ marginLeft: '-15px', marginTop: '-20px', fontSize: '10px' }}>DIGITAL MARKETING</h5></a>
										<a type="button" style={{ marginLeft: '300px', marginTop: '-30px' }} onClick={() => { this.props.history.push('gaming-app-development'); }}><img style={{ marginLeft: '-160px', height: '30px', marginTop: '0px' }} src={game} /><h5 style={{ marginLeft: '-120px', marginTop: '-20px', fontSize: '10px' }}>GAMING APP DEVELOPMENT</h5></a>
										<a type="button" style={{ marginLeft: '50px', marginTop: '20px' }} onClick={() => { this.props.history.push('web-development'); }}><img style={{ marginLeft: '-50px', height: '30px' }} src={web} /><h5 style={{ marginLeft: '-10px', marginTop: '-20px', fontSize: '10px' }}>WEB DEVELOPMENT</h5></a>
										<a type="button" style={{ marginLeft: '300px', marginTop: '-30px' }} onClick={() => { this.props.history.push('software-development'); }}><img style={{ marginLeft: '-160px', height: '30px', marginTop: '0px' }} src={ui} /><h5 style={{ marginLeft: '-120px', marginTop: '-20px', fontSize: '10px' }}>SOFTWARE DEVELOPMENT</h5></a>
									</div>
								</div>




								{/* <li class="nav-item dropdown">
                <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown"></a>
                <div class="dropdown-menu  pull-left" id="dropdown-menu">
                    <a type="button" onClick={() => {this.props.history.push('Ux');}}   class="dropdown-item">UI/UX DESIGN</a>
                    <a type="button" onClick={() => {this.props.history.push('MobileApp');}} class="dropdown-item">Mobile APP Development</a>
                    <a type="button" onClick={() => {this.props.history.push('SeoDigital');}} class="dropdown-item">SEO/DIGITAL MARKETING</a>
                    <a type="button" onClick={() => {this.props.history.push('GamingApp');}} class="dropdown-item">GAMING APP DEVELOPMENT</a>
                    <a type="button" onClick={() => {this.props.history.push('WebDevelopment');}} class="dropdown-item">WEB DEVELOPMENT</a>
                    <a href="#" class="dropdown-item">CRYPTOCURRENCY</a>                
                </div>
            </li> */}


								<li class="nav-item">
									<a class="nav-link" type="button" onClick={() => {this.props.history.push('technologies-we-work-on') ; }}>Technology</a>
								</li>
								<li class="nav-item">
									<a class="nav-link" type="button" onClick={() => {this.props.history.push('ready-to-use-projects');}} >Ready to Use</a>
								</li>
								<li class="nav-item">
									<a class="nav-link" type="button" onClick={ () => {this.props.history.push('portfolio');}} >Portfolio</a>
								</li>
								<div class="dropdown-about">
									<a type="button" class="nav-link">About Us</a>
									<div class="dropdown-content-about" >
										<a className = "dropdown-content-about-a" type="button" style={{ marginLeft: '20px', marginTop: '20px' }} onClick={() => { this.props.history.push('our-expertise'); }}><h5 style={{ marginLeft: '-170px', marginTop: '0px', fontSize: '15px' }}>Our Expertise</h5></a>
										<a className = "dropdown-content-about-a" type="button" style={{ marginLeft: '300px', marginTop: '-30px' }} onClick={() => { this.props.history.push('about-us'); }}> <h5 style={{ marginLeft: '-200px', marginTop: '33px', fontSize: '15px' }}>About Us</h5></a>
									</div>
								</div>
								<li class="nav-item">
									<a class="nav-link" type="button" onClick={() => { this.props.history.push('contact-us'); }}>Contact Us</a>
								</li>
							</ul>
						</div>
					</nav>
				</section>
			</>
		)
	}
}

export default Header;

