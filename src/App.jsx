import Hero from "./sections/Hero";
import Navbar from "./sections/Navbar";
import Companies from "./components/Companies";

function App() {
  return (
    <div className="App bg-gray-100 min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <Companies />
    </div>
  );
}

export default App;
