import React, { HTMLAttributes } from 'react';
import styled from 'styled-components';

const StyledOption = styled.li`
    padding: 6px 24px;
    cursor: pointer;

    &:hover {
        background-color: rgba(133, 133, 133, 0.4);
    }
`;

interface OptionProps extends HTMLAttributes<HTMLLIElement> {
    value: string | number;
}

const Option:React.FC<OptionProps> = ({
    value,
    children,
    ...props
}) => {
    return (
        <StyledOption role='listitem' data-value={value} {...props}>{children}</StyledOption>
    )
};

export default Option;