import React from 'react';
import ReactDOM from 'react-dom';
import Tile from './tile';
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
  render() {
    return(
      <div>
        <Board
          tiles={tiles}
         />
      </div>
    );
  }
}

ReactDOM.render(<App />,
  document.getElementById('react-container')
);