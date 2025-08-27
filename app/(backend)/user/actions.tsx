"use server";
export async function create(prevState: any, formData: FormData) {
	const name = formData.get("name")?.toString();

	if (!name) {
		return { error: "Name is required" };
	}
}
