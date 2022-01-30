import React, { Component } from 'react';

export default class Left extends Component {
  render() {
    return <div>
      {
        this.props.const.map((de)=>(
          <p>{de}</p>
        ))
      }
    </div>;
  }
}
