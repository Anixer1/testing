import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
	return (
		<main className={styles.newbg}>
			<div className={styles.content}>
				<div className={styles.contentContainer}>
					<Link
						href={"/anime"}
						title="Click here to get redirected to the anime webpage"
					>
						<div className={styles.anime}>
							<h2>Anime</h2>
							<p></p>
						</div>
					</Link>
					<Link
						href={""}
						title="Click here to get redirected to the manga webpage"
					>
						<div className={styles.manga}>
							<h2></h2>
							<p>Welcome To RayFlix Watch Kdrama & Anime For Free Without Ads 😉</p>
						</div>
					</Link>
					<Link
						href={"/kdrama"}
						title="Click here to get redirected to the kdrama webpage"
					>
						<div className={styles.kdrama}>
							<h2>Kdrama</h2>
							<p></p>
						</div>
					</Link>
				</div>
			</div>
		</main>
	);
}

// Test push
