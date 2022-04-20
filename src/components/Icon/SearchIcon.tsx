import React from 'react';
import { ReactComponent as Search } from '../../styles/assets/search.svg'
import InputOrnament, { InputOrnamentProps } from '../Input/InputOrnament';

const SearchIcon: React.FC<InputOrnamentProps> = ({
    position,
    ...props
}) => {
    return (
        <InputOrnament position={position} {...props}>
            <Search />
        </InputOrnament>
    )
};

export default SearchIcon;