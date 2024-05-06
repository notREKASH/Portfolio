import React from "react";
import "./filter-button.scss";

interface FilterButtonProps {
  name: string;
  bgColor: string;
  fontColor: string;
}

function FilterButton({ name, bgColor, fontColor }: FilterButtonProps) {
  return (
    <>
      <button
        className="filter-button"
        style={{ backgroundColor: bgColor, color: fontColor }}
      >
        {name}
      </button>
    </>
  );
}

export default FilterButton;
