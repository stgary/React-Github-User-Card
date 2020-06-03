import React, { Component } from 'react';
import Followers from './Followers';
import UserCard from './UserCard';
import axios from 'axios';
import { TextField, Button } from '@material-ui/core';

class App extends Component {
  state = {
    followers: [],
    user: {},
    text: ''
  };

  componentDidMount() {
    axios
    .get('https://api.github.com/users/stgary')
    .then(res => {
      this.setState({
        user: res.data,
      });
    })
    .catch(err => console.log(err))
  }

  search = e => {
    e.preventDefault();
    axios
    .get(`https://api.github.com/users/${this.state.text}`)
    .then(res => {
      this.setState({
        user: res.data,
        text: ''
      });
    })
    .catch(err => console.log(err));

    axios
    .get(`https://api.github.com/users/${this.state.text}/followers`)
    .then(res => {
      this.setState({
        followers: res.data,
        text: ''
      });
    })
    .catch(err => console.log(err));
  }

  searchFollowers = url => {
    axios
    .get(url)
    .then(res => {
      this.setState({
        followers: res.data,
        text: ''
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
      <div className='app-container'>
        <header>
          <h1>React Github User Card</h1>
        </header>
        <form 
          className='search-form'
          onSubmit={this.search} 
          noValidate 
          autoComplete="off"
        >
          <TextField 
            style={{ 
              width: '30%', 
              margin: 25,
              color: '#333333' 
            }}
            // color='secondary'
            id="outlined-basic" 
            label="Search by username..." 
            variant="outlined"
            onChange={this.handleChanges} 
          />
          <Button 
            style={{ 
              color: '#fff', 
              backgroundColor: '#403b3b',
              width: 100,
              height: 40
            }} 
            type='submit' 
            variant="filled">
            Search
          </Button>
        </form>
        <UserCard searchFollowers={this.searchFollowers} user={this.state.user} />
        <Followers searchFollowers={this.searchFollowers} followers={this.state.followers} />
      </div>
    );
  }
}

export default App;
