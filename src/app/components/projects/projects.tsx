import { SectionTitle } from "../section-title/section-title";
import "./projects.scss";

export function Projects() {
	return (
		<div className="projects">
			<SectionTitle text="Experiences" />
			<div className="projects-1">
				<span>Frontend Web Developer at Luizalabs (September 2021 - Today)</span>
				<span>
					<span>
						- Developed all the interfaces for an identity management and access
						control platform using React and TypeScript. These interfaces
						include screens for displaying user information such as consent,
						basic user data, and address. The platform is now utilized by more
						than 800 clients, with one company indirectly saving +100k reais
						within a single month of adopting this plataform.
					</span>
					<span>
						- Integrated the frontend with the backend by creating JavaScript
						services to connect with the backend API.
					</span>
					<span>
						- Implemented application testing using Jest for unit tests and
						Cypress for end-to-end tests.
					</span>
				</span>
			</div>
		</div>
	);
}
