import { Approach } from "./components/Approach";
import { Capability } from "./components/Capability";
import { Contact } from "./components/Contact";
import { Experience } from "./components/Experience";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Work } from "./components/Work";

export function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Work />
        <Capability />
        <Experience />
        <Approach />
        <Contact />
      </main>
    </>
  );
}
