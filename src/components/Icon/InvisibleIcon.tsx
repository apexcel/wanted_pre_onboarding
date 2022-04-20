import React from 'react';
import { ReactComponent as Invisible } from '../../styles/assets/invisible.svg'
import InputOrnament, { InputOrnamentProps } from '../Input/InputOrnament';

const InvisibleIcon: React.FC<InputOrnamentProps> = ({
    position,
    ...props
}) => {
    return (
        <InputOrnament position={position} {...props}>
            <Invisible />
        </InputOrnament>
    )
};

export default InvisibleIcon;