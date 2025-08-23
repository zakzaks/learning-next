export default async function ProductDetailPage({
	params,
}: {
	params: Promise<{ id: string }>;
}) {
	const { id } = await params;
	console.log(id);
	return (
		<>
			<p>Viewing details for product ID: {id}</p>
		</>
	);
}
