import React, {Component} from 'react';
import {Col, Row, Container} from 'reactstrap';
import styled from 'styled-components';
import Header from '../header';
import RandomChar from '../randomChar';
import ItemList from '../itemList';
import CharDetails from '../charDetails';
import ErrorMessage from '../errorMessage/errorMessage';

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
    state = {
        showRandomChar: true,
        selectedChar: null,
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

    onCharSelected = (id) => {
        this.setState ({
            selectedChar: id
        })
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
                    <Row>
                        <Col md='6'>
                            <ItemList onCharSelected={this.onCharSelected} />
                        </Col>
                        <Col md='6'>
                            <CharDetails charId={this.state.selectedChar} />
                        </Col>
                    </Row>
                </Container>
            </>
        );
        
    };
}


