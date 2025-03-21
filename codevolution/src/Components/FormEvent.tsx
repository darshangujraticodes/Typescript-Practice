import { useState } from "react";

const FormEvent = () => {
  const [info, setInfo] = useState("");
  const [inputText, setInputText] = useState("");

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setInfo(inputText);

    setInputText("");
  };
  return (
    <div>
      <form onSubmit={(e) => onSubmit(e)}>
        <input
          type="text"
          value={inputText}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setInputText(e.target.value)
          }
          placeholder="Enter Value"
        />
        <button type="submit">Submit</button>
      </form>

      <p>{info}</p>
    </div>
  );
};

export default FormEvent;
