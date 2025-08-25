import { User } from "@/types/users";

export async function getUsers(): Promise<User[]> {
	const res = await fetch("http://localhost:3001/users");
	const users = await res.json();
	return users;
}
