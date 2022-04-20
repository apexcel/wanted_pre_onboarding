import React from 'react';
import styled from 'styled-components';

const StyledTabBody = styled.div<{ isActive: boolean }>`
    display: ${props => props.isActive ? 'block' : 'none'};
    padding: 18px;
`;

interface TabBodyProps {
    active: number;
    index: number;
}

const TabBody: React.FC<TabBodyProps> = ({
    active,
    index,
    children
}) => {
    return (
        <StyledTabBody isActive={active === index}>
            {children}
        </StyledTabBody>
    )
};

export default TabBody;