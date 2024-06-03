import ErrorBoundary from "@/components/ErrorBoundary";
import { useState, FC, useEffect } from "react";

const TestComponent: FC<{ isToggled: boolean }> = ({ isToggled }) => {
  useEffect(() => {
    if (isToggled) {
      throw new Error("An intentional error occurred!");
    }
  }, [isToggled]);

  return <div>{isToggled ? "Toggled" : "Not Toggled"}</div>;
};

TestComponent.displayName = "TestComponent";

export default function Home() {
  const [isToggled, setIsToggled] = useState(false);

  const toggleState = () => {
    setIsToggled((prevState) => !prevState);
  };

  return (
    <>
      <div>
        <h1>Without Error Boundary</h1>
        <TestComponent isToggled={isToggled} />
      </div>
      {/* <div>
        <h1>With Error Boundary</h1>
        <ErrorBoundary>
          <TestComponent isToggled={isToggled} />
        </ErrorBoundary>
      </div> */}
      <button onClick={toggleState}>Toggle State</button>
    </>
  );
}
