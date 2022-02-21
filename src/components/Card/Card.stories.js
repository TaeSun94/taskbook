import React from 'react';
import Card from './Card';

export default {
    component: Card,
    title: 'Card',
};

const Template = args => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
    card: {
        id: '1',
        date: '03/02/22',
        title: "john Geiger Hires Kanye\n West's Former YEEZY\nLawyer to Lead...",
        description: "Kenneth Anand is the Counsel to Jayaram Law, was the former General Counsel of YEEZY Apparel, and is the co-creator of ‘Sneaker Law.’ Kenneth Anand is the Counsel to Jayaram Law, was the former General Counsel of YEEZY Apparel, and is the co-creator of ‘Sneaker Law.’",
        state: ''
    }
};
