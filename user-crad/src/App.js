import React from 'react';
import axios from 'axios';
import './App.css';

class App extends React.Component {
  state = {
    users: []
  };

  componentDidMount() {
    axios
    .get('https://api.github.com/users')
    .then(res => {
      console.log(res);
      this.setState({
        users: res.data
      });
    })
    .catch(err => console.log(err))
  }

  render() {
    return (
      <div>

      </div>
    );
  }
}

export default App;
