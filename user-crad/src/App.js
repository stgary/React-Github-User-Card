import React from 'react';
import axios from 'axios';
import Card from './component/Card'
import './App.css';

class App extends React.Component {
  state = {
    users: [],
    text: ''
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

  fetch = e => {
    e.preventDefault();
    axios
    .get(`https://api.github.com/users/${this.state.text}/followers`)
    .then(res => {
      console.log(res);
      this.setState({
        users: res.data
      });
    })
    .catch(err => console.log(err));
  }

  handleChanges = e => {
    this.setState({
      text: e.target.value
    });
  };

  render() {
    return (
      <div>
        <div className='title'>
          <h1>Users</h1>
        </div>
        <div className='search'>
          <input value={this.state.text} onChange={this.handleChanges} />
          <button onClick={this.fetch}>Search Users</button>
        </div>
        <Card users={this.state.users} />
      </div>
    );
  }
}

export default App;
