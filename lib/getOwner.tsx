export async function getOwner() {
	const res = await fetch("http://localhost:3001/owner");
	const { name } = await res.json();
	return name;
}
