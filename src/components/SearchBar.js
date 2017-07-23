import React from 'react';

var search = '';
// creates a component SearchBar
class SearchBar extends React.Component {

  // everytime the input changes it comes here and gets updated
  onInputChange(term) {
    search = term;
  }

  keyEventHandler(k) {
    if (k.key === 'Enter') {
      this.props.onTermChange(search);
    }
  }



  render() {
    return (
      // input updates the search term every time theres a change
      // button sends the updated term to index when pressed
      <div className="search">
        <input placeholder="Search" onChange={event => this.onInputChange(event.target.value)} onKeyPress={event => this.keyEventHandler(event)} />
        <button onClick={event => this.props.onTermChange(search)}>Search</button>
      </div>
    );
  }
}

export default SearchBar;
// makes SearchBar available to import to other files
