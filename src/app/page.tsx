import { Acomplishments } from "./components/acomplishments/acomplishments";
import { Contact } from "./components/contact/contact";
import { Experience } from "./components/experience/experience";
import { ExperienceLanguages } from "./components/experience_languages/experience_languages";
import { ExpertiseHighlights } from "./components/expertise_highlights/expertise_highlights";
import { Header } from "./components/header/header";
import { Info } from "./components/information/information";
import { Projects } from "./components/projects/projects";
import "./styles/home.scss";

export default function Home() {
  return (
    <main className="container">
      <Header />
      <ExpertiseHighlights />
      <Acomplishments />
      <Experience />
      <Projects />
      <Info />
      <ExperienceLanguages />
      <Contact />
    </main>
  );
}
