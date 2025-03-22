import GreetMessg from "./Components/GreetMessg";
import ActorName from "./Components/ActorName";
import ActorList from "./Components/ActorList";
import CharachterNameList from "./Components/CharachterNameList";
import Status from "./Components/Status";
import Heading from "./Components/Heading";
import ReactNodeComp from "./Components/ReactNodeComp";
import ButtonClickEvent from "./Components/ButtonClickEvent";
import InputChangeEvent from "./Components/InputChangeEvent";
import FormEvent from "./Components/FormEvent";
import StyleProp from "./Components/StyleProp";
import LoggedIn from "./Components/state/LoggedIn";
import AuthUser from "./Components/state/AuthUserData";
import AuthUserData from "./Components/state/AuthUserData";
import ReducerHook from "./Components/ReducerHook";
import useTheme from "./context/ThemeContext";

function App() {
  const { darkMode, setDarkMode } = useTheme();

  console.log(darkMode);

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
      <section className="my-5 container">
        <h1 className="text-center mb-2">React + TypeScript</h1>

        <div className="mt-3">
          {/* String prop */}
          <ActorName name={actor1} />
          <GreetMessg name="Darsh" isLoggedIn={true} messgCount={10} />
          <GreetMessg name="Sahil" isLoggedIn={true} />
          <GreetMessg name="Vijay" isLoggedIn={false} />
          {/*  string array */}
          <ActorList castingActorsName={castingActorList} />
          {/* Object array  */}
          <CharachterNameList nameList={storyCharachterNameList} />
          {/* Union (|) Or Operator */}
          <Status status="loading" />
          <br />
          {/* children prop */}
          Passing String value in Children Prop :
          <Heading> Heading Tag Children Data </Heading>
          <br />
          <br />
          Passing ReactNode value in Children Prop :
          <ReactNodeComp>
            <Heading> Subhead Tag Children Data</Heading>
          </ReactNodeComp>
        </div>

        <div className="mt-4">
          <h4>Events in Javascript</h4>
          <ButtonClickEvent
            handleClick={(e) => {
              console.log("Button Clicked!", e);
            }}
          />
          <br /> <br />
          <InputChangeEvent
            handleInputChange={(e) => {
              console.log("input Tag value : ", e.target.value);
            }}
          />
          <br /> <br />
          <FormEvent />
          <br />
          <h4>Style Props</h4>
          <StyleProp
            styles={{
              padding: "10px 20px",
              borderRadius: "10px",
              backgroundColor: "#262626",
              color: "#f5f5f5",
            }}
          />
        </div>

        <h4 className="mt-3">Typescript in React Hooks</h4>

        {/* <LoggedIn userName="Sahil" /> */}

        <AuthUserData />

        <ReducerHook />

        <h4 className="mt-3">Context Api</h4>

        <p>Current Mode : {darkMode ? "Dark Mode" : "Light Mode"}</p>
        <button onClick={() => setDarkMode(!darkMode)}>
          Switch Theme Mode
        </button>
      </section>
    </>
  );
}

export default App;
