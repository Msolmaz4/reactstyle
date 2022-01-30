import React, { Component } from 'react';
import Body from './Component/Body';
import Foter from './Component/Foter';
import Header from './Component/Header';

export default class App extends Component {

  state={
    name:'hasan',
    yas:23,
    cours:'react'
  }



  render() {
    return <div>

    <Header const={['home', 'about','contact'] }/>
    <Body
    name={this.state.name}
    yas={this.state.yas}
    kurs={this.state.cours}
    />
    <Foter/>

    </div>;
  }
}
