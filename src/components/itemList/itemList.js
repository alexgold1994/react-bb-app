import React, {Component} from 'react';
import './itemList.css';
export default class ItemList extends Component {

    render() {
        return (
            <ul className="item-list list-group">
                <li className="list-group-item">
                    Walter White
                </li>
                <li className="list-group-item">
                    Jesse Pinkman
                </li>
                <li className="list-group-item">
                    Saul Goodman
                </li>
            </ul>
        );
    }
}