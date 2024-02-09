import React, { useState } from "react";

const Dropdown = ({ selected, setSelected, options }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <div className="form-dropdown">
        <div
          className="form-dropdown-btn"
          onClick={(e) => setIsActive(!isActive)}
        >
          {selected}
          <span className="fas fa-caret-down"></span>
        </div>
        {isActive && (
          <div className="form-dropdown-content">
            {options.map((option) => {
              return (
                <div
                  className="form-dropdown-item"
                  onClick={(e) => {
                    setSelected(option);
                    setIsActive(false);
                  }}
                >
                  {option}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
};

export default Dropdown;
