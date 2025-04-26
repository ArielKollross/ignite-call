import { Hero } from "./components/Hero";
import { Preview } from "./components/Preview";

import styles from "./styles.module.css";

export default function Home() {
	return (
		<div className={`${styles.container} gap-20`}>
			<Hero />
			<Preview />
		</div>
	);
}
