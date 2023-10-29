import { SectionTitle } from "../section-title/section-title";

import "./experience.scss"
export function Experience() {
	return (
		<div className="experience">
			<SectionTitle text="Experience" />
			<p>
				2 years working as a Software Developer, in companys such as Luizalabs.
			</p>
			<div className="experience-time"></div>
		</div>
	);
}
