import React from 'react';
import ReactDOM from 'react-dom';

export default class Tile extends React.Component {
  render() {
    return(
      <div 
        style={{
          borderStyle:'solid',
          borderWidth:'2px',
          borderColor:'black',
          fontSize:'2.5em',
          textAlign:'center',
          height:'0',
          width:'20%',
          paddingBottom:'20%'
        }}
      >
        {this.props.title}
      </div>
    );
  }
}