import './SearchPanel.scss';
import { Component } from 'react';

class SearchPanel extends Component {
  constructor(props) {
    super(props)
    this.state = {
      term:''
    }
  }
//   recipeListData : [
//     {id: "1", title: "Chipotle", image: null, calories: "167", servings: 5, vegan: true, },
//     {id: "2", title: "Onion pasta", image: null, calories: "500", servings: 2, vegan: true, },
//     {id: "3", title: "Seafood salad", image: null, calories: "437", servings: 4, vegan: false, },
//     {id: "4", title: "Kimchi", image: null, calories: "246", servings: 6, vegan: false, },
//     {id: "5", title: "Dumplings with onion and sour cream", image: null, calories: "357", servings: 4, vegan: false, }
// ],
// term : "Chi",

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