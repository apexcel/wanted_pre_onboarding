import { useState } from 'react';
import { storiesOf } from '@storybook/react';

import SliderBar from './SliderBar';

export const Template = storiesOf('Components/SliderBar', module).add('Template', () => {
    const [value, setValue] = useState(33);

    return <SliderBar value={value} setValue={setValue}/>
})