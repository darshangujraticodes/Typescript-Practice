interface buttonProps {
  handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const ButtonClickEvent = ({ handleClick }: buttonProps) => {
  return <button onClick={(e) => handleClick(e)}> Click Now! </button>;
};

export default ButtonClickEvent;
