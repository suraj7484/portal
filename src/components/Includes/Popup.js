import React , {Component} from 'react';

class Popup extends Component {
    render() {
        return (
            <div class="container">
            <h2>Modal Example</h2>
            <button type="button" class="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal">Open Modal</button>
            <div class="modal fade" id="myModal" role="dialog" style={{backgroundColor : 'white'}}>
                   
                    <section id="pop" class="modal-body">
                <div className="container">
                    <div className="row">
                        <p><strong style={{color : '#ff511f'}}>Wait</strong>!Looking for Right Technology Partner For <br/>Your Business Growth</p>
                        <h5>Its Time To Convert Your Business <br/> Idea Into Success!</h5>
                        <form action="" id="form-login">
                           <div>
                                <div id="error-section" style={{marginBottom : '10px'}}></div>
                               <label style={{marginTop : '40px'}}></label>
                               <input type="text" id="email" name="email" placeholder="Email Address" />
                           </div>
                           <div>
                               <label></label>
                               <input type="password" id="password" name="password" placeholder="Phone no." />
                           </div>
                          
                          <button type="submit" >Let's Talk</button>
                       </form>
                       <a type="button" className="btn"  >No Thanks!</a>
                    </div>
                </div>
            </section>
            </div>
  
</div>

        )
    }
}

export default Popup;