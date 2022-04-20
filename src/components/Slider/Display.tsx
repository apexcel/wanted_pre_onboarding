import React from 'react';
import styled from 'styled-components';

const StyledDisplayWrapper = styled.div`
    display: flex;
    justify-content: right;
    align-items: center;
    padding: 0 18px;
    max-width: 300px;
    height: 60px;
    border: 1px solid rgba(133, 133, 133, 0.7);
    border-radius: 10px;
    background-color: #fafafa;
`;

const StyledDataDisplay = styled.div`
    margin-right: 24px;
    font-size: 24px;
    font-weight: 600;
`;

const StyledUnitDisplay = styled.div`
    font-size: 16px;
    color: rgba(33, 33, 33, 0.7);
`;

interface DisplayProps {
    data: number;
    unit: '%'
}

const Display: React.FC<DisplayProps> = ({ data, unit }) => {
    return (
        <StyledDisplayWrapper>
            <StyledDataDisplay>{data}</StyledDataDisplay>
            <StyledUnitDisplay>{unit}</StyledUnitDisplay>
        </StyledDisplayWrapper>
    )
};

export default Display;