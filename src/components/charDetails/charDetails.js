import React, {Component} from 'react';
import styled from 'styled-components';

const CharDetailsMain = styled.div`
    background-color: #fff;
    padding: 25px 25px 15px 25px;
    margin-bottom: 40px;
    border-radius: 1%;
    h4 {
        margin-bottom: 20px;
        text-align: center;   
    }
`;

/* const SelectError = styled.span`
    text-align: center;
    color: white;
    margin-left: 45%;
    font-size: 26px;
`; */

const Term = styled.span`
    font-weight: bold;
`;


export default class CharDetails extends Component {

    render() {
        return (
            <CharDetailsMain>
                <h4>Walter White</h4>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between">
                        <Term>occupation</Term>
                        <span> "High School Chemistry Teacher", 
                                "Meth King Pin"</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <Term> birthday</Term>
                        <span>09-07-1958</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <Term>status</Term>
                        <span>Deceased</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <Term>nickname</Term>
                        <span>Heisenberg</span>
                    </li>
                </ul>
            </CharDetailsMain>
        );
    }
}