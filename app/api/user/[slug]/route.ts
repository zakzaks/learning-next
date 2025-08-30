import { NextRequest } from "next/server";

export async function GET(
	request: NextRequest,
	{
		params,
	}: {
		params: Promise<{ slug: string }>;
	}
) {
	const { slug } = await params;
	const searchParams = request.nextUrl.searchParams;
	const query = searchParams.get("query");
	console.log("Query parameter:", slug);
	const data = {
		name: "John Doe",
		email: "john.doe@example.com",
		hobby: "Reading",
	};

	return Response.json(data);
}

export async function POST(request: Request) {
	const data = await request.formData();
	const user = {
		name: data.get("name"),
		email: data.get("email"),
		hobby: data.get("hobby"),
	};

	return Response.json(user);
}
