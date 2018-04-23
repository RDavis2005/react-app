import React from 'react';
import ReactDOM from 'react-dom';
import GifList from './components/GifList';
import SearchBar from './components/SearchBar';
import request from 'superagent';
import './styles/app.css';

class App extends React.Component {
  constructor() {
      super();
    
      this.state = {
        gifs: []
      };
  
      this.handleTermChange = this.handleTermChange.bind(this);
  }
  
  handleTermChange(term) {
      const url = `https://api.giphy.com/v1/gifs/search?q=${term.replace(/\s/g, '+')}&api_key=z5IphVV3Mg3iKstkKNCMbM67o3qzFbi0&limit=5`;
    
      request.get(url, (err,res) => {
          this.setState({ gifs: res.body.data })
      });
  }

  render() {
    return (
      <div>
        <SearchBar onTermChange={this.handleTermChange} />
        <GifList gifs={this.state.gifs} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));