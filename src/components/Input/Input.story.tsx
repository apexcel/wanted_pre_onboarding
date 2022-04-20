import { ComponentStory, ComponentMeta } from '@storybook/react';

import Example from './Example';
import Input from '.';

export default {
    title: 'Components/Input',
    component: Example,
} as ComponentMeta<typeof Example>;

export const Examples: ComponentStory<typeof Example> = (args) => <Example {...args} />;

export const Default: ComponentStory<typeof Input> = (args) => <Input type='text' />