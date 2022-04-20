import { Children, forwardRef, HTMLAttributes, SyntheticEvent, useState } from 'react';
import styled from 'styled-components';
import Input from '../Input';
import SearchIcon from '../Icon/SearchIcon'

const StyledSelectWrapper = styled.div`
    display: inline-block;
    min-width: 240px;
    margin: 4px;
    position: relative;
`;

const StyledSelected = styled.div`
    border: 1px solid #bebebe;
    border-radius: 6px;
    padding: 4px;
    font-size: 16px;
    padding: 16px 8px;
    cursor: pointer;
`;

const StyledOptionsWrapper = styled.div<{ open: boolean }>`
    display: ${props => props.open ? 'block' : 'none'};
    position: absolute;
    margin-top: 8px;
`;

interface SelectProps extends HTMLAttributes<HTMLDivElement> {
    onSearch: (e: SyntheticEvent) => void;
    setOpen: (state: boolean) => void;
    open: boolean;
}

const Select = forwardRef<HTMLDivElement, SelectProps>(({
    onSearch,
    setOpen,
    open,
    children,
}, ref) => {

    const onlyChildren = Children.only(children) as JSX.Element;
    const defaultSelected = onlyChildren.props.children[0].props;

    const [selected, setSeleted] = useState({
        value: defaultSelected.value,
        content: defaultSelected.children
    })

    const onSelect = (e: SyntheticEvent) => {
        e.stopPropagation();
        const { target } = e;
        if (target instanceof HTMLLIElement && target.getAttribute('role') === 'listitem') {
            if (target.dataset && target.dataset.value) {
                setSeleted({ value: target.dataset.value, content: target.innerText })
            }
        }
    }

    return (
        <StyledSelectWrapper ref={ref} onClick={() => setOpen(true)}>
            <StyledSelected>
                {selected.content}
            </StyledSelected>
            <StyledOptionsWrapper open={open} onClick={onSelect}>
                <Input
                    type='text'
                    placeholder='Search Symbols'
                    onChange={onSearch}
                    ornament={{
                        position: 'start',
                        element: SearchIcon
                    }}
                    style={{
                        borderBottomLeftRadius: 0,
                        borderBottomRightRadius: 0
                    }}
                />
                {children}
            </StyledOptionsWrapper>
        </StyledSelectWrapper>
    )
});

export default Select;