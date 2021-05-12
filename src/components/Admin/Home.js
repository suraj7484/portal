import React, { Component } from 'react'
import Login from '../Admin/Login'

class Home extends Component {
    render() {
        return(
            <div>
                <Login {...this.props}/>
                
            </div>
        )
    }
}

export default Home;