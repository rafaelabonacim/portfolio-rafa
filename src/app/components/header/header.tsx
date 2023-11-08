import Image from "next/image";

import "./header.scss";

export function Header() {
	return (
		<div className="header">
			<div>
				<h1>I&apos;m Rafa Bonacim! 👋</h1>
				<h2>Software Engineer</h2>
			</div>
			<Image
				src="/me.png"
				alt="me"
				width={325}
				height={310}
				priority
			/>
		</div>
	);
}
