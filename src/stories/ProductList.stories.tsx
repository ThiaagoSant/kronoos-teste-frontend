import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import ProductList from "../components/ProductList";
import { Product } from "../models/Product";

export default {
  title: "Components/ProductList",
  component: ProductList,
  argTypes: {
    products: {
      control: "object",
      description: "Array of products to be displayed in the list.",
      defaultValue: [
        {
          id: "1",
          name: "Produto 1",
          category: "Categoria 1",
          price: 10.0,
          quantity: 5,
        },
        {
          id: "2",
          name: "Produto 2",
          category: "Categoria 2",
          price: 20.0,
          quantity: 3,
        },
      ],
    },
    onDelete: {
      action: "deleted",
      description: "Function to delete a product by its ID.",
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          "ProductList displays a list of products with details and a delete button. Each product has a name, category, price, and quantity. Use the delete button to remove a product from the list.",
      },
    },
  },
} as Meta;

const Template: StoryFn<{
  products: Product[];
  onDelete: (id: string) => void;
}> = (args) => <ProductList {...args} />;

export const Default = Template.bind({});
Default.args = {
  products: [
    {
      id: "1",
      name: "Produto 1",
      category: "Categoria 1",
      price: 10.0,
      quantity: 5,
    },
    {
      id: "2",
      name: "Produto 2",
      category: "Categoria 2",
      price: 20.0,
      quantity: 3,
    },
  ],
};

export const EmptyList = Template.bind({});
EmptyList.args = {
  products: [],
};

export const WithManyProducts = Template.bind({});
WithManyProducts.args = {
  products: Array.from({ length: 20 }, (_, index) => ({
    id: String(index + 1),
    name: `Produto ${index + 1}`,
    category: `Categoria ${(index % 3) + 1}`,
    price: (index + 1) * 10,
    quantity: (index % 5) + 1,
  })),
};
