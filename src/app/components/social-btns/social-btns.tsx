import { GitHubIcon } from "../icons/github-icon";
import { InstaIcon } from "../icons/insta-icon";
import { LinkedlinIcon } from "../icons/linkedin-icon";
import "./social-btns.scss";

export function SocialBtns() {
	return (
		<div className="social">
			<a href="https://www.instagram.com/rafaelabonacim/">
				<InstaIcon />
			</a>
			<a href="https://www.linkedin.com/in/rafaelamiellibonacim/">
				<LinkedlinIcon />
			</a>
			<a href="https://github.com/rafaelabonacim">
				<GitHubIcon />
			</a>
		</div>
	);
}
