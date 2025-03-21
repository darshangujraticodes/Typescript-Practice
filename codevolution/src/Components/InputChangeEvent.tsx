interface InputProps {
  value?: string;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputChangeEvent = ({ value, handleInputChange }: InputProps) => {
  return (
    <input
      type="text"
      value={value}
      onChange={handleInputChange}
      placeholder="Enter Value"
    />
  );
};

export default InputChangeEvent;
