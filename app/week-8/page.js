"use client";

import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json";
import MealIdeas from "./meal-ideas"
import { useState } from "react";

export default function Page() {
    const [items, setItems] = useState(itemsData);
    const [selectedItemName, setSelectedItemName] = useState("");

    function handleAddItem(item) {
        setItems([item, ...items]);
    }

    function handleItemSelect(item) {
        let cleanItemName = item.name.trim().split(",")[0]
            .replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g, '');

        setSelectedItemName(cleanItemName);
    }

    return (
        <main className="bg-slate-900 flex">
            <div className="  py-4 px-32 flex flex-col gap-8">
                <h1 className="text-2xl text-slate-100 font-extrabold text-center">
                    Shopping List
                </h1>
                    <NewItem onAddItem={handleAddItem} />
                    <ItemList items={items} onItemSelect={handleItemSelect} />
            </div>
            <div>
                <MealIdeas ingredient={selectedItemName}/>
            </div>
        </main>
    );
}
