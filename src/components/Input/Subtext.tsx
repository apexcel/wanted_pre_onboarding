import React, { HTMLAttributes } from 'react';
import styled from 'styled-components';
import { Styles } from '../../@types/Styles';

const StyledSubtext = styled.div<SubtextProps>`
    font-size: 12px;
    margin: 2px 4px 2px 14px;
    color: ${props => props.theme.palette[props.color!]}
`;

interface SubtextProps extends HTMLAttributes<HTMLDivElement> {
    color?: Styles.Colors;
}

const Subtext: React.FC<SubtextProps> = ({ 
    color = 'primary',
    children,
    ...props
}) => {
    return (
        <StyledSubtext color={color} {...props}>{children}</StyledSubtext>
    )
};

export default Subtext;