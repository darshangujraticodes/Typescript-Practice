import { personProp } from "./Types/PersonProps";

const ActorName = ({ name }: personProp) => {
  return (
    <div>
      {name.first} {name.last}
    </div>
  );
};

export default ActorName;
