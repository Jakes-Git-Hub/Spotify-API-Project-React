import React from 'react';

import './SearchBar.css';

export class SearchBar extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      term: ''
    };
    this.search = this.search.bind(this);
    this.handleTermChange = this.handleTermChange.bind(this);
  }

  componentDidMount() {
    const searchTerm = localStorage.getItem('searchTerm');
    if (searchTerm) {
      this.setState({ term: searchTerm }, () => {
        this.handleTermChange({ target: { value: searchTerm } });
      });
      localStorage.removeItem('searchTerm');
    } else {
      this.setState({ term: 'Enter A Song, Album or Artist' }, () => {
        this.handleTermChange({ target: { value: 'Enter A Song, Album or Artist' } });
      });
    }
  }

  handleTermChange(event) {
    this.setState({term: event.target.value}, () => {
      this.search();
    });
  }

  search() {
    console.log('search term:', this.state.term);
    this.props.onSearch(this.state.term);
  }

  render() {
    return (
      <div className="SearchBar">
        <input placeholder="Enter A Song, Album or Artist"
               onChange={this.handleTermChange} />
        <button className="SearchButton" onClick={this.search}>SEARCH</button>
      </div>
    );
  }
}