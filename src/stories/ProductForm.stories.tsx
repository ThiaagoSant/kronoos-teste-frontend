import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import ProductForm from "../components/ProductForm";
import { Product } from "../models/Product";

export default {
  title: "Components/ProductForm",
  component: ProductForm,
  argTypes: {
    onSubmit: {
      action: "submitted",
      description: "Function to handle the submission of a new product.",
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          "ProductForm provides a form to add a new product to the inventory. It includes fields for name, category, price, and quantity.",
      },
    },
  },
} as Meta;

const Template: StoryFn<{ onSubmit: (product: Product) => void }> = (args) => (
  <ProductForm {...args} />
);

export const Default = Template.bind({});
Default.args = {};
