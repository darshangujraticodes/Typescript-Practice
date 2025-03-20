import GreetMessg from "./Components/GreetMessg";
import ActorName from "./Components/ActorName";
import ActorList from "./Components/ActorList";
import CharachterNameList from "./Components/CharachterNameList";
import Status from "./Components/Status";
import Heading from "./Components/Heading";
import ReactNodeComp from "./Components/ReactNodeComp";

function App() {
  const actor1 = {
    first: "Harry",
    last: "Potter",
  };

  const actor2 = {
    first: "Ron",
    last: "Weasley",
  };

  const castingActorList: string[] = [
    "Daniel Radcliffe",
    "Emma Watson",
    "Rupert Grint",
    "Richard Harris",
  ];

  const storyCharachterNameList = [
    {
      first: "Harry",
      last: "Potter",
    },
    {
      first: "Ron",
      last: "Weasly",
    },
    {
      first: "Harmione",
      last: "Granger",
    },
    {
      first: "Albus",
      last: "Dumbledore",
    },
    {
      first: "Lucias",
      last: "Malfoy",
    },
  ];

  return (
    <>
      <section className="mt-5 container">
        <h1 className="text-center mb-2">React + TypeScript</h1>

        <div className="mt-3">
          <ActorName name={actor1} />
          <ActorName name={actor2} />
          <ActorList castingActorsName={castingActorList} />
          <CharachterNameList nameList={storyCharachterNameList} />
          <Status status="loading" />
          <br />
          Passing String value in Children Prop :
          <Heading> Heading Tag Children Data </Heading>
          <br />
          <br />
          Passing ReactNode value in Children Prop :
          <ReactNodeComp>
            <Heading> Subhead Tag Children Data</Heading>
          </ReactNodeComp>
        </div>
      </section>
    </>
  );
}

export default App;
