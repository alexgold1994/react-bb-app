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

    componentDidMount() {
        this.bbService.getAllCharacters()
            .then((charList) => {
                this.setState({
                    charList
                })
            })
    }

    renderItems(arr) {
        return arr.map((item, i) => {
            return (
                <ListGroupItemOne
                 key={i}
                 onClick={ () => this.props.onCharSelected(i)}>
                    {item.name}
                </ListGroupItemOne>
            )
        })
    }

    render() {

        const {charList} = this.state;

        
        if (!charList) {
            return <StyledSpinner/>
        }

        const items = this.renderItems(charList)

        return (
            <ListGroup>
                {items}
            </ListGroup>
        );
    }
}