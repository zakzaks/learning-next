import { Suspense } from "react";
import Nav from "./navbar";
import { getOwner } from "@/lib/getOwner";

export default function Header() {
	const name = getOwner();
	return (
		<header>
			<Suspense fallback={<div>Loading...</div>}>
				<Nav getOwnerPromise={name} />
			</Suspense>
		</header>
	);
}
