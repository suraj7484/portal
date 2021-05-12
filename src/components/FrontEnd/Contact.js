import React, { Component } from 'react'
import { toast } from 'react-toastify';
import axios from 'axios'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Formik, ErrorMessage } from 'formik';
import InputMask from 'react-input-mask';
import ReactPhoneInput from "react-phone-input-2";
import swal from 'sweetalert';


import Header from '../Includes/Header'
import Footer from '../Includes/Footer'
import img20 from '../../../src/assests/contact-us2.PNG'
import contact from '../../../src/assests/Omkatech-logo-contact-new.png'
import logo from '../../../src/assests/logo-contact.png'
import { fetchServices } from '../../Redux/Actions/sessionAction'
import { fetchBudget } from '../../Redux/Actions/budgetAction'
import { fetchCountry } from '../../Redux/Actions/countryAction'
import { fetchUserDataCountry } from '../../Redux/Actions/contactAction'
import store from '../../store';


import 'react-phone-input-2/lib/style.css'

class Contact extends Component {


    state = {
        isError: false,
        errors: '',
        isSuccess: false,
        successMsg: '',
        name: '',
        email: '',
        phone: '',
        country: '',
        services: '',
        budget: '',
        detail: ''
    }


    onChange = (e) => {
        this.setState({ isError: false, errors: '' });
        this.setState({ isSuccess: false, successMsg: '' });
        this.setState({ [e.target.id]: e.target.value });
    }

    onSubmit = async (values) => {
        const { name, email, phone, country, services, budget, detail } = this.state;



        let formData = new FormData();
        formData.append('name', values.name);
        formData.append('email', values.email);
        formData.append('phone', this.state.phone);
        formData.append('country', values.country);
        formData.append('services', values.services);
        formData.append('budget', values.budget);
        formData.append('detail', values.detail);

        axios.post('http://demo4.omkatech.com/Country', formData)
            .then((res) => {
                console.log(res);
                this.setState({
                    name: '',
                    email: '',
                    phone: '',
                    country: '',
                    services: '',
                    budget: '',
                    detail: '',
                });
                // toast.success('Thank You ', {
                //     autoClose: 4000,
                // });
                swal({
                     title: "Successfully!",
                     text: "Thank You!",
                     icon: "success",
                   });
                store.dispatch(fetchUserDataCountry());

                // setTimeout(() => {
                //     this.setState({ isError: false, errors: res.message });
                //     this.setState({ isSuccess: false, successMsg: '' });

                // }, 2000)
            })
            .catch((err) => {
                toast.error('Please try again ', {
                    autoClose: 4000,
                });
                this.setState({ isError: true, errors: err.message });
            });
    }


    componentDidMount() {
        window.scrollTo(0, 0);
        store.dispatch(fetchServices());
        store.dispatch(fetchBudget());
        store.dispatch(fetchCountry());
        console.log(fetchBudget);
    }


    handleOnChange = value => {
        console.log(value);
        this.setState({ phone: value }, () => {
          console.log(this.state.phone);
        });
      };


    render() {
        const { services } = this.props;
        const { budget } = this.props;
        console.log(budget);
        const { country } = this.props

        return (
            <div>
                <Header {...this.props} />
                <section id="contactUsNew">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div class="contactInput">
                                    <h2 style={{ textAlign: 'center' , fontFamily : 'Roboto' }}>Let's Build Your Dream App</h2>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-6">
                                <img style={{ marginTop: '70px', marginLeft: '10px' }} src={contact} />
                            </div>
                            <Formik
                                initialValues={{ name: '', email: '', phone: '', country: '', services: '', budget: '', detail: '' }}
                                validate={values => {
                                    const errors = {};

                                    if (!values.email.trim()) {
                                        errors.email = 'Email Required';
                                    } else if (
                                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                                    ) {
                                        errors.email = 'Invalid email address';
                                    }

                                    if (!values.name.trim()) {
                                        errors.name = 'Name is Required';
                                    }

                                    // if (!values.phone.trim()) {
                                    //     errors.phone = 'Phone Number is Required';
                                    // }
                                    //   else if (values.phone.length > 9) {
                                    //      errors.phone = 'Phone Number Minimum be 10 digit';
                                    // }
                                    // else if (values.phone.length > 9) {
                                    //     errors.phone = 'Phone Number Minimum be 10 digit';
                                    // }

                                    if (!values.country.trim()) {
                                        errors.country = 'Please select Country';
                                    }
                                    if (!values.services.trim()) {
                                        errors.services = 'Please select Services';
                                    }
                                    // if (!values.budget.trim()) {
                                    //     errors.budget = 'Budget Field is Required';
                                    // }
                                    // if (!values.detail.trim()) {
                                    //     errors.detail = 'Detail Field is Required';
                                    // }

                                    return errors;
                                }}
                                onSubmit={(values, actions) => {
                                    this.onSubmit(values).then(() => {
                                        actions.setSubmitting(false);
                                        actions.resetForm({
                                            values: {
                                                name: '',
                                                email: '',
                                                phone: '',
                                                country: '',
                                                services: '',
                                                budget: '',
                                                detail: ''
                                            },
                                        });
                                    });
                                }}
                            >
                                {({
                                    values,
                                    errors,
                                    touched,
                                    handleChange,
                                    handleBlur,
                                    handleSubmit,
                                    isSubmitting,
                                    handleReset
                                    /* and other goodies */
                                }) => (
                                        <div className="col-md-6">
                                            <form onSubmit={handleSubmit} style={{ marginTop: '10px', marginLeft: '-20px' }} id="register-form" class="w3-container ">

                                                <p>
                                                    <ErrorMessage name="name" component="div" />
                                                    <input id="name" value={values.name} onBlur={handleBlur} onChange={handleChange} class="w3-input" type="text" placeholder="Name" />

                                                </p>
                                                <p>
                                                    {/* <input
                                                    //     type="email"
                                                    //     id="email"
                                                    //     name="email"
                                                    //     onChange={handleChange}
                                                    //     onBlur={handleBlur}
                                                    //     value={values.email}
                                                    //     placeholder="Email"
                                                    // /> */}
                                                    <ErrorMessage name="email" component="div" />
                                                    <input id="email" value={values.email} name="email" onBlur={handleBlur} onChange={handleChange} class="w3-input" type="email" placeholder="Email" />

                                                </p>
                                                <p>
                                                    {/* <PhoneInput id="phone" value={this.state.phone} onChange={this.onChange}
country={'us'}
value={this.state.phone}
onChange={phone => this.setState({ phone })}

/>           */}

 <ReactPhoneInput
 className="flag"
            name= "phone"
          country={'us'}
          value={values.phone}
          onChange={this.handleOnChange}
      
        />
                                                    {/* <PhoneInput
                                                        country={'us'}
                                                        value={values.phone}
                                                        onBlur={handleBlur}
                                                        onChange={handleChange}
                                                        id="phone"
                                                        name="phone"
                                                        class="w3-input" placeholder="Phone" 
                                                    /> */}

                                                    {/* <InputMask id="phone" name="phone" value={values.phone} onBlur={handleBlur} onChange={handleChange} class="w3-input"  placeholder="Phone"  mask="9999999999" maskChar=" " />  */}
                                                    <ErrorMessage name="phone" component="div" />
                                                </p>

                                                <p>
                                                    <ErrorMessage name="country" component="div" />
                                                    <select style={{ color: 'grey', fontSize: '-20px' }} id="country" name="country" onBlur={handleBlur} onChange={handleChange} value={values.country} class="w3-input" placeholder="Select Country" defaultValue="">
                                                        <option >Select Country</option>
                                                        {country.length > 0 ? country.map((data) => (
                                                            <option key={data.ip} value={data.name}>{data.name}</option>
                                                        )) : ''}
                                                    </select>

                                                </p>
                                                <p>
                                                    <ErrorMessage name="services" component="div" />
                                                    <select style={{ color: 'grey', fontSize: '-20px' }} id="services" name="services" value={values.services} onBlur={handleBlur} onChange={handleChange} class="w3-input" defaultValue="">
                                                        <option >Select Services</option>
                                                        {services.length > 0 ? services.map((data) => (
                                                            <option key={data.id} value={data.name}>{data.name}</option>
                                                        )) : ''}
                                                    </select>


                                                </p>
                                                <p>
                                                    <ErrorMessage name="budget" component="div" />
                                                    <select style={{ color: 'grey', fontSize: '-20px' }} id="budget" name="budget" value={values.budget} onBlur={handleBlur} onChange={handleChange} class="w3-input" defaultValue="">
                                                        <option >Select Budget</option>
                                                        >{budget.length > 0 ? budget.map((data) => (
                                                            <option key={data.id} value={data.price}>{data.price}</option>
                                                        )) : ''}
                                                    </select>
                                                    {/* <input class="w3-input" id="budget" name="budget" value={values.budget} onBlur={handleBlur} onChange={handleChange} type="text" placeholder="Your Budget" /> */}</p>

                                                <p>
                                                    <ErrorMessage name="detail" component="div" />
                                                    <input class="w3-input" id="detail" name="detail" value={values.detail} onBlur={handleBlur} onChange={handleChange} type="text" placeholder="Project Details" /></p>


                                                <button type='reset' type="submit" style={{ background: 'white', color: 'black', border: '1px solid black' }} className="btn">Submit</button>
                                            </form>
                                        </div>
                                    )}
                            </Formik>


                        </div>
                    </div>
                </section>





               <section id="contact" >
                    <div class="container ">
                        <div class="row">
                            <div class="col-md-6">
                                <h3 >CONTACT US</h3>
                                <h2 class="mt-3" >Let's Work Together and Start A New Project</h2>
                                <h5 class="mt-3">India</h5>
                                <p style={{fontFamily : 'Roboto'}} id="desktop-address-view"> Address - Plot No. 183, Sector-28, Faridabad, Haryana, 121008<br/>
                 <new style={{marginLeft : '66px' , fontFamily : 'Roboto'}}>A Block, Sector-46, Noida, Uttar Pradesh, 201303</new></p>
                                <p id="mobile-address-view"> Address : Plot No. 183, Sector-28,<br /> Faridabad, Haryana & A Block,<br /> Sector-46, Noida, Uttar Pradesh</p>
                                <p style={{fontFamily : 'Roboto'}}><strong style={{ fontWeight: 'bold' , color: "black" , fontFamily : 'Roboto'}}>Email</strong> - info@omkatech.com</p>
                                <p style={{fontFamily : 'Roboto'}}><strong style={{ fontWeight: 'bold' , color: "black" , fontFamily : 'Roboto'}}>Sales </strong>:  +91 97175 11913 (GLOBAL) <br/> <new style={{marginLeft : '48px'}}>+1 786 855 1172 (USA)</new></p>
                            </div>
                           
                            <div class="col-md-6">                           
                                <img src={img20} />
                            </div>
                           
                        </div>
                    </div>
                </section>
                <Footer {...this.props} />
            </div>
        )
    }
}

Contact.propTypes = {
    fetchServices: PropTypes.func,
    fetchCountry: PropTypes.func,
    fetchBudget: PropTypes.func,
}


const mapStateToProps = state => ({
    services: state.services.services,
    budget: state.budget.budget,
    country: state.country.country,
})

export default connect(mapStateToProps, { fetchServices, fetchBudget, fetchCountry })(Contact);