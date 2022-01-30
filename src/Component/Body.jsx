import React, { Component } from 'react';
import Main from './Main';
import Left from './Left'
import Recht from './Recht'

export default class Body extends Component {
  render() {
    return <div style={{display:'flex',justifyContent:'space-evenly'}}>

  <Recht  const={['lorem','lorem','lorem']}/>
        <Main
        name={this.props.name}
        yas={this.props.yas}
        kurs={this.props.kurs}
        />
        <Left const={['lorem','lorem','lorem']} />
    </div>;
  }
}
