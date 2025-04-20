import React, { Component } from 'react';
import './List.css';

class List extends Component {
    render() {
        const { items } = this.props;
        
        return (
            <div className="List">
                {items.length > 0 ? (
                    <ul>
                        {items.map((item, index) => (
                            <li 
                                key={index} 
                                className={item.type.toLowerCase() + '-item'}
                            >
                                <span className="item-name">{item.name}</span>
                                <span className="item-type">{item.type}</span>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p className="no-results">No items match your search criteria</p>
                )}
            </div>
        );
    }
}

export default List;
