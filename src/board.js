import React from 'react';
import ReactDOM from 'react-dom';
import Tile from './tile';


export default class Board extends React.Component {
  render() {
    return(
      <div>{
        this.props.tiles.map(function(row){
          return (<div> {row.map(function(item, counter){
            return <Tile
              title={item.title}
              className="col-xs-2"
            />
          })}</div>);
        })
      };</div>
    );
  }
}