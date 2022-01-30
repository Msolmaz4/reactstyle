import React, { Component } from 'react';

export default class Main extends Component {
  render() {
    return <div>
       <h1>kullanici {this.props.name}</h1>
       <h1>kullanici {this.props.yas}</h1>
       <h1>kullanici {this.props.kurs}</h1>
       
           
       
    </div>;
  }
}
