import React from "react";

const Label = ({ title, variant }) => {
  let labelContent = title;

  switch (variant) {
    case "asterisk":
      labelContent = (
        <>
          {title} <span className="text-primary">*</span>
        </>
      );
      break;
    case "optional":
      labelContent = (
        <>
          {title}{" "}
          <span className="font-normal capitalize text-pgray">(optional)</span>
        </>
      );
      break;
    default:
      break;
  }

  return (
    <label className="block text-sm font-medium leading-5 text-dgray">
      {labelContent}
    </label>
  );
};

export default Label;
