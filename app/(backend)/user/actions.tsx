"use server";
export async function create(formData: FormData) {
	console.log(formData.get("name"));
}
