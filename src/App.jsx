import Home from "./components/Home";
import Resume from "./components/Resume";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import "./App.css";

export default function App() {
  return (
    <div className="container">
      <Home/>
      <Resume/>
      <Projects/>
      <Footer/>
    </div>
  );
}
