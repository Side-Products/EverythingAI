export default function Card({ category }) {
	return <div className="p-6 rounded-lg bg-light-100 cursor-pointer hover:shadow-lg transition duration-500">{category.name}</div>;
}
