import { SyntheticEvent, useState } from 'react';

const useInput = (initialState: Record<string, any>) => {
    const [state, setState] = useState(initialState);

    const onChange = (e: SyntheticEvent) => {
        const { name, value } = e.target as HTMLInputElement;
        if (name) {
            setState({ ...state, [name]: value });
        }
    }

    return [state, onChange] as const;
}

export default useInput;