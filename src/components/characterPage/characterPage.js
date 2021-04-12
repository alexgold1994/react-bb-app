import React, {Component} from 'react';
import ItemList from '../itemList';
import CharDetails from '../charDetails';
import ErrorMessage from '../errorMessage/errorMessage';
import bbService from '../../services/bbService';
import RowBlock from '../rowBlock/rowBlock';

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
        
        const itemList = (
            <ItemList
            onCharSelected={this.onCharSelected}
            getData={this.bbService.getAllCharacters}
            renderItem={({name}) => `${name}`} />
        )

        const charDetails = (
            <CharDetails
            charId={this.state.selectedChar} />
        )

        return (
            <RowBlock left={itemList} right={charDetails} />
        )

    }
}