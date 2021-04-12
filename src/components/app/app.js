import React, {Component} from 'react';
import {Col, Row, Container} from 'reactstrap';
import styled from 'styled-components';
import Header from '../header';
import RandomChar from '../randomChar';
import ErrorMessage from '../errorMessage/errorMessage';
import CharacterPage from '../characterPage/characterPage';
import ItemList from '../itemList';
import CharDetails from '../charDetails';
import bbService from '../../services/bbService';

const Btn = styled.button`
        padding: 12px;
        background-color: #1e2edb;
        border: none;
        border-radius: 4px;
        color: #fff;
        margin-bottom: 40px;
        outline: none;
        box-shadow: 0px 0px 30px rgba(256,256,256,.1);
        cursor: pointer;
        &:focus {
            outline: none;
        }
`


export default class App extends Component {

    bbService = new bbService();

    state = {
        showRandomChar: true,
        error: false
    }

    componentDidCatch() {
        this.setState({
            error: true
        })
    }

    toggleRandomChar = () => {
        this.setState((state) => {
            return {
                showRandomChar: !state.showRandomChar
            }
        });
    }


    render() {
        const char = this.state.showRandomChar ? <RandomChar/> : null;
        
        if(this.state.error) {
            return <ErrorMessage/>
        }
    
    

    return (
            <> 
                <Container>
                    <Header />
                </Container>
                <Container>
                    <Row>
                        <Col lg={{size: 5, offset: 3}}>
                            {char}
                            <Btn 
                                className="toggle-btn"
                                onClick={this.toggleRandomChar}>Toggle random character</Btn>
                        </Col>
                    </Row>
                    <CharacterPage/>
                    <Row>
                        <Col md='6'>
                            <ItemList
                                onCharSelected={this.onCharSelected}
                                getData={this.bbService.getAllEpisodes} />
                        </Col>
                        <Col md='6'>
                            <CharDetails
                                charId={this.state.selectedChar} />
                        </Col>
                    </Row>

                    <Row>
                        <Col md='6'>
                            <ItemList
                                onCharSelected={this.onCharSelected}
                                getData={this.bbService.getAllQuotes} />
                        </Col>
                        <Col md='6'>
                            <CharDetails
                                charId={this.state.selectedChar} />
                        </Col>
                    </Row>
                </Container>
            </>
        );
        
    };
}


