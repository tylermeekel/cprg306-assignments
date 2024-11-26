"use client";

import { useState } from "react";
import Item from "./item";

export default function ItemList({ items, onItemSelect }) {
    const [sortBy, setSortBy] = useState("name");

    let itemsCopy = [...items];

    function handleSortChange(e) {
        e.preventDefault();
        setSortBy(e.target.value);
    }

    return (
        <div className="w-full">
            <button
                value={"name"}
                onClick={handleSortChange}
                className="bg-sky-400 text-slate-800 p-2 hover:bg-sky-500 mr-2"
            >
                Sort by Name
            </button>
            <button
                value={"category"}
                onClick={handleSortChange}
                className="bg-sky-400 text-slate-800 p-2 hover:bg-sky-500"
            >
                Sort by Category
            </button>
            <ul>
                {sortBy == "name"
                    ? itemsCopy
                          .sort((a, b) => a.name.localeCompare(b.name))
                          .map((item) => <Item key={item.id} item={item} onSelect={onItemSelect} />)
                    : itemsCopy
                          .sort((a, b) => a.category.localeCompare(b.category))
                          .map((item) => <Item key={item.id} item={item} />)}
            </ul>
        </div>
    );
}
