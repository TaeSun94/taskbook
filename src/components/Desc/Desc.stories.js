import React from 'react';
import Desc from './Desc';

export default {
    component: Desc,
    title: 'Desc'
}

const Template = args => <Desc {...args} />;

export const Default = Template.bind({});
Default.args = {
    desc: {
        play: false,
        icon: false,
        title: 'DIGITAL TWIN',
        description: "Hitchhiker is VRISM’s first wearable collection of 3D NFT sneakers on Ethereum and designed for space explorers. VRIUM is a material essential in making and reinforcing Hitchhiker sneakers. Hitchhiker is the beginning of one’s journey of limitless adventure between planets to mine VRIUM.",
        button: false,
        buttonTitle: ""
    }
};

export const Icon = Template.bind({});
Icon.args = {
    desc: {
        play: false,
        icon: true,
        title: 'DIGITAL TWIN',
        description: "Hitchhiker is VRISM’s first wearable collection of 3D NFT sneakers on Ethereum and designed for space explorers. VRIUM is a material essential in making and reinforcing Hitchhiker sneakers. Hitchhiker is the beginning of one’s journey of limitless adventure between planets to mine VRIUM.",
        button: false,
        buttonTitle: ""
    }
}

export const Play = Template.bind({});
Play.args = {
    desc: {
        play: true,
        icon: false,
        title: 'DIGITAL TWIN',
        description: "Hitchhiker is VRISM’s first wearable collection of 3D NFT sneakers on Ethereum and designed for space explorers. VRIUM is a material essential in making and reinforcing Hitchhiker sneakers. Hitchhiker is the beginning of one’s journey of limitless adventure between planets to mine VRIUM.",
        button: false,
        buttonTitle: ""
    }
};
export const Button = Template.bind({});
Button.args = {
    desc: {
        play: false,
        icon: false,
        title: 'DIGITAL TWIN',
        description: "Hitchhiker is VRISM’s first wearable collection of 3D NFT sneakers on Ethereum and designed for space explorers. VRIUM is a material essential in making and reinforcing Hitchhiker sneakers. Hitchhiker is the beginning of one’s journey of limitless adventure between planets to mine VRIUM.",
        button: true,
        buttonTitle: "INTERACTIVE VIEWER"
    }
};