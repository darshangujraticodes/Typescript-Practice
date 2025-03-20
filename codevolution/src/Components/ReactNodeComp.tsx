interface childrenProp {
  children: React.ReactNode;
}
const ReactNodeComp = ({ children }: childrenProp) => {
  return <span>{children}</span>;
};

export default ReactNodeComp;
