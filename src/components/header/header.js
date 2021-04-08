import React from 'react';
import styled from 'styled-components';

const HeaderBlock = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 80px;
`;

const HeaderTitle = styled.h3`
    font-size: 30px;
    color: ;
    margin: 0;
    color: white;
    text-shadow:
        3px  3px 0 #000,
       -1px -1px 0 #000,  
        1px -1px 0 #000,
       -1px  1px 0 #000,
        1px  1px 0 #000;
`;

const HeaderLinks = styled.ul`
    display: flex;
    margin: 0;
    align-items: center;
    color: #fff;
    list-style-type: none;
    li {
        margin-right: 20px;
        font-size: 18px;
        &:hover {
            color: yellow;
        }     
    }
`;

const Header = () => {
    return (
        <HeaderBlock>
            <HeaderTitle>
                <a href="#">
                Breaking Bad DB
                </a>
            </HeaderTitle>
            <HeaderLinks>
                <li>
                    <a href="#">Characters</a>
                </li>
                <li>
                    <a href="#">Episodes</a>
                </li>
                <li>
                    <a href="#">Quotes</a>   
                </li>
            </HeaderLinks>
        </HeaderBlock>
    );
};

export default Header;