import React from 'react';
import { ReactComponent as Visible } from '../../styles/assets/visible.svg'
import InputOrnament, { InputOrnamentProps } from '../Input/InputOrnament';

const VisibleIcon: React.FC<InputOrnamentProps> = ({
    position,
    ...props
}) => {
    return (
        <InputOrnament position={position} {...props}>
            <Visible />
        </InputOrnament>
    )
};

export default VisibleIcon;