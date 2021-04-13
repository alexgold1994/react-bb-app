import React, {Component} from 'react';
import ItemList from '../itemList';
import CharDetails, {Field} from '../charDetails/charDetails';
import ErrorMessage from '../errorMessage/errorMessage';
import bbService from '../../services/bbService';
import RowBlock from '../rowBlock/rowBlock';

export default class CharacterPage extends Component {

    bbService = new bbService();
    state = {
        selectedChar: 10,
        error: false
    }

    onItemSelected = (id) => {
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
            onItemSelected={this.onItemSelected}
            getData={this.bbService.getAllCharacters}
            renderItem={({name}) => `${name}`} />
        )

        const charDetails = (
            <CharDetails charId={this.state.selectedChar}>
                <Field field='status' label='Status'/>                
                <Field field='occupation' label='Occupation'/>
                <Field field='birthday' label='Born'/>
                <Field field='nickname' label='Nickname'/>
            </CharDetails>

        )

        return (
            <RowBlock left={itemList} right={charDetails} />
        )

    }
}