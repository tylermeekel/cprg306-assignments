import ItemList from "./item-list";

export default function Page() {
    return (
        <main className=" bg-slate-200">
            <h1 className="text-2xl text-slate-800">Shopping List</h1>
            <ItemList />
        </main>
    );
}