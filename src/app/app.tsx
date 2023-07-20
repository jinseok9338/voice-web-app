import MobileViewDetector from "./ErrorBoundary";

const App = (): JSX.Element => {
  return (
    <MobileViewDetector>
      <h1>Hello world</h1>
    </MobileViewDetector>
  );
};

export default App;
