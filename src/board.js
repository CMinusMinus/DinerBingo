import React from 'react';
import ReactDOM from 'react-dom';
import Tile from './tile';


export default class Board extends React.Component {
  render() {
    const tiles = this.props.tiles || null;
    let board = [[],[],[],[],[]];
    let count = 0;
    if(tiles) {
      for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
          board[i][j] = tiles[count]
          count++;
        }
      }
    }
    return(
      <div>{
        this.props.isFetching ? <div>Fetching</div> : (board.map(function(row){
          return (<div className="row"> {row.map(function(item, counter){
            return <Tile
              key={counter}
              title={item.title}
              className="col-xs-2"
            />
          })}</div>);
        })
      )};</div>
    );
  }
}