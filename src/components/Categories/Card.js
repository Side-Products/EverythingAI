export default function Card({ category, onClick }) {
	return (
		<div onClick={() => onClick()} className="p-6 rounded-lg bg-light-100 cursor-pointer hover:shadow-lg transition duration-500">
			{category.name}
		</div>
	);
}
