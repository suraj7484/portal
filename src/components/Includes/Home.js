import React, { Component } from 'react'
import Sidenav from '../Includes/Sidenav'
import Footer from '../Includes/Footer'
import HomeIndex from '../Includes/HomeIndex'
import Header from '../Includes/Header'
import Background from '../Includes/Background'

class Home extends Component {
    render() {
        return(
            <React.Fragment>
                <Header {...this.props} /> 
                <HomeIndex {...this.props} />
                {/* <Footer {...this.props} />         */}
            </React.Fragment>
        )
    }
}

export default Home;

