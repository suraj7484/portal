import React from 'react';
import './WhyCard.css';
import img11 from '../../../src/assests/why-omkatech-home-page-back-pink.png'
import img13 from '../../../src/assests/why-omkatech-home-page-back-blue.png'
import img12 from '../../../src/assests/free-cost-why-omkatech-new.png'
import img14 from '../../../src/assests/Free-Cost-Analysis-why-omkatech-new.png'
import img15 from '../../../src/assests/supperior-quality-why-omkatech-new.png'
import img16 from '../../../src/assests/user-why-omkatech-new.png'
import img17 from '../../../src/assests/full-custo-why-omkatech-new.png'
import img18 from '../../../src/assests/handle-holding-why-omkatevh-new.png'
import img21 from '../../../src/assests/white-label-why-omkatech-new.png'
import img22 from '../../../src/assests/customerwhy-why-omkatech-new.png'
import img19 from '../../../src/assests/new-banner-front.PNG'
import img20 from '../../../src/assests/contact-us2.PNG'

const WhyCard = (props) => {
    return (
        <div className = "whyCard">
            <div className = "whyCardImageMain">
                <img className = "mainBackgroundImage" src = {props.bg} alt = {props.bg} />
            </div>
            <div className = "whyCardImageTop">
                <img className = "topImage" src = {props.top} alt = {props.top} />
            </div>
            <div className = "whyCardHeaderDiv">
                <h4 className = "whyCardHeader"> 
                    {props.head}
                </h4>
            </div>
            <div className = "whyCardParaDiv">
                <p className = "whyCardPara"> 
                    {props.para}
                </p>
            </div>
            {/* Header */}
            {/* Para */}
        </div>
    )
}

export default WhyCard;
