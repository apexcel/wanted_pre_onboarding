import React, { SyntheticEvent, useEffect, useRef, useState } from 'react';
import Select from '.';
import Option from './Option';
import Options from './Options';

const initialState = [
    { value: '', content: 'All Symbols' },
    { value: 'alpha', content: 'ALPHA' },
    { value: 'beta', content: 'BETA', },
    { value: 'gamma', content: 'GAMMA' },
    { value: 'delta', content: 'DELTA' },
];

const Example: React.FC = () => {
    const ref = useRef<HTMLDivElement>(null);

    const [options, setOptions] = useState(initialState);

    const [open, setOpen] = useState(false);

    useEffect(() => {
        const outsideClick = (e: MouseEvent) => {
            e.stopPropagation();
            if (ref.current && !ref.current.contains(e.target as HTMLElement)) {
                setOpen(false);
            }
        }
        document.addEventListener('mousedown', outsideClick);

        return () => document.removeEventListener('mousedown', outsideClick);
    }, [ref])

    const onSearch = (e: SyntheticEvent) => {
        const target = e.target as HTMLInputElement;
        const filtered = initialState.filter(option => option.content.toLowerCase().includes(target.value));
        if (!filtered.length) return;
        setOptions(filtered)
    }

    return (
        <Select ref={ref} onSearch={onSearch} setOpen={setOpen} open={open}>
            <Options>
                {
                    options.map(({ value, content }, i) =>
                        <Option
                            key={value + i}
                            value={value}
                            onClick={() => setOpen(false)}
                        >
                            {content}
                        </Option>
                    )
                }
            </Options>
        </Select>
    )
};

export default Example;
