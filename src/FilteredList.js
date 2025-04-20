import React, { Component } from 'react';
import './FilteredList.css';
import List from './List';

class FilteredList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: '',
            type: 'All'
        };
    }

    // Update state when input value changes
    onSearch = (event) => {
        this.setState({ search: event.target.value.trim().toLowerCase() });
    }

    // Handle dropdown selection
    onSelectFilterType = (eventKey) => {
        this.setState({ type: eventKey });
    }

    // Filter items based on search term and type
    filterItem = (item) => {
        // Check if the current search term is contained in this item
        const matchesSearch = item.name.toLowerCase().includes(this.state.search);
        
        // Check item's type
        const matchesType = this.state.type === 'All' || item.type === this.state.type;
        
        return matchesSearch && matchesType;
    }

    render() {
        return (
            <div className="FilteredList">
                <h2>Produce Search</h2>
                
                <div className="filter-controls">
                    <div className="search-box">
                        <input 
                            type="text" 
                            className="form-control"
                            placeholder="Search" 
                            onChange={this.onSearch}
                        />
                    </div>
                    
                    <div className="filter-options">
                        <select 
                            id="filter" 
                            className="form-control" 
                            onChange={(e) => this.setState({ type: e.target.value })}
                            value={this.state.type}
                        >
                            <option value="All">All</option>
                            <option value="Fruit">Fruits</option>
                            <option value="Vegetable">Vegetables</option>
                        </select>
                    </div>
                </div>
                
                <List items={this.props.items.filter(this.filterItem)} />
            </div>
        );
    }
}

export default FilteredList;
