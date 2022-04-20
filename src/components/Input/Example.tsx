import React, { useEffect, useState } from 'react';
import Input from '.';
import useInput from '../../hooks/useInput';
import { isValidEmail } from '../../utils';
import InputWrapper from './InputWrapper';
import Subtext from './Subtext';
import CheckIcon from '../Icon/CheckIcon';
import VisibleIcon from '../Icon/VisibleIcon';
import InvisibleIcon from '../Icon/InvisibleIcon';
import { theme } from '../../styles/GlobalStyles';

const Example: React.FC = () => {
    const [iconState, setIconState] = useState({
        email: false,
        password: false
    });

    const [state, onChange] = useInput({
        email: '',
        password: ''
    });

    useEffect(() => {
        const valid = isValidEmail(state.email);
        setIconState({ ...iconState, email: valid });
    }, [state])

    const toggleIcons = (name: keyof typeof iconState) => {
        if (name === 'password') setIconState({ ...iconState, [name]: !iconState[name] });
    }

    return (
        <>
            <InputWrapper>
                <Input
                    type='email'
                    name='email'
                    label='Email'
                    onChange={onChange}
                    ornament={{
                        position: 'end',
                        element: CheckIcon,
                        props: {
                            style: {
                                stroke: iconState.email ? theme.palette.primary : '#bebebe'
                            }
                        }
                    }}
                />
                {
                    state.email && !iconState.email
                        ? <Subtext color='warn'>Invalid e-mail address.</Subtext>
                        : null
                }
            </InputWrapper>
            <InputWrapper>
                <Input
                    type={iconState.password ? 'text' : 'password'}
                    name='password'
                    label='Password'
                    onChange={onChange}
                    ornament={{
                        position: 'end',
                        element: iconState.password ? VisibleIcon : InvisibleIcon,
                        props: {
                            onClick: () => toggleIcons('password')
                        }
                    }}
                />
            </InputWrapper>
        </>
    )
};

export default Example;