import CardNum from "../components/card-number/card-num";
import Crud from "../components/crud/crud";
import Header from "../components/header/header";
import Hero from "../components/hero/hero";
import About from "../components/section-about/about";
import SectionCard from "../components/section-card/section-card";

function App() {
  return (
    <div className="min-w-[320px] dark:text-white dark:bg-blue-950 px-3 lg:px-6 ">
      <Header />
      <Hero />
      <About />
      <SectionCard />
      <CardNum />
      <Crud />
    </div>
  );
}

export default App;
