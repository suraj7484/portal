import React, { Component } from 'react'
import Header from '../Includes/Header'
import Footer from '../Includes/Footer'

class Client extends Component {
    render() {
        return(
            <div>
                <Header {...this.props} />
                    <h1 className="text-center">Portfolio</h1>
                <Footer {...this.props} />
            </div>
        )
    }
}

export default Client;