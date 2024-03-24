import React from "react";
import { Input } from "./ui/input";

const Form = () => {
  return (
    <div className="flex flex-col gap-10 w-[100%] md:w-[50%]">
      <Input placeholder="Part number" />
      <Input placeholder="Man Power" />
      <Input placeholder="Output" />
    </div>
  );
};

export default Form;
