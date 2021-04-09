import React from 'react';
import styled from 'styled-components';

const ImgError = styled.img`
    width: 100%;
`


const ErrorMessage = () => {
    return (
    <>
        <ImgError src={process.env.PUBLIC_URL + '/img/error.jpg'} alt="error"/>
        <span> Something goes wrong !</span>
    </>
    )
}

export default ErrorMessage;