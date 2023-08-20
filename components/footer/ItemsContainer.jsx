"use client"


import Item from "./Item";
import { Se, Q, P, A } from "./Menus";
const ItemsContainer = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:px-8 px-5 py-16">
      <Item Links={Se} title="Strategic consulting" />
      <Item Links={Q} title="Quality management" />
      <Item Links={P} title="Process Management" />
      <Item Links={A} title="About Us" />
    </div>
  );
};

export default ItemsContainer;
