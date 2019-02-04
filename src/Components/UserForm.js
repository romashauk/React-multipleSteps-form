import React, { Component } from 'react';
import FormUserDetails from './FormUserDetails';
import FormPersonalDetails from './FormPersonalDetails';
import Confirm from './confirm';
import Success from './success'

export default class UserForm extends Component {
  state={
    step:1,
    firstName:'',
    lastName:'',
    email:'',
    occupation:'',
    city:'',
    bio:'',
  }
  nextStep=()=>{
    const{step}= this.state;
    this.setState({
      step:step+1,
    })
  }
  prevStep=()=>{
    const{step}= this.state;
    this.setState({
      step:step-1,
    })
  }
  handleChange=input=>e=>{
    this.setState({[input]: e.target.value});

  }
  render() {
    const{step}=this.state;
    const{firstName,lastName,occupation,city,bio,email,}=this.state;
    const values = {
      firstName,lastName,occupation,city,bio,email
    }
    switch(step){
      case 1:
      return(
        <FormUserDetails
        nextStep={this.nextStep}
        handleChange={this.handleChange}
        values={values}
        />
      )
      case 2:
        return (
        <FormPersonalDetails
        values={values}
        handleChange={this.handleChange}
        nextStep={this.nextStep}
        prevStep={this.prevStep}
        />
        )
      case 3:
      return (
        <Confirm
        values={values}
        nextStep={this.nextStep}
        prevStep={this.prevStep}
        />
        )
      case 4:
      return <Success/>
    }
  }
}
