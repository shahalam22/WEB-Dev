import React from 'react';
import Select from './Select';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Select> = {
    title: 'UI/molecules/Select',
    component: Select,
};

export default meta;

type Story = StoryObj<typeof Select>;

export const Select1: Story = {
    args: {
        label: 'Select from the list',
        options: [
            {value: '1', label: 'Option 1'}, 
            {value: '2', label: 'Option 2'}, 
            {value: '3', label: 'Option 3'}
        ]
    }
}
