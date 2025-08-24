type User = {
	id: number;
	name: string;
	email: string;
};

async function getUsers(): Promise<User[]> {
	const res = await fetch("http://localhost:3001/users");
	const users = await res.json();
	return users;
}

export default async function UserPage() {
	const users = await getUsers();
	return (
		<>
			<p className="mb-3">
				This is the user page content and here are the list of users:
			</p>
			<ul>
				{users.map((user) => (
					<li key={user.id}>
						{user.name} - {user.email}
					</li>
				))}
			</ul>
		</>
	);
}
