import { ComponentStory, ComponentMeta } from '@storybook/react';

import Toggler from './index';

export default {
    title: 'Components/Toggler',
    component: Toggler,
} as ComponentMeta<typeof Toggler>;

const Template: ComponentStory<typeof Toggler> = (args) => <Toggler {...args} />;

export const Small = Template.bind({});
Small.args = {
    text1: 'On',
    text2: 'Off',
    size: 'small'
}

export const Medium = Template.bind({});
Medium.args = {
    text1: 'On',
    text2: 'Off',
    size: 'medium'
}

export const Large = Template.bind({});
Large.args = {
    text1: 'On',
    text2: 'Off',
    size: 'large'
}
