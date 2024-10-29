"use client";

import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json";
import { useState } from "react";

export default function Page() {
    const [items, setItems] = useState(itemsData);

    function handleAddItem(item) {
        setItems([item, ...items]);
    }

    return (
        <main className=" bg-slate-900 py-4 px-32 flex flex-col gap-8">
            <h1 className="text-2xl text-slate-100 font-extrabold text-center">
                Shopping List
            </h1>
                <NewItem onAddItem={handleAddItem} />
                <ItemList items={items} />
        </main>
    );
}
