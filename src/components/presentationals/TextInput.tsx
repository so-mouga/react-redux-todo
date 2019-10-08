import React, { useState } from "react";
import { identifier } from "@babel/types";

interface Props {
  placeHolder?: string;
  addTodo: (value: string) => void;
  // test? : testTypes
}

const TextInput: React.FC<Props> = ({ addTodo, placeHolder }) => {
  const [input, setInput] = useState("");

  const handleSubmit = (event: React.KeyboardEvent) => {
    if (event.which === 13 && input !== "") {
      addTodo(input);
      setInput("");
    }
  };

  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    setInput(event.currentTarget.value.trim());
  };

  return (
    <>
      <input
        autoFocus={true}
        placeholder={placeHolder}
        onKeyDown={handleSubmit}
        value={input}
        onChange={handleChange}
      />
    </>
  );
};

export default TextInput;
