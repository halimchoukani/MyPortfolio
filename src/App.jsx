import Header from "./components/Header";
import About from "./pages/About";
import Hero from "./pages/Hero";
import Projects from "./pages/Projects";

function App() {
  return (
    <div className="dark">
      <Header />
      <Hero />
      <About />
      <Projects />
    </div>
  );
}

export default App;
