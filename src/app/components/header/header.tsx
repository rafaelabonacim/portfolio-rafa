import Image from "next/image";

import "./header.scss";

export function Header() {
	return (
		<div className="header">
			<div>
				<h1>i´m Rafa Bonacim! 👋</h1>
				<h2>Software Engineer</h2>
			</div>
			<Image
				src="/me.png"
				alt="Vercel Logo"
				width={325}
				height={277}
				priority
			/>
		</div>
	);
}
