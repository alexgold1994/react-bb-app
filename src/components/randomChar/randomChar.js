import React, {Component} from 'react';
import styled from 'styled-components';
import bbService from '../../services/bbService';
import { Spinner } from 'reactstrap';
import ErrorMessage from '../errorMessage/errorMessage';

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

const StyledSpinner = styled(Spinner)`
    margin: 30% ;
            
`

export default class RandomChar extends Component {

    constructor() {
        super();
        this.updateChar();
    }

    bbService = new bbService();

    state = {
     char: {},
     loading: true
    }

    onCharLoaded = (char) => {
        this.setState({ 
            char,
            loading: false,
            error: false
        })
    }

    onError = (err) => {
        this.setState({
            error: true,
            loading: false
        })
    }

    updateChar() {
        const id = Math.floor(Math.random()*50 + 1);
        this.bbService.getCharacter(id)
            .then(this.onCharLoaded)
            .catch(this.onError);
    }

    render() {
        const { char , loading , error} = this.state;

        const errorMessage = error ? <ErrorMessage/> : null;
        const spinner = loading ? <StyledSpinner color="warning" style={{ width: '10rem', height: '10rem' }} /> : null; 
        const content = !(loading || error) ? <View char={char}/> : null;

            ;

        return (             
            <RandomBlock>
            {errorMessage}
            {spinner}
            {content}
            </RandomBlock>
        );
    }
}

const View = ({char}) => {
        const {name, img, birthday, nickname, status, occupation} = char;
    return (
        <>
            <h4>Random Character: {name} </h4>
            <ul className="list-group list-group-flush">
                <li className="list-group-item d-flex justify-content-between">
                    <CharImg src={img} alt="char img"/>
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
        </>
    )
}