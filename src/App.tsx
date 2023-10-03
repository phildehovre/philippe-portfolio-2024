import "./App.scss";
import Lenis from "@studio-freight/lenis";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Page from "./components/Page";

function App() {
  const lenis = new Lenis();

  function raf(time: number) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  return (
    <>
      <Header />
      <Page />
      <Footer />
    </>
  );
}

export default App;
