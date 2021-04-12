import React, {Component} from 'react';
import {Col, Row} from 'reactstrap';
import ItemList from '../itemList';
import CharDetails from '../charDetails';
import ErrorMessage from '../errorMessage/errorMessage';
import bbService from '../../services/bbService';

export default class CharacterPage extends Component {

    bbService = new bbService();
    state = {
        selectedChar: 10,
        error: false
    }

    onCharSelected = (id) => {
        this.setState ({
            selectedChar: id
        })
    }
    componentDidCatch() {
        this.setState({
            error: true
        })
    }
    
    render() {

        if(this.state.error) {
            return <ErrorMessage/>
        }
    

        return (
        <Row>
            <Col md='6'>
                <ItemList
                     onCharSelected={this.onCharSelected}
                     getData={this.bbService.getAllCharacters}
                     renderItem={(item) => item.name} />
            </Col>
            <Col md='6'>
                <CharDetails
                     charId={this.state.selectedChar} />
            </Col>
        </Row>
        )

    }
}