import React, { Component } from 'react';

class Sidenav extends Component {
    render() {
        return (
            <section >
                <div className="head-bg">
                    <marquee direction="left" id='scroll_news'>
                        <div onMouseOver={() => { document.getElementById('scroll_news').stop() }} onMouseOut={() => { document.getElementById('scroll_news').start() }}>
                            COVID-19-All our team are safely working remotely to meet your tech requirement prompty -<strong> Contact us </strong>
                        </div>
                    </marquee>
                </div>
            </section>
        )
    }
}

export default Sidenav  