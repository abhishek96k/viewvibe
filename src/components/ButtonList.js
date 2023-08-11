import React from "react";
import Button from "./Button";

const list = [
  "All",
  "Live",
  "Gaming",
  "All",
  "Live",
  "Gaming",
  "Songs",
  "Cricket",
  "Cookings",
  "News",
  "Songs",
  "Cricket",
  "Cookings",
  "News",
];

const ButtonList = () => {
  return (
    <div className="flex">
      {list.map((name) => (
        <Button name={name} />
      ))}
    </div>
  );
};

export default ButtonList;
