"use server";

export default async function FetchSearchTitle(title) {
	const res = await fetch(
		`https://rayflix-api.vercel.app/movies/dramacool/${title}`,
		{ cache: "force-cache" }
	);
	const data = await res.json();
	return data;
}
