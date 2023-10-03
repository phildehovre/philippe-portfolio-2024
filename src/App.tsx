import "./App.scss";
import Lenis from "@studio-freight/lenis";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Page from "./components/Page";
import ActiveSectionContextProvider from "./context/activeElementContext";

function App() {
  const lenis = new Lenis();

  function raf(time: number) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  return (
    <>
      <ActiveSectionContextProvider>
        <Header />
        <Page />
        <Footer />
      </ActiveSectionContextProvider>
    </>
  );
}

export default App;
