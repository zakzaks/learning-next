"use server";
export async function create(prevState: any, formData: FormData) {
	const name = formData.get("name")?.toString();

	if (!name) {
		return { error: "Name is required" };
	}
}

export async function refresh(userId: number) {
	await new Promise((resolve) => setTimeout(resolve, 3000));

	console.log("refreshing...", userId);
}
