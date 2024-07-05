import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import SearchBar from "../components/SearchBar";

export default {
  title: "Components/SearchBar",
  component: SearchBar,
  argTypes: {
    onSearch: {
      action: "searched",
      description: "Function to handle search input.",
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          "SearchBar provides an input field for searching products by name or category.",
      },
    },
  },
} as Meta;

const Template: StoryFn<{ onSearch: (query: string) => void }> = (args) => (
  <SearchBar {...args} />
);

export const Default = Template.bind({});
Default.args = {};
