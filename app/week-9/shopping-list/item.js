export default function Item({ item, onSelect }) {
    let { name, quantity, category } = item;

    function handleClick() {
        onSelect(item);
    }

    return (
        <li className="bg-slate-800 text-slate-100 px-4 py-3 mt-2 hover:bg-orange-800 cursor-pointer" onClick={handleClick}>
            <p className="font-bold">{name}</p>
            <p>
                Buy {quantity} in{" "}
                <span className="font-semibold">{category}</span> section
            </p>
        </li>
    );
}
