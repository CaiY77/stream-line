import React, { Component } from 'react';
import {Form,Button,Input} from 'semantic-ui-react'
class CommentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      say: ''
    };
  }

  handleChanges =(event)=>{
    this.setState({
      say: event.target.value
    });
  }
  passItOn = () =>{
    this.props.handleSub(this.state.say);

    this.setState({
      say: ''
    });
  }

  render() {
    return (
      <Form className="form" onSubmit={()=>this.passItOn()}>
        <input onChange={this.handleChanges} value={this.state.say} placeholder='Say something mean ...' />
        <Button className="button-form" type="submit" content="Send"/>
      </Form>
    );
  }

}

export default CommentForm;
