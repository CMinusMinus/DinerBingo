import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';


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
    return(<div>
      <div>{`${this.state.isFetching}`}</div>
      <div>
        {this.state.isFetching || this.state.tiles.map(item => 
          <div>{item.title}</div>
        )}
      </div>
    </div>);
  }
}

ReactDOM.render(<App />,
  document.getElementById('react-container')
);