import "./App.scss";
import Lenis from "@studio-freight/lenis";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Page from "./components/Page";
import Backdrop from "./components/Backdrop";

function App() {
  const lenis = new Lenis();

  function raf(time: number) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  return (
    <div className="app">
      <Header />
      <Backdrop />
      <Page />
      <Footer />
    </div>
  );
}

export default App;
