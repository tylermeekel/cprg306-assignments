"use client";

import { useState } from "react";

export default function NewItem() {
    const [quantity, setQuantity] = useState(1);
    const [name, setName] = useState("");
    const [category, setCategory] = useState("produce");

    function handleSubmit(event) {
        event.preventDefault();

        let item = {
            name: name,
            quantity: quantity,
            category: category,
        };

        console.log(item);
        alert(
            "The new item has the name " +
                name +
                ", the quantity " +
                quantity +
                ", and is in the category " +
                category +
                "."
        );
        setQuantity(1);
        setName("");
        setCategory("produce");
    }

    function onNameChange(event) {
        setName(event.target.value);
    }

    function onCategoryChange(event) {
        setCategory(event.target.value);
    }

    const increment = (event) => {
        event.preventDefault();

        if (quantity + 1 <= 20) {
            setQuantity(quantity + 1);
        }
    };

    const decrement = (event) => {
        event.preventDefault();
        if (quantity - 1 >= 1) {
            setQuantity(quantity - 1);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex gap-5 flex-col justify-center bg-slate-700 m-auto p-5 text-slate-800">
            <div className=" w-full">
                <input value={name} type="text" placeholder="Item Name" onChange={onNameChange} className="w-full p-2 rounded-sm"/>
            </div>
            <div className="flex gap-5 items-center">
                <div>
                    <select onChange={onCategoryChange} className="p-2 rounded-sm">
                        <option value="produce">Produce</option>
                        <option value="dairy">Dairy</option>
                        <option value="bakery">Bakery</option>
                        <option value="meat">Meat</option>
                        <option value="frozenFoods">Frozen Foods</option>
                        <option value="cannedGoods">Canned Goods</option>
                        <option value="dryGoods">Dry Goods</option>
                        <option value="beverages">Beverages</option>
                        <option value="snacks">Snacks</option>
                        <option value="household">Household</option>
                        <option value="other">Other</option>
                    </select>
                </div>
                <div className="flex text-center items-center">
                    <button
                        onClick={increment}
                        disabled={quantity == 20}
                        className="h-10 w-10 bg-sky-400 rounded-sm"
                    >
                        +
                    </button>
                    <span className="w-10 align-middle text-slate-100">{quantity}</span>
                    <button
                        onClick={decrement}
                        disabled={quantity == 1}
                        className="h-10 w-10 bg-sky-400 rounded-sm"
                    >
                        -
                    </button>
                </div>
            </div>
            <button type="submit" className=" bg-sky-400 rounded-sm py-2">Submit</button>
        </form>
    );
}
