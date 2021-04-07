import React, {Component} from 'react';
import './charDetails.css';
export default class CharDetails extends Component {

    render() {
        return (
            <div className="char-details rounded">
                <h4>Walter White</h4>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">occupation</span>
                        <span> "High School Chemistry Teacher", 
                                "Meth King Pin"</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term"> birthday</span>
                        <span>09-07-1958</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">status</span>
                        <span>Deceased</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">nickname</span>
                        <span>Heisenberg</span>
                    </li>
                </ul>
            </div>
        );
    }
}