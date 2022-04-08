import Hello from "./Hello";

function App() {
  return (
    <>
      {[1, 2, 3].map((data) => (
        <Hello key={data} />
      ))}
    </>
  );
}

export default App;
