import Link from "next/link";
import { getUsers } from "@/lib/getUsers";
import { create } from "./actions";

export default async function UserPage() {
	const users = await getUsers();
	return (
		<>
			<p className="mb-3">
				This is the user page content and here are the list of users:
			</p>
			<form className="flex flex-col gap-3 w-72" action={create}>
				<label htmlFor="">Nama</label>
				<input className="border border-white" type="text" name="name" />
				<label htmlFor="">Alamat</label>
				<input className="border border-white" type="text" name="address" />
				<button className="bg-blue-500 text-white p-2 hover:bg-blue-700 cursor-pointer">
					Submit
				</button>
			</form>
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
