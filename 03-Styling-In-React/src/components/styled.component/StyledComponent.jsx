import React from 'react'
import { styles } from '../object-style/style'
import styled from 'styled-components';
import { StyledButton } from './Button/Button';

const StyledComponent = () => {
    const Title = styled.h1`
        font-size: 1.5em;
        text-align: center;
        color: palevioletred;
    `;
  return (
    <>
        <div className="container">
            <div className="row">
                <div className="col">
                    <div style={styles.Container}>
                        <h2 style={styles.Header}>6) STYLED COMPONENT</h2>
                    </div>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="row">
                <div className="col">
                    <Title>Hello Styled Component</Title>
                    <StyledButton>Styled Button</StyledButton>
                    <StyledButton changeColor = "tryIT">Styled Button</StyledButton>
                    
                </div>
            </div>
        </div>
    </>
  )
}

export default StyledComponent