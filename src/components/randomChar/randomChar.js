import React, {Component} from 'react';
import './randomChar.css';

export default class RandomChar extends Component {

    render() {

        return (
            <div className="random-block rounded">
                <h4>Random Character: Walter White</h4>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Birthday </span>
                        <span>09-07-1958</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Nickname
                        </span>
                        <span>Heisenberg</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Status
                        </span>
                        <span>Deceased</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">occupation </span>
                        <span>Meth King Pin</span>
                    </li>
                </ul>
            </div>
        );
    }
}
