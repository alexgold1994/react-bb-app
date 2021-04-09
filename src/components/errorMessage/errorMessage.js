import React from 'react';
import img from './error.jpg';
import styled from 'styled-components';

const ImgError = styled.img`
    width: 100%;
`


const ErrorMessage = () => {
    return (
    <>
        <ImgError src={img} alt="error"/>
        <span> Something goes wrong !</span>
    </>
    )
}

export default ErrorMessage;