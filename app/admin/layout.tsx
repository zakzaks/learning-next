export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className="p-4 w-full h-full">
				<h3 className="text-2xl font-bold mb-4">Admin Layout</h3>
				{children}
			</body>
		</html>
	);
}
