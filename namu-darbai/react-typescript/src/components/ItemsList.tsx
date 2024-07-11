import React from "react";

interface ItemsProps {
  items: string[];
}
const ItemsList: React.FC<ItemsProps> = ({ items }) => {
  return (
    <div>
      {items.map((item) => (
        <div key={item}>{item}</div>
      ))}
    </div>
  );
};

export default ItemsList;
