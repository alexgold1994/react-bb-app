import React, {Component} from 'react';
import styled from 'styled-components';
import bbService from '../../services/bbService';

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

const CharImg = styled.img`
    margin: 0 auto;
    height: 150px;    
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

const MessageSelect = styled.span`
    font-weight: bold;
    color: white;
    text-align: right;
    font-size: 30px;
`;

const Field = ({char, field, label}) => {
    return (
    <li className="list-group-item d-flex justify-content-between">
        <Term>{label}</Term>
        <span> {char[field]} </span>
    </li> 
    )
}

export {Field}

export default class CharDetails extends Component {

    bbService = new bbService();

    state = {
        char: null
    }

    componentDidMount() {
        this.updateChar();
    }

        //Проверка на совпадение с пред. пропсами.
    componentDidUpdate(prevProps) {
        if (this.props.charId !== prevProps.charId) {
            this.updateChar();
        }
    }

    updateChar() {
        const {charId} = this.props;
        if (!charId) {
            return;
        }

        this.bbService.getCharacter(charId)
            .then((char) => {
                this.setState({char})
            })
    }

    render() {

        if (!this.state.char) {
            return <MessageSelect> Please select a character !</MessageSelect>
        }
        const {char} = this.state;
        const {name, img} = char

        return (
            <CharDetailsMain>
                <h4>{name}</h4>
                <ul className="list-group list-group-flush">
                <li className="list-group-item d-flex justify-content-between">
                    <CharImg src={img} alt="char img"/>
                </li>
                    {
                        React.Children.map(this.props.children, (child) => {
                            return React.cloneElement(child, {char})
                        })
                    }                   
                </ul>
            </CharDetailsMain>
        );
    }
}