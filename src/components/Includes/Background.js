import React, { Component} from 'react'
import img from '../../assests/jj.PNG'
import img1 from '../../assests/hh.png'
import img2 from '../../assests/hhk.png'
import img3 from '../../assests/aa.png'
import img4 from '../../assests/bb.png'
import img5 from '../../assests/cc.png'

class Background extends Component {  
  
    render() {
      return (
              <div>
                  <h1 className="service-home-page">Services</h1>
                  <div class="row">
  <div class="column">
  <div className="inner" >
 
    <img src={img} alt="Snow" id="inner" style={{ width: '100%' }} />
</div> 

<h1 className="text-center">UI/UX Design</h1>

  </div>
  <div class="column">
  <div className="inner" >
    <img src={img1} alt="Snow" id="inner1" style={{ width: '100%' }} />

</div>
<h1 className="text-center">Mobile And App Development</h1>
  </div>
  <div class="column">
  <div className="inner" >
    <img src={img2} alt="Snow" id="inner2" style={{ width: '100%' }} />
</div>
<h1 className="text-center">SEO/Digital Marketing</h1>
  </div>
  </div>



 <div class="row">
  <div class="column">
  <div className="inner" >
    <img src={img3} alt="Snow" id="inner3" style={{ width: '100%' }} />

</div>
<h1 className="text-center">Gaming App Development</h1>
      

  </div>
  <div class="column">
  <div className="inner" >
    <img src={img4} alt="Snow" id="inner4" style={{ width: '100%' }} />

</div>
<h1 className="text-center">Web Development</h1>
  </div>
  <div class="column">
  <div className="inner" >
    <img src={img5} alt="Snow" id="inner5" style={{ width: '100%' }} />
</div>
<h1 className="text-center">Cryptocurrency</h1>
  </div>
  </div>





                    
              </div>
      );
    }
  }
  
  
  
  
  export default Background;