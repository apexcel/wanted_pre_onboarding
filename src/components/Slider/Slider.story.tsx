import { ComponentStory, ComponentMeta } from '@storybook/react';
import Slider from './Example';

export default {
    title: 'Components/Slider',
    component: Slider,
} as ComponentMeta<typeof Slider>;

export const Template: ComponentStory<typeof Slider> = (args) => <Slider {...args} />;