import React, { Component } from 'react';
import { DropdownButton, MenuItem } from 'react-bootstrap';
import List from './List';

class FilteredList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      type: "all"
    };
  }

  onSearch = (event) => {
    this.setState({ search: event.target.value.trim().toLowerCase() });
  }

  onFilter = (type) => {
    this.setState({ type });
  }

  filterItem = (item) => {
    const searchMatch = item.name.toLowerCase().includes(this.state.search);
    const typeMatch = this.state.type === "all" || item.type.toLowerCase() === this.state.type;
    return searchMatch && typeMatch;
  }

  render(){
    return (
        <div className="filter-list">
          <h1>Produce Search</h1>
          <DropdownButton id="typeDropdown" title="Type">
            <MenuItem eventKey="all" onSelect={this.onFilter}>All</MenuItem>
            <MenuItem eventKey="fruit" onSelect={this.onFilter}>Fruit</MenuItem>
            <MenuItem eventKey="vegetable" onSelect={this.onFilter}>Vegetables</MenuItem>
          </DropdownButton>

          <input type="text" placeholder="Search" onChange={this.onSearch} />
          <List items={this.props.items.filter(this.filterItem)} />
        </div>
    );
  }
}

export default FilteredList;