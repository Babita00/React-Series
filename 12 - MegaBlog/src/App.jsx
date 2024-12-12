import "./App.css";

function App() {
  const env = import.meta.env.VITE_APPWRITE_URL;
  console.log(env);
  const Fname = "Babita";

  return (
    <>
      <h1>Hi, {Fname}</h1>
    </>
  );
}

export default App;
