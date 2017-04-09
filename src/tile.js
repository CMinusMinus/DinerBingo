import React from 'react';
import ReactDOM from 'react-dom';

export default class Tile extends React.Component {
  render() {
    return(
      <div 
        className= "col-xs-2"
        style={{
          borderStyle:'solid',
          borderWidth:'2px',
          borderColor:'black',
          fontSize:'2.5em',
          textAlign:'center',
          height:'0',
          width:'20%',
          paddingBottom:'20%',
          display: 'block'
        }}
      >
        {this.props.title}
      </div>
    );
  }
}