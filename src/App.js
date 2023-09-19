import "./App.css";
import NavBar from "./Components/NavBar";
import ContactBar from "./Components/ContactBar";
import Footer from "./Components/Footer";
import Home from "./Sections/Home";
import About from "./Sections/About";
import Experience from "./Sections/Experience";

export default function App() {
  return (
    <>
      <main className="main">
        <NavBar />
        <div className="app_section_container">
          <Home />
          <About />
          <Experience />
        </div>
        <ContactBar />
        <Footer />
      </main>
    </>
  );
}
