"use client";

import { useTransition } from "react";
import { refresh } from "./actions";

export default function Refreshing() {
	const [isPending, startTransition] = useTransition();

	const handleRefresh = () => {
		startTransition(async () => {
			await refresh();
		});
	};

	return (
		<>
			<button onClick={handleRefresh} disabled={isPending}>
				{isPending ? "Refreshing..." : "Refresh"}
			</button>
		</>
	);
}
