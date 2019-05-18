import React, { Component } from 'react';
import {Modal} from 'semantic-ui-react'

class Following extends Component {

  render() {
    return (
      <div>
        <Modal trigger={<h1>Following</h1>}>
          <Modal.Content>
            <h1>HelloWorld</h1>
          </Modal.Content>
        </Modal>
      </div>
    );
  }

}

export default Following;
