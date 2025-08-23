import Image from "next/image";
import { Increment } from "./increment";

export default function Home() {
	return (
		<>
			<Increment />
			<div className="relative w-40 h-40 mt-4">
				<Image
					className="rounded-full"
					src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1744&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
					alt="Description"
					fill
				/>
			</div>
		</>
	);
}
