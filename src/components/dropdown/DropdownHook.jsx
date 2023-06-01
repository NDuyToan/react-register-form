import React from "react";
import { useState } from "react";
import { useWatch } from "react-hook-form";
import useClickOutSide from "../../hooks/useClickOutSide";

const DropdownHook = ({
  control,
  setValue,
  name,
  data,
  dropdownLabel = "Select your job",
}) => {
  const { show, setShow, nodeRef } = useClickOutSide();
  const [label, setLabel] = useState(dropdownLabel);

  useWatch({
    control,
    name: "job",
    defaultValue: "",
  });

  const handleClickDropdownItem = (item) => {
    setValue(name, item.value);
    setLabel(item.text);
    setShow(false);
  };
  return (
    <div className="relative" ref={nodeRef}>
      <div
        className="p-5 rounded-lg border border-gray-100 bg-white flex justify-between items-center cursor-pointer"
        onClick={() => setShow(!show)}
      >
        <span>{label} </span>
        <div
          className={`absolute top-full left-0 w-full rounded-lg bg-white ${
            show ? "" : "opacity-0 invisible"
          }`}
        >
          {data?.map((item) => (
            <div
              key={item.id}
              className="p-5 cursor-pointer hover:bg-gray-100"
              onClick={() => handleClickDropdownItem(item)}
            >
              {item.text}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DropdownHook;
