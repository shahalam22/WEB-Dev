import React from 'react';
import Button from './Button';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Button> = {
    title: 'UI/atoms/Button',
    component: Button,
    args: {
        children: 'Button',
    }
};

export default meta;


// const template: StoryObj<typeof Button> = (args) => <Button {...args}>{args.children}</Button>


// export const Primary = () => <Button title='Primary Button'>Primary Button</Button>

type Story = StoryObj<typeof Button>;

// export const Primary: Story = {
//     render: () => <Button title='Primary Button'>Primary Button</Button>
// }

export const Primary: Story = {
    args: {
        title: 'Primary Button',
    }
}
