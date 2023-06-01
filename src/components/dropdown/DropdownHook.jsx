import React from "react";
import { useState } from "react";
import { useWatch } from "react-hook-form";
import useClickOutSide from "../../hooks/useClickOutSide";

const DropdownHook = ({ control, setValue, name }) => {
  const { show, setShow, nodeRef } = useClickOutSide();
  const [label, setLabel] = useState("Select your job");

  // useWatch({
  //   control,
  //   name: "job",
  //   defaultValue: "",
  // });

  const handleClickDropdownItem = (e) => {
    setValue(name, e.target.dataset.value);
    setLabel(e.target.textContent);
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
          <div
            className="p-5 cursor-pointer hover:bg-gray-100"
            onClick={handleClickDropdownItem}
            data-value="teacher"
          >
            Teacher
          </div>
          <div
            className="p-5 cursor-pointer hover:bg-gray-100"
            onClick={handleClickDropdownItem}
            data-value="developer"
          >
            Developer
          </div>
          <div
            className="p-5 cursor-pointer hover:bg-gray-100"
            onClick={handleClickDropdownItem}
            data-value="doctor"
          >
            Doctor
          </div>
        </div>
      </div>
    </div>
  );
};

export default DropdownHook;
