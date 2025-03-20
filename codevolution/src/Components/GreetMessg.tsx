interface greetProps {
  name: string;
  messgCount: number;
  isLoggedIn: boolean;
}

const GreetMessg = ({ name, messgCount, isLoggedIn }: greetProps) => {
  return (
    <div>
      {isLoggedIn ? (
        <p>
          Welcome {name}, you have {messgCount} unread messages.
        </p>
      ) : (
        <p>Welcome Guest</p>
      )}
    </div>
  );
};

export default GreetMessg;
