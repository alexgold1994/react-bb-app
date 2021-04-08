import React, {Component} from 'react';
import styled from 'styled-components';
import bbService from '../../services/bbService';

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
    margin-right: 20px
`;

const CharImg = styled.img`
    margin: 0 auto;
    height: 150px;
    weight: 100px
`

export default class RandomChar extends Component {

    constructor() {
        super();
        this.updateChar();
    }

    bbService = new bbService();

    state = {
        name: null,
        img: null,
        birthday: null,
        nickname: null,
        status: null,
        occupation: null
    }

    updateChar() {
        const id = 1;
        this.bbService.getCharacter(id)
            .then((char) => {
                this.setState({
                    name: char[0].name,
                    birthday: char[0].birthday,
                    nickname: char[0].nickname,
                    status: char[0].status,
                    occupation: char[0].occupation,
                    img: char[0].img
                })
            })
    }

    render() {
        const {name, img, birthday, nickname, status, occupation} = this.state;

        return ( 
            
            <RandomBlock>
                <h4>Random Character: {name} </h4>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between">
                        <CharImg src={img} alt="char img" height="100px"/>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <Term>Birthday</Term>
                        <span> {birthday} </span>
                    </li>         
                                         
                    <li className="list-group-item d-flex justify-content-between">
                        <Term>Nickname</Term>
                        <span> {nickname} </span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <Term>Status</Term>
                        <span> {status} </span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <Term>occupation </Term>
                        <span> {occupation} </span>
                    </li>
                </ul>
            </RandomBlock>
        );
    }
}
