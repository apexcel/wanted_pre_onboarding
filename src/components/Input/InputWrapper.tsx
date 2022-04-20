import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
    position: relative;
    display: inline-flex;
    flex-direction: column;
    align-items: left;
    margin: 8px;
`;

const InputWrapper:React.FC = ({children}) => {
    return (
        <StyledWrapper>{children}</StyledWrapper>
    )
};

export default InputWrapper;