import './SearchPanel.scss';
import { Component } from 'react';

class SearchPanel extends Component {
  constructor(props) {
    super(props)
    this.state = {
      term:''
    }
  }

onUpdateSearch = (e) => {
  const term = e.target.value;
  this.setState({term});
  this.props.onUpdateSearch(term)
}

  render() {
    return (
      <div className="search">
          <input type="text"
            className="search-input"
            placeholder="Search recipe"
            value={this.state.term}
            onChange={this.onUpdateSearch}/>
      </div>
      )
    }
  }

export default SearchPanel;