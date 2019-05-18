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

  render() {
    return (
      <Form className="form" onSubmit={()=>this.props.handleSub(this.state.say)}>
        <input onChange={this.handleChanges} value={this.state.say} placeholder='Say something mean ...' />
        <Button className="button-form" type="submit" content="Send"/>
      </Form>
    );
  }

}

export default CommentForm;
