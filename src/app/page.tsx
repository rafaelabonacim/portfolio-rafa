import { Experience } from "./components/experience/experience";
import { Header } from "./components/header/header";
import { Info } from "./components/information/information";
import "./styles/home.scss";
import { Projects } from "./components/projects/projects";

export default function Home() {
	return (
		<main className="container">
			<Header />
			<Experience />
			<Info />
			<Projects />
		</main>
	);
}
