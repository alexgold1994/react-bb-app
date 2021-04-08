import React, {Component} from 'react';
import styled from 'styled-components';

const RandomBlock = styled.div`
    background-color: #fff;
    padding: 25px 25px 15px 25px;
    margin-bottom: 40px;
    border-radius: 1%;
    h4 {
        margin-bottom: 20px;
        text-align: center;
    }
`;

const Term = styled.span`
    font-weight: bold;
`;

export default class RandomChar extends Component {

    render() {

        return (
            <RandomBlock>
                <h4>Random Character: Walter White</h4>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between">
                        <Term>Birthday</Term>
                        <span>09-07-1958</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <Term>Nickname</Term>
                        <span>Heisenberg</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <Term>Status</Term>
                        <span>Deceased</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <Term>occupation </Term>
                        <span>Meth King Pin</span>
                    </li>
                </ul>
            </RandomBlock>
        );
    }
}
