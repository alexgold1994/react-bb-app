import React, {Component} from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import styled from 'styled-components';

const ListGroupItemOne = styled(ListGroupItem)`
    cursor: pointer;
`;


export default class ItemList extends Component {

    render() {
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