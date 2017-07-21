import React from 'react';

// creates a component SearchBar
class SearchBar extends React.Component {
  constructor() {
    super();
    //text in searchbar is stored in 'term' and starts out empty
    this.state={ term: '' }
  }

  // everytime the input changes it comes here and gets updated
  onInputChange(term) {
    this.setState({term}); // use setter to change values
    // console.log(term);
    //this.props.onTermChange(term); // props is used to pass values back to the parent
  }

  render() {
    return (
      // 'input' in brackets makes input fields ha ha pun
      // button sends the updated term to index when pressed
      <div className="search">
        <input onChange={event => this.onInputChange(event.target.value)}/>
        <button onClick={event => this.props.onTermChange(this.state.term)}>Search</button>
      </div>
    );
  }
}

export default SearchBar;
// makes SearchBar available to import to other files
