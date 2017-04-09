import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class App extends React.Component {
  componentWillMount() {
    this.setState({
      isFetching: true
    })
    axios.get('/data')
    .then(function(response) {
      this.setState({
        tiles: response,
        isFetching: false
      });
    })
    .catch(function(err) {
      console.error(err);
    });
  }
  render() {
    return(
      <div>{this.props.isFetching}</div>
    );
  }
}

ReactDOM.render(<App message="Hello World" />, 
  document.getElementById('react-container')
);