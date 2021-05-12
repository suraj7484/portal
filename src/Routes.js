import React, { Component } from 'react'
import Home from './components/Includes/Home'
import { BrowserRouter as Router, Route, Switch  } from 'react-router-dom'
import Header from './components/Includes/Header'
import Footer from './components/Includes/Footer'
import HomeIndex from './components/Includes/HomeIndex'
import Popup from './components/Includes/Popup'
import Sidenav from './components/Includes/Sidenav'
import About from './components/FrontEnd/About'
import AboutUs from './components/FrontEnd/AboutUs'
import Technology from './components/FrontEnd/Technology'
import Ux from './components/FrontEnd/Ux'
import MobileApp from './components/FrontEnd/MobileApp'
import SeoDigital from './components/FrontEnd/SeoDigital'
import GamingApp from './components/FrontEnd/GamingApp'
import WebDevelopment from './components/FrontEnd/WebDevelopment'
import SoftwareDevelopment from './components/FrontEnd/SoftwareDevelopment'
import Service from './components/FrontEnd/Service'
import Client from './components/FrontEnd/Client'
import Portfolio from './components/FrontEnd/Portfolio'
import WebsitePortfolio from './components/FrontEnd/WebsitePortfolio'
import ReadyToUse from './components/FrontEnd/ReadyToUse'
import Contact from './components/FrontEnd/Contact'
import Test from './components/FrontEnd/Test'
import Admin from './components/Admin/Home'
import Login from './components/Admin/Login'

class Routes extends Component {
    render() {
        return(
            <Router>
                <Switch>
                    <Route exact path="/" render={(props) => <Home {...props} />} /> 
                    <Route exact path="/Header" render={(props) => <Header {...props} />} />
                    <Route exact path="/Footer" render={(props) => <Footer {...props} />} />
                    <Route exact path="/HomeIndex" render={(props) => <HomeIndex {...props} />} /> 
                    <Route exact path="/Sidenav" render={(props) => <Sidenav {...props} />} /> 
                    <Route exact path="/our-expertise" render={(props) => <About {...props} />} /> 
                    <Route exact path="/about-us" render={(props) => <AboutUs {...props} />} /> 
                    <Route exact path="/technologies-we-work-on" render={(props) => <Technology {...props} />} />
                    <Route exact path="/Service" render={(props) => <Service {...props} />} />  
                    <Route exact path="/Client" render={(props) => <Client {...props} />} />
                    <Route exact path="/contact-us" render={(props) => <Contact {...props} />} />
                    <Route exact path="/ui-ux-design" render={(props) => <Ux {...props} />} />    
                    <Route exact path="/mobile-app-development" render={(props) => <MobileApp {...props} />} />   
                    <Route exact path="/digital-marketing" render={(props) => <SeoDigital {...props} />} />  
                    <Route exact path="/gaming-app-development" render={(props) => <GamingApp {...props} />} /> 
                    <Route exact path="/web-development" render={(props) => <WebDevelopment {...props} />} /> 
                    <Route exact path="/software-development" render={(props) => <SoftwareDevelopment {...props} />} /> 
                    <Route exact path="/portfolio" render={(props) => <Portfolio {...props} />} /> 
                    <Route exact path="/WebsitePortfolio" render={(props) => <WebsitePortfolio {...props} />} /> 
                    <Route exact path="/ready-to-use-projects" render={(props) => <ReadyToUse {...props} />} /> 
                    <Route exact path="/Admin" render={(props) => <Admin {...props} />}/>    
                    <Route exact path="/Test" render={(props) => <Test {...props} />}/>    
                    <Route exact path="/Login" render={(props) => <Login {...props} />}/>  
                    <Route exact path="/Popup" render={(props) => <Popup {...props} />}/>                                                   
                </Switch>
            </Router>
        )
    }
}

export default Routes;