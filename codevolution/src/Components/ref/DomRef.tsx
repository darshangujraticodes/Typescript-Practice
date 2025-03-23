import { useEffect, useRef } from "react";

const DomRef = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <div className="mt-4">
      <h4>useRef() Hook</h4>
      <input type="text" ref={inputRef} />
    </div>
  );
};

export default DomRef;
