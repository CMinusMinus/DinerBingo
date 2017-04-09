import React from 'react';
import ReactDOM from 'react-dom';
import Tile from './tile';
import Board from './board';

class App extends React.Component {
  render() {
    return(
      <div>
        <Board arr= />
      </div>
    );
  }
}

ReactDOM.render(<App />,
  document.getElementById('react-container')
);