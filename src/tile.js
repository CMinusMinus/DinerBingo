import React from 'react';
import ReactDOM from 'react-dom';

export default class Tile extends React.Component {
  render() {
    const {title, description} = this.props;
    console.log(description)
    return(
      <div 
        className= "col-xs-2"
        style={{
          borderStyle:'solid',
          borderWidth:'2px',
          borderColor:'black',
          textAlign:'center',
          height:'0',
          marginLeft: this.props.expanded && '5%',
          width: this.props.expanded ? '90%' : '20%',
          paddingBottom: this.props.expanded ? '40%' : '20%',
          display: 'block',
          backgroundColor: this.props.isWon ? '#DDD' : 'white'
        }}
        onClick={() => this.props.handleClick({title, description})}
      >
        <div style={{ fontSize: this.props.expanded ? '5em' : '2.5em' }}>{title}</div>
        <br />
        <div style={{ fontSize: '2.5em' }}>{this.props.expanded && description}</div>
      </div>
    );
  }
}