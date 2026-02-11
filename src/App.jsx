import Hero from "./components/home";
import Resume from "./components/resume";
import Projects from "./components/projects";
import Footer from "./components/footer";
import "./App.css";

export default function App() {
  return (
    <div className="container">
      <home />
      <resume />
      <projects />
      <footer />
    </div>
  );
}
