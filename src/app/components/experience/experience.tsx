import Image from "next/image";
import { SectionTitle } from "../section-title/section-title";

import "./experience.scss";
export function Experience() {
	return (
		<div className="experience">
			<SectionTitle text="About Me" />
			<p>
				I&apos;m a passionate front-end developer with a unique journey. I began
				my career as a Product Owner, where I coordinated projects, worked
				closely with development teams, and learned the importance of delivering
				results. My journey led me to discover my true love: programming. Two
				years ago, I made the transition to the front-end development field and
				never looked back.
				My previous experience has taught me effective
				collaboration, agile methodologies, and data-driven decision-making.
				Now, I&apos;m working as a Frontend Web Developer, utilizing TypeScript,
				React, and Cypress to create engaging and functional interfaces.
				I&apos;m committed to continuous growth as a developer and thrive on
				tackling complex coding challenges.
			</p>

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
							<span>2 years</span>
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
							<span>2 years</span>
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
							<span>2 years</span>
						</div>
					</div>
				</div>
			</div>

		</div>
	);
}
