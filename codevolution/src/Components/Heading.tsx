interface childrenProp {
  children: string;
}

const Heading = ({ children }: childrenProp) => {
  return <span> {children} </span>;
};

export default Heading;
