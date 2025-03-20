interface nameListProps {
  nameList: {
    first: string;
    last: string;
  }[];
}

const CharachterNameList = ({ nameList }: nameListProps) => {
  return (
    <div className="mt-4">
      <h4>Film Charachter</h4>
      {nameList?.map((item) => (
        <span key={item.first}>
          {item.first} {item.last}
          <br />
        </span>
      ))}
    </div>
  );
};

export default CharachterNameList;
