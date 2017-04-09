import React from 'react';
import ReactDOM from 'react-dom';
import Tile from './tile';


export default class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tileSelected: null,
      indexesWon: [12]
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(tile) {
    this.setState({
      tileSelected: tile,
    })
  }

  handleSelect() {
    const tileIndex = this.state.tiles.findIndex(item => (
      item.title === this.state.tileSelected.title
    ));
    const tilesWon = [...this.state.indexesWon, tileIndex];

    this.setState({
      indexesWon: tilesWon,
      tileSelected: null
    });
    console.log(this.state.indexesWon)
  }

  render() {
    const tiles = this.props.tiles || null;
    let board = [[],[],[],[],[]];
    let count = 0;
    if(!this.props.isFetching) {
      for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
          board[i][j] = tiles[count];
          count++;

          let check = this.state.indexesWon.find((item) => (count === item));
          if (check) {
            board[i][j].isWon = true;
            console.log(check)
          }
          
        }
      }
    }
    return this.state.tileSelected ? (
      <div>
        <Tile 
          title={this.state.tileSelected.title}
          expanded
          description={this.state.tileSelected.description} />
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
                  isWon={item.isWon}
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