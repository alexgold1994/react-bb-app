import React, {Component} from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import styled from 'styled-components';
import bbService from '../../services/bbService';
import StyledSpinner from '../spinner/spinner'

const ListGroupItemOne = styled(ListGroupItem)`
    cursor: pointer;
`;


export default class ItemList extends Component {

    bbService = new bbService();

    state = {
        charList: null
    }

/*     componentDidMount() {
        this.bbService.getAllCharacters()
            .then((charList) => {
                this.setState({
                    charList
                })
            })
    } */

    render() {

        const {charList} = this.state;

        if (!charList) {
            return <StyledSpinner/>
        }

        return (
            <ListGroup>
                <ListGroupItemOne>
                    Walter White
                </ListGroupItemOne>
                <ListGroupItemOne>
                    Jesse Pinkman
                </ListGroupItemOne>
                <ListGroupItemOne>
                    Saul Goodman
                </ListGroupItemOne>
            </ListGroup>
        );
    }
}