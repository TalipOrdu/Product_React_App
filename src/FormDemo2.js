import React, { Component } from 'react'
import {Button,Form,FormGroup,Label,Input} from 'reactstrap';
import alertify from "alertifyjs";

export default class FormDemo2 extends Component {

  state = {email:"",password:"",city:"",description:""}

  handleChange = (event)=>{
    let name = event.target.name;
    let value = event.target.value;
    this.setState({[name]:value})
  }
  handleSubmit = event =>{
    event.preventDefault();
    alertify.success(this.state.email + " Thanks for your FeedBack we'll return as soon as possible.",5);
  }
  render() {
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>

            <FormGroup>
                <Label for="email">Email</Label>
                <Input type="email" name="email" id="email" placeholder="write your email" onChange={this.handleChange}></Input>
            </FormGroup>
            <FormGroup>
                <Label for="password">Password</Label>
                <Input type="password" name="password" id="password" placeholder="write your password" onChange={this.handleChange}></Input>
            </FormGroup>
            <FormGroup>
                <Label for="description">Description</Label>
                <Input type="textarea" name="description" id="description" placeholder="write some information" onChange={this.handleChange}></Input>
            </FormGroup>
            <FormGroup>
                <Label for="city">City</Label>
                <Input type="select" name="city" id="city" onchange={this.handleChange}>
                    <option>Adana</option>
                    <option>Ankara</option>
                    <option>İstanbul</option>
                    <option>İzmir</option>
                    <option>Kayseri</option>
                    <option>Other</option>
                </Input>
            </FormGroup>
            <Button type="submit" color="success">Submit</Button>
        </Form>        
      </div>
    )
  }
}
