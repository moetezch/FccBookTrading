import React, { Component } from 'react';
import { Row,Input,Icon } from "react-materialize"
import { reduxForm, Field, FieldArray } from 'redux-form'
export default class Settings extends Component {
  render() {
    return (
      <div className="container">
      
      <h2>Profile</h2>  
      <form onSubmit={()=>console.log('hi there ')}>    
      <Row>
      <Input s={6} label="First Name"><Icon>account_circle</Icon></Input>
      <Input s={6} label="last Name"><Icon>supervisor_account</Icon></Input>
      <Input type="email" label="Email" s={12}><Icon>email</Icon></Input>
      <Input s={12} label="Telephone" type='tel'><Icon>phone</Icon></Input>
      <Input s={4} label="Country" type='tel'><Icon></Icon></Input>
      <Input s={4} label="State" type='tel'><Icon></Icon></Input>
      <Input s={4} label="City" type='tel'><Icon></Icon></Input>
  </Row>
          <button className="btn waves-effect waves-light"
           type="submit" >
           <i className="material-icons right">done</i>
           Save
           </button>
  </form>
      
      </div>
    );
  }
}