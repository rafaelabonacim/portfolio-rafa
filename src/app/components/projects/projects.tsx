import { EmailIcon } from "../icons/email-icon";
import { SectionTitle } from "../section-title/section-title";
import { SocialBtns } from "../social-btns/social-btns";
import "./projects.scss";

export function Projects() {
	return (
		<div className="projects">
			<SectionTitle text="Experiences" />
			<div className="projects-1">
				<p>Frontend Web Developer at Luizalabs (September 2021 - Today)</p>
				<p>
					- Developed all the interfaces for an identity management and access
					control platform using React and TypeScript. These interfaces include
					screens for displaying user information such as consent, basic user
					data, and address. The platform is now utilized by more than 800
					clients, with one company indirectly saving +100k reais within a
					single month of adopting this plataform.
				</p>
				<p>
					- Integrated the frontend with the backend by creating JavaScript
					services to connect with the backend API.
				</p>
				<p>
					- Implemented application testing using Jest for unit tests and
					Cypress for end-to-end tests.
				</p>
			</div>
			<div className="buttons">
				<SocialBtns />
				<a className="btn-primary" href="mailto:rafaelabonacim@gmail.com">
					contact me
					<EmailIcon />
				</a>
			</div>
		</div>
	);
}
