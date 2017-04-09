import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import Board from './board';


var tiles = [];
for(var i=0; i<5; i++){
  var row = [];
  for (var j=0; j<5; j++){
    row.push({title: `tile ${i+j}`, description: 'this is tile'});
  }
  tiles.push(row);
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isFetching: false,
      tiles: []
    };
    this.fetchBoard = this.fetchBoard.bind(this);
  }

  fetchBoard() {
    this.setState({
      isFetching: true
    })
    axios.get('/data')
    .then(function(response) {
      console.log(response)
      this.setState({
        tiles: response.data,
        isFetching: false
      });
    }.bind(this))
    .catch(function(err) {
      console.error(err);
    });
  }

  componentWillMount() {
    this.fetchBoard();
  }
  render() {
    return (
      <div>
        <h1 className='col-xs-2' style={{textAlign: 'center', width:'20%', fontSize:'170px'}}>D</h1>
        <h1 className='col-xs-2' style={{textAlign: 'center', width:'20%', fontSize:'170px'}}>I</h1>
        <h1 className='col-xs-2' style={{textAlign: 'center', width:'20%', fontSize:'170px'}}>N</h1>
        <h1 className='col-xs-2' style={{textAlign: 'center', width:'20%', fontSize:'170px'}}>G</h1>
        <h1 className='col-xs-2' style={{textAlign: 'center', width:'20%', fontSize:'170px'}}>O</h1>
        <Board
          isFetching={this.state.isFetching}
          tiles={this.state.tiles}
         />
      </div>
    );
  }
}

ReactDOM.render(<App />,
  document.getElementById('react-container')
);