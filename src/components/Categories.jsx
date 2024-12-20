import React from "react";

function Categories({ activeCategory, items, onClickItem }) {
  const onSelectItem = (index) => {
    onClickItem(index);
  };

  return (
    <div className="categories">
      <ul>
        <li
          onClick={() => onSelectItem(null)}
          className={activeCategory === null ? "active" : ""}
        >
          Все
        </li>
        {items.map((item, index) => (
          <li
            className={activeCategory === index ? "active" : ""}
            onClick={() => onSelectItem(index)}
            key={`${item}_${index}`}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
