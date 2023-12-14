import Image from "next/image";
import { SectionTitle } from "../section-title/section-title";

import "./experience.scss";
export function Experience() {
	return (
		<div className="experience">
			<SectionTitle text="About Me" />
			<p>
				Passionate to developing amazing interfaces, with +5 years of experience
				in IT and +2 years as Front-End, who is constantly seeking for new
				challenges.
			</p>

			<p>
				I became a Front-End because I&apos;m passionate about developing
				interfaces to improve users experience.
			</p>
			<p>
				I consider myself a team player. In my work I do many pair programming
				with my colleagues.{" "}
			</p>
			<p>I have experience with JavaScript, Typescript and React.</p>
			<p> And for tests, I have experience with Cypress and Jest.</p>

			<div className="experience-time">
				<div className="experience-language">
					<Image
						src="/js.png"
						alt="Javascript Logo"
						width={40}
						height={40}
						priority
					/>
					<div className="experience-unit">
						<div className="experience-measure measure-2">
							<span>3 years</span>
						</div>
					</div>
				</div>
				<div className="experience-language">
					<Image
						src="/react.png"
						alt="React Logo"
						width={40}
						height={40}
						priority
					/>
					<div className="experience-unit">
						<div className="experience-measure measure-2">
							<span>3 years</span>
						</div>
					</div>
				</div>
				<div className="experience-language">
					<Image
						src="/ts.png"
						alt="Typescript Logo"
						width={40}
						height={40}
						priority
					/>
					<div className="experience-unit">
						<div className="experience-measure measure-2">
							<span>3 years</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
