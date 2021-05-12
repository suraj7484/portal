import React, { Component } from 'react'
import { Button, Form, FormGroup, Input } from 'reactstrap';
import { Container } from 'reactstrap';
import RCG from 'react-captcha-generator';

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            isError : false,
            errors: '',
            isScucess: false,
            captcha: '',
            successMsg: '',
        }
        this.result = this.result.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(e) {
        e.preventDefault();
        this.check()
      }

    result(text) {
        this.setState({
          captcha: text
        })
      }

    render() {
        return(
            <div>
                <Container>
                        
                        <Form className="login-form" onSubmit={this.submitHandle}>
                            <h4>OmkaTech</h4>                      
                            <FormGroup>
                                <Input type="email" name="email" id="exampleEmail" placeholder="Enter email"  />
                            </FormGroup>
                            <FormGroup>
                                <Input type="password" name="password" id="examplePassword" placeholder="Enter Password" />
                            </FormGroup>
                            <FormGroup>
                                <input type='text' id="cap"  className={'xxx'} ref={ref => this.captchaEnter = ref} />
                                <RCG result={this.result} /> 
                            </FormGroup>
                            <Button>Login</Button>
                        </Form>
                    </Container>
            </div>
        )
    }
}

export default Login;