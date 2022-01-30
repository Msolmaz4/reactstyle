import React, { Component } from 'react';

export default class Header extends Component {
  render() {
    return <div>
    <ul style={{listStyleType:'none',display:'flex',justifyContent:'space-evenly'}}>
      {
        this.props.const.map((el) => { // this.props.const.map((el) => ( <li>{el}</li>)  ) bozlede zayim var
          return<li>{el}</li>
         
        })
      }
    </ul>ss
    </div>;
  }
}
