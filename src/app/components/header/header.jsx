import Link from "next/link";
import styles from "../../page.module.css";

export default function Header() {
	return (
		<main className={styles.main}>
			<div className={styles.header}>
				<div className={styles.left}>
					<Link
						href={"/"}
						style={{ textDecoration: "none", color: "white" }}
					>
						<p>RAYFLIX</p>
					</Link>
				</div>
				<div className={styles.right}>
					<Link href="/">Home</Link>
					<Link href="/kdrama">Kdrama</Link>
					<Link href="/anime">Anime</Link>
				</div>
			</div>
		</main>
	);
}
