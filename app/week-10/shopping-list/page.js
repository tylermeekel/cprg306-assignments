"use client";

import ItemList from "./item-list";
import NewItem from "./new-item";
import MealIdeas from "./meal-ideas";
import { useEffect, useState } from "react";

import { useUserAuth } from "../_utils/auth-context";
import Link from "next/link";
import { getItems, addItem } from "../_services/shopping-list-service";

export default function Page() {
    const [items, setItems] = useState([]);
    const [selectedItemName, setSelectedItemName] = useState("");

    const { user } = useUserAuth();

    async function handleAddItem(item) {
        let docId = await addItem(user.uid, item);
        item.id = docId;
        setItems([...items, item]);
    }

    function handleItemSelect(item) {
        let cleanItemName = item.name
            .trim()
            .split(",")[0]
            .replace(
                /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g,
                ""
            );

        setSelectedItemName(cleanItemName);
    }
    
    async function loadItems() {
        if (user !== null) {
            let items = await getItems(user.uid);
            console.log(items);
            setItems(items);
        }

        console.log(items);
    }

    useEffect(
        () => {
            loadItems()
        }, [user]
    )

    return (
        <main className="bg-slate-900 flex min-h-screen">
            {user ? (
                <div className="flex">
                    <div className="py-4 px-32 flex flex-col gap-8">
                        <h1 className="text-2xl text-slate-100 font-extrabold text-center">
                            Shopping List
                        </h1>
                        <NewItem onAddItem={handleAddItem} />
                        <ItemList
                            items={items}
                            onItemSelect={handleItemSelect}
                        />
                    </div>
                    <div>
                        <MealIdeas ingredient={selectedItemName} />
                    </div>
                </div>
            ) : (
                <div className="flex items-center h-screen w-screen justify-center">
                    <div className="bg-slate-800 p-4">
                        <p>You are not signed in!</p>
                        <Link href="../">Click here to go back!</Link>
                    </div>
                </div>
            )}
        </main>
    );
}
