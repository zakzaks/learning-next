"use client";

import { useState } from "react";
export function Increment() {
	const [number, setNumber] = useState(0);
	return (
		<>
			<h1 className="mt-auto ml-auto">{number}</h1>
			<button onClick={() => setNumber(number + 1)}>Increment</button>
		</>
	);
}
