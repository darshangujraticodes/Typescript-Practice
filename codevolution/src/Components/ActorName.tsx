import { PersonProp } from "./Types/PersonProps";

const ActorName = ({ name }: PersonProp) => {
  return (
    <div>
      {name.first} {name.last}
    </div>
  );
};

export default ActorName;
