import Image from "next/image";
import Header from './components/Header';
import Hero from "./components/Hero";
import ProgramOverview from "./components/Overview";
import Footer from "./components/Footer";
import GitCurriculum from "./components/Curriculum";
import Call from "./components/Call";
export default function Home() {
  return (
    <>
      <Header/>
      <main className="flex-1 pt-20 md:pt-24">
        <Hero/>
        <ProgramOverview/>
        <GitCurriculum/>
        <Call/>
        <Footer/>
      </main>
    </>
  );
}
