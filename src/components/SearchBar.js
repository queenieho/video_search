import React from 'react';

var search = '';

class SearchBar extends React.Component {

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
      <div className="search">
        <input placeholder="Search" onChange={event => this.onInputChange(event.target.value)} onKeyPress={event => this.keyEventHandler(event)} />
        <button onClick={event => this.props.onTermChange(search)}>Search</button>
      </div>
    );
  }
}

export default SearchBar;
