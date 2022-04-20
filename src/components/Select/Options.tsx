import React from 'react';
import styled from 'styled-components';

const StyledOptions = styled.ul`
    border: 1px solid #bebebe;
    border-top: 0;
    border-bottom-left-radius: 6px;
    border-bottom-right-radius: 6px;
    list-style: none;
    margin: 0;
    padding: 0;
`;

const Options: React.FC = ({
    children
}) => {
    return (
        <StyledOptions>
            {children}
        </StyledOptions>
    )
};

export default Options;