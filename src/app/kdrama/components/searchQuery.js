"use server";

export default async function FetchSearchTitle(title) {
	const res = await fetch(
		`https://consumet-api-ro77.onrender.com/movies/dramacool/${title}`,
		{ cache: "force-cache" }
	);
	const data = await res.json();
	return data;
}
