import React from "react";
import TestComponent from "@/components/test";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Home",
};

function page() {
	return (
		<>
			<TestComponent />
		</>
	);
}

export default page;
