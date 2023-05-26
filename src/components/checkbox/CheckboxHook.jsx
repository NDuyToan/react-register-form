import React from "react";
import { useController } from "react-hook-form";

const CheckboxHook = ({ control, text, ...props }) => {
  const { field } = useController({
    name: props.name,
    control,
  });
  return (
    <label className="w-5 h-5 cursor-pointer custom-checkbox">
      <input
        type="checkbox"
        value={props.value}
        {...field}
        {...props}
        className="hidden"
        id={props.name}
      />
      <div className="flex items-center gap-x-3">
        <div className="w-full h-full rounded-md flex justify-center items-center transition-all custom-checkbox-square">
          <svg
            width="15px"
            height="15px"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title />

            <g id="Complete">
              <g id="tick">
                <polyline
                  fill="none"
                  points="3.7 14.3 9.6 19 20.3 5"
                  stroke="#fff"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />
              </g>
            </g>
          </svg>
        </div>
        <label htmlFor={props.name} className="text-sm cursor-pointer">
          {text}
        </label>
      </div>
    </label>
  );
};

export default CheckboxHook;
