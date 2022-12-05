import React from "react";
import { Story } from "@storybook/react";
import { UpTag, Props } from "./UpTag";

export default {
    component: UpTag,
    title: 'Components/Display/UpTag',
    argTypes: { onChange: { action: 'selected' } },
};

const args = {
    id: '1',
    text: 'Tag 1'
};

const Template: Story<Props> = (args) => <UpTag {...args} />;

export const Default = Template.bind({});
Default.args = args;
