import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
	const searchParams = request.nextUrl.searchParams;
	const query = searchParams.get("query");
	console.log(query);
	const data = {
		name: "John Doe",
		email: "john.doe@example.com",
		hobby: "Reading",
	};

	return Response.json(data);
}

export async function POST(request: Request) {
	const data = await request.json();
	const user = {
		name: data.name,
		email: data.email,
		hobby: data.hobby,
	};

	return Response.json(user);
}
