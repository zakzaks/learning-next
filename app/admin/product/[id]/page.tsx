export default async function ProductDetailPage({
	params,
}: {
	params: Promise<{ id: string }>;
}) {
	const { id } = await params;
	console.log(id);
	return (
		<>
			<h1 className="text-3xl font-bold mb-4">Product Detail Page</h1>
			<p>Viewing details for product ID: {id}</p>
		</>
	);
}
