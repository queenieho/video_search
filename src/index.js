import React from 'react';
import ReactDOM from 'react-dom';
import VideoList from './components/VideoList';
import SearchBar from './components/SearchBar';
import request from 'superagent';
import './styles/app.css'

//create App component that will be the parent to everything else
class App extends React.Component {
  constructor() {
    super();

    this.state = {
      videos: []
    };

    this.handleTermChange = this.handleTermChange.bind(this);
  }

  handleTermChange(term) {
    console.log(term); // to see the search term in console log
    // var url = `http://api.giphy.com/v1/gifs/search?q=${term.replace(/\s/g, '+')}&api_key=dc6zaTOxFJmzC`;
    var url = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${term.replace(/\s/g, '+')}&type=video&key=AIzaSyBxSJDECpHk5_5e90dJhFit-YR4CSB4AyY`;
    console.log(url);
    // request.get(url, function(err, res) {
    //   console.log(res.body.items[0]);
    // });
    request.get(url, (err, res) => {
      console.log(res.body.items[0]);
      this.setState({ videos: res.body.items })
    });
  }

  render() {
    return (
      // get term changes through using props in SearchBar

      <div className="app">
        <SearchBar onTermChange={this.handleTermChange} />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
