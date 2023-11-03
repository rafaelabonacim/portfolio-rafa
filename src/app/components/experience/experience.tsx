import Image from "next/image";
import { SectionTitle } from "../section-title/section-title";

import "./experience.scss";
export function Experience() {
	return (
		<div className="experience">
			<SectionTitle text="Experience" />
			<p>
				2 years working as a Software Developer, in companys such as Luizalabs.
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
