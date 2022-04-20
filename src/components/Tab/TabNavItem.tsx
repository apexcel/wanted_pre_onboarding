import React from 'react';
import styled from 'styled-components';

const StyledTabNavItem = styled.div`
    text-align: center;
    min-width: 120px;
    padding: 14px 8px;

    :hover {
        cursor: pointer;
        background: rgba(200, 200, 200, 0.5);
    }
`;

export interface TabNavItemProps {
    label: string;
}

const TabNavItem: React.FC<TabNavItemProps> = ({ label }) => {
    return (
        <StyledTabNavItem>
            {label}
        </StyledTabNavItem>
    )
};

export default TabNavItem;