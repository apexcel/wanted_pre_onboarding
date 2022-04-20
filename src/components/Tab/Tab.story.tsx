import { ComponentStory, ComponentMeta } from '@storybook/react';
import Example from './Example';

export default {
    title: 'Components/Tab',
    component: Example,
} as ComponentMeta<typeof Example>;

export const Template: ComponentStory<typeof Example> = (args) => <Example {...args} />;