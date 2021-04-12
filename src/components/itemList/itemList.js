import React, {Component} from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import styled from 'styled-components';
import StyledSpinner from '../spinner/spinner'

const ListGroupItemOne = styled(ListGroupItem)`
    cursor: pointer;
`;


export default class ItemList extends Component {

    state = {
        itemList: null
    }

    componentDidMount() {
        const {getData} = this.props

        getData()
            .then((itemList) => {
                this.setState({
                    itemList
                })
            })
    }

    renderItems(arr) {
        return arr.map((item, i) => {
            return (
                <ListGroupItemOne
                 key={i}
                 onClick={ () => this.props.onCharSelected( i + 1)}>
                    {item.name}
                </ListGroupItemOne>
            )
        })
    }

    render() {

        const {itemList} = this.state;

        
        if (!itemList) {
            return <StyledSpinner/>
        }

        const items = this.renderItems(itemList)

        return (
            <ListGroup>
                {items}
            </ListGroup>
        );
    }
}