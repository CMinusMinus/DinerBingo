import React from 'react';
import ReactDOM from 'react-dom';
import Tile from './tile';

class Board extends React.Component {
  render() {
    return(
      <div>{this.props.message}</div>
    );
  }
}