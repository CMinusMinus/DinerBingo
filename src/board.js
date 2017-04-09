import React from 'react';
import ReactDOM from 'react-dom';
import Tile from './tile';
import winCheck from './win';


export default class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tileSelected: null,
      indexesWon: [12]
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleClick(tile) {
    if(!this.state.tileSelected) {
      this.setState({
        tileSelected: tile,
      })
    }
  }

  handleSelect() {
    const tileIndex = this.props.tiles.findIndex(item => (
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
          let check = this.state.indexesWon.find((item) => (count === item));
          if (check !== undefined) {
            board[i][j].isWon = true;
            console.log(check)
          }
          count++;
        }
      }
    }

    return this.state.tileSelected ? (
      <div>
        <Tile 
          title={this.state.tileSelected.title}
          expanded
          description={this.state.tileSelected.description} 
          handleClick={this.handleClick}
        />
        <div style={{
        width: '100%',
        height: '20%',
      }}>
        <button 
          style={{
            height: "100px",
            width: "80%",
            marginLeft: "10%",
            fontSize: "3em"
          }}
          className=" text-center btn btn-primary btn-lg btn-success"
          onClick={() => this.handleSelect()}
        >
          Select
        </button>
      </div>
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