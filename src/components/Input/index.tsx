import React, { HTMLAttributes, HTMLInputTypeAttribute, useRef, useState } from 'react';
import styled from 'styled-components';
import { InputOrnamentProps } from './InputOrnament';

const StyledWrapper = styled.div<{ focus: boolean }>`
    display: inline-flex;
    position: relative;
    padding: 4px;
    border: 1px solid #bebebe;
    border-radius: 6px;
    transition: all 0.25s cubic-bezier(0.75, 0.29, 0.11, 1);
`;

const StyledLabel = styled.label<{ focus: boolean, isOrnamentExist: boolean }>`
    position: absolute;
    z-index: 9;
    pointer-events: none;
    user-select: none;
    top: 50%;
    left: 0;
    transform: ${props => props.focus ? 'translate(12px, -36px)' : `translate(${props.isOrnamentExist ? 30 : 16}px, -50%)`};
    background-color: ${props => props.focus ? '#fff' : 'transparent'};
    color: ${props => props.focus ? props.theme.palette.primary : '#bebebe'};
    transition: all 0.25s cubic-bezier(0.75, 0.29, 0.11, 1);
`;

const StyledInput = styled.input<{ isOrnamentExist: boolean }>`
    display: block;
    width: 100%;
    outline: none;
    margin: 12px 40px 12px ${props => props.isOrnamentExist ? 24 : 12}px;
    font-size: 16px;
    border: 0;
    z-index: 1;
`;

interface InputProps extends HTMLAttributes<HTMLInputElement> {
    type: Extract<HTMLInputTypeAttribute, 'email' | 'password' | 'text'>;
    name?: string;
    label?: string;
    ornament?: {
        position: 'start' | 'end';
        element: React.FC<InputOrnamentProps>;
        props?: React.HTMLProps<HTMLDivElement>;
    }
}

const Input: React.FC<InputProps> = ({
    label = '',
    ornament,
    ...props
}) => {
    const ref = useRef<HTMLInputElement>(null);

    const [focus, setFocus] = useState(false);

    const onFocus = () => setFocus(true);

    const onBlur = () => {
        if (!ref.current || !ref.current.value) setFocus(false);
    }

    return (
        <StyledWrapper focus={focus} style={props.style}>
            <StyledLabel
                focus={focus}
                isOrnamentExist={!!ornament?.element && ornament.position === 'start'}
            >
                {label}
            </StyledLabel>
            <StyledInput
                onChange={props.onChange}
                onFocus={onFocus}
                onBlur={onBlur}
                ref={ref}
                isOrnamentExist={!!ornament?.element && ornament.position === 'start'}
                {...props}
            />
            {
                ornament?.element
                    ? <ornament.element position={ornament.position} {...ornament.props}/>
                    : null
            }
        </StyledWrapper>
    )
};

export default Input;