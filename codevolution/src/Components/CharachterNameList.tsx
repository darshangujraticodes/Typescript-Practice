interface nameListProps {
  nameList: {
    first: string;
    last: string;
  }[];
}

const CharachterNameList = ({ nameList }: nameListProps) => {
  return (
    <div className="mt-4">
      <h4>Story Charachter</h4>
      {nameList?.map((item, index) => (
        <span key={index}>
          {item.first} {item.last}
          <br />
        </span>
      ))}
    </div>
  );
};

export default CharachterNameList;
