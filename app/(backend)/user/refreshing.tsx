"use client";

import { useTransition } from "react";
import { refresh } from "./actions";

export default function Refreshing({ userId }: { userId: number }) {
	const [isPending, startTransition] = useTransition();

	async function handleRefresh(userId: number) {
		startTransition(async () => {
			await refresh(userId);
		});
	}

	return (
		<>
			<button
				className=" hover:underline cursor-pointer"
				onClick={() => handleRefresh(userId)}
				disabled={isPending}
			>
				{isPending ? "progress..." : "refresh"}
			</button>
		</>
	);
}
