import Header from "../components/header/header";
import Hero from "../components/hero/hero";
import About from "../components/section-about/about";

function App() {
  return (
    <div className="min-w-[320px] dark:text-white dark:bg-blue-950 px-3 lg:px-6 ">
      <Header />
      <Hero />
      <About />
    </div>
  );
}

export default App;
