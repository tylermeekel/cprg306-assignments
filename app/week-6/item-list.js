"use client";
import { useState } from "react";
import items from "./items.json";
import Item from "./item";

export default function ItemList() {
    const [sortBy, setSortBy] = useState("name");
    console.log(items);

    function handleSortChange(e) {
        e.preventDefault();
        setSortBy(e.target.value);
    }

    return (
        <div>
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
            <ul className="w-1/3">
                {sortBy == "name"
                    ? items
                          .sort((a, b) => a.name.localeCompare(b.name))
                          .map((item) => <Item key={item.id} item={item} />)
                    : items
                          .sort((a, b) => a.category.localeCompare(b.category))
                          .map((item) => <Item key={item.id} item={item} />)}
            </ul>
        </div>
    );
}
