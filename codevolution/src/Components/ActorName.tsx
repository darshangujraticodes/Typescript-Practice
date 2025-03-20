interface personProp {
  name: {
    first: string;
    last: string;
  };
}

const ActorName = ({ name }: personProp) => {
  return (
    <div>
      {name.first} {name.last}
    </div>
  );
};

export default ActorName;
