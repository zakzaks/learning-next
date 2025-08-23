export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<>
			<h3 className="text-2xl font-bold mb-4"> Backend layout</h3>
			{children}
		</>
	);
}
