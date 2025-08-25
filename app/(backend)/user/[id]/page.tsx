async function getUser(id: string) {
	const res = await fetch(`http://localhost:3001/users/?id=${id}`);
	// destructive from array of object (only get the object)
	const [user] = await res.json();
	return user;
}

export default async function DetailUser({
	params,
}: {
	params: Promise<{ id: string }>;
}) {
	console.log(params);
	const { id } = await params;
	const user = await getUser(id);
	return (
		<>
			<p>
				Your name: {user.name}, email {user.email} and hobby {user.hobby}
			</p>
		</>
	);
}
