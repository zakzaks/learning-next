import Link from "next/link";
import { getUsers } from "@/lib/getUsers";
import UserForm from "./user-form";
import Refreshing from "./refreshing";

export default async function UserPage() {
	const users = await getUsers();
	return (
		<>
			<p className="mb-3">
				This is the user page content and here are the list of users:
			</p>
			<Refreshing />
			<UserForm />
			<ul>
				{users.map((user) => (
					<li key={user.id} className="flex gap-2">
						<span>{user.name}</span>
						<Link href={`/user/${user.id}`} className="text-blue-500 underline">
							detail
						</Link>
					</li>
				))}
			</ul>
		</>
	);
}
