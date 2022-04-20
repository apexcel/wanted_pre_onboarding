import { ComponentStory, ComponentMeta } from '@storybook/react';
import Display from './Display';

export default {
    title: 'Components/Display',
    component: Display,
} as ComponentMeta<typeof Display>;

export const Template: ComponentStory<typeof Display> = (args) => <Display {...args} />;
Template.args = {
    data: 33,
    unit: '%'
}