import React from "react";
import Select from "react-select";
import "./CustomSelect.css";

const customStyles = {
  option: (provided) => ({
    ...provided,
    overflow: "hidden",
  }),
  control: (base, state) => ({
    ...base,
    border: state.isFocused ? 0 : 0,
    // This line disable the blue border
    boxShadow: state.isFocused ? 0 : 0,
    "&:hover": {
      border: state.isFocused ? 0 : 0,
      fontSize: 16,
    },
  }),
};

const CustomSelect = ({ label, options, onSelect, error }) => {
  return (
    <div
      className="border-[#A0A6C0] w-full flex flex-col border rounded-md bg-white pt-1 pb-1"
      style={{ borderColor: `${error === "red" ? "red" : "#A0A6C0"}` }}
    >
      <div className="text-[#435085] text-general pl-2 pb-1">
        {label} <span className="text-red-500">*</span>
      </div>
      <Select
        styles={customStyles}
        className="h-max mt-[-4px]"
        options={options}
        isMulti={false}
        onChange={onSelect}
        // required
      />
    </div>
  );
};

export default CustomSelect;
