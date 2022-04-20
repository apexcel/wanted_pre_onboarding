import React, { HTMLAttributes } from 'react'
import styled from 'styled-components';
import { Styles } from '../../@types/Styles';
import useToggle from '../../hooks/useToggle';

const StyledTogglerWrapper = styled.div<Pick<TogglerProps, 'size'>>`
    ${props => props.theme.toggler.size[props.size!]}
    position: relative;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border: 1px solid rgba(133, 133, 133, 0.5);
    cursor: pointer;
    user-select: none;
    background-color: #333;
`;

const StyledTogglerText = styled.div<{ state: boolean }>`
    font-weight: 600;
    z-index: 9;
    color: ${props => props.state ? '#fff' : '#b9b9b9'};
    transition: color 0.5s ease;
`;

const StyledHighlighter = styled.div<Pick<TogglerProps, 'size'> & { state: boolean }>`
    ${props => props.theme.togglerHighlighter.size[props.size!]}
    position: absolute;
    background-color: ${props => props.theme.palette.primary};
    top: 0;
    bottom: 0;
    left: 0;
    ${props => !props.state ? props.theme.togglerHighlighter.move[props.size!] : ''}
    transition: all 0.5s ease;
`;

interface TogglerProps extends HTMLAttributes<HTMLDivElement> {
    text1: string;
    text2: string;
    size?: Styles.Size;
}

const Toggler: React.FC<TogglerProps> = ({
    text1,
    text2,
    size = 'medium',
}) => {
    const [state, toggle] = useToggle(true);

    return (
        <StyledTogglerWrapper size={size} onClick={toggle}>
            <StyledHighlighter size={size} state={state} />
            <StyledTogglerText state={state}>{text1}</StyledTogglerText>
            <StyledTogglerText state={!state}>{text2}</StyledTogglerText>
        </StyledTogglerWrapper>
    )
};

export default Toggler;