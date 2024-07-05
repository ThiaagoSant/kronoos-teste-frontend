import React from "react";

export interface SidebarProps {
  setView: (view: 'list' | 'add') => void;
}

const Sidebar: React.FC<SidebarProps> = ({ setView }) => {
  return (
    <aside className="w-64 h-screen p-8 bg-white shadow-md">
      <h2 className="text-2xl font-semibold mb-8">Estoque</h2>
      <ul>
        <li
          className="mb-4 cursor-pointer text-lg text-gray-700 hover:text-gray-900 transition-colors duration-200"
          onClick={() => setView('list')}
        >
          Produtos
        </li>
        <li
          className="cursor-pointer text-lg text-gray-700 hover:text-gray-900 transition-colors duration-200"
          onClick={() => setView('add')}
        >
          Adicionar Produto
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
