import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Modal from '../components/Modal';
import ProductForm from '../components/ProductForm';

export default {
  title: 'Components/Modal',
  component: Modal,
} as Meta<typeof Modal>;

const Template: StoryFn<typeof Modal> = (args) => <Modal {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Adicionar Produto',
  trigger: <button>Open Modal</button>,
  children: <ProductForm onSubmit={() => {}} />,
};
