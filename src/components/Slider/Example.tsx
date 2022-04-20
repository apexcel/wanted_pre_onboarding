import React, { useState } from 'react';
import Display from './Display';
import SliderBar from './SliderBar';

const Slider: React.FC = () => {
    const [value, setValue] = useState(33);

    return (
        <>
            <Display data={value} unit='%'/>
            <SliderBar value={value} setValue={setValue} />
        </>
    )
};

export default Slider;