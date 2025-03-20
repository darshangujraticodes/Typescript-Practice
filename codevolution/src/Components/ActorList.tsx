interface actorListProp {
  castingActorsName: string[];
}

const ActorList = ({ castingActorsName }: actorListProp) => {
  return (
    <div className="mt-3">
      {castingActorsName?.map((item, index) => (
        <span className="" key={index}>
          {` ${item}, `}
        </span>
      ))}
    </div>
  );
};

export default ActorList;
