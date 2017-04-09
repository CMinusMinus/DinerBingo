import React from 'react';
import ReactDOM from 'react-dom';
import Tile from './tile';


export default class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tileSelected: null
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(tile) {
    this.setState({
      tileSelected: tile,
    })
  }

  render() {
    const tiles = this.props.tiles || null;
    let board = [[],[],[],[],[]];
    let count = 0;
    if(tiles) {
      for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
          board[i][j] = tiles[count];
          count++;
        }
      }
    }
    return this.state.tileSelected ? (
      <div>
        <Tile title={this.state.tileSelected.title} expanded description={this.state.tileSelected.description} />
      </div>
      ) : (
      <div>
        {this.props.isFetching ? <div>Fetching</div> : (board.map(function(row, counter) {
          return (
            <div key={counter} className="row"> {row.map(function(item, counter){
              return (
                <Tile
                  key={counter}
                  title={item.title}
                  description={item.description}
                  className="col-xs-2"
                  handleClick={this.handleClick}
                />
              )},this)}
            </div>
          );
        }, this)
      )};
      </div>
    );
  }
}