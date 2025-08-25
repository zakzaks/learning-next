"use client";

import Link from "next/link";
import { Owner } from "@/types/owner";
import { use } from "react";

export default function NavBar({
	getOwnerPromise,
}: {
	getOwnerPromise: Promise<Owner>;
}) {
	const owner = use(getOwnerPromise);
	return (
		<>
			<nav>
				<Link className="mr-4 cursor-pointer" href="/">
					Home
				</Link>
				<Link className="mr-4 cursor-pointer" href="/admin">
					Admin
				</Link>
				<Link className="mr-4 cursor-pointer" href="/admin/product">
					Product
				</Link>
				<Link className="mr-4 cursor-pointer" href="/user">
					User
				</Link>
			</nav>
			<h1>{owner.name}</h1>
		</>
	);
}
