import { ComponentStory, ComponentMeta } from '@storybook/react';
import Select from './Example';

export default {
    title: 'Components/Select',
    component: Select,
} as ComponentMeta<typeof Select>;

export const Example: ComponentStory<typeof Select> = (args) => <Select {...args} />;
Example.args = {
}
