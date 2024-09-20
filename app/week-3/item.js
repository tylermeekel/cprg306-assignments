export default function Item({ item }) {
    let { name, quantity, category } = item;

    return (
        <li className="bg-slate-800 text-slate-100 px-4 py-3">
            <p className="font-bold">
                {name}
            </p>
            <p>Buy {quantity} in <span className="font-semibold">{category}</span> section</p>
        </li>
    );
}
