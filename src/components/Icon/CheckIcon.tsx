import React from 'react';
import { ReactComponent as Check } from '../../styles/assets/cheked.svg'
import InputOrnament, { InputOrnamentProps } from '../Input/InputOrnament';

const CheckIcon: React.FC<InputOrnamentProps> = ({
    position,
    ...props
}) => {
    return (
        <InputOrnament position={position} {...props}>
            <Check />
        </InputOrnament>
    )
};

export default CheckIcon;