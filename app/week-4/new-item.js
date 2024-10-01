"use client"

import { useState } from "react"

export default function NewItem() {
    const [quantity, setQuantity] = useState(1);

    const increment = () => {
        if (quantity + 1 <= 20) {
            setQuantity(quantity + 1);
        }
    }

    const decrement = () => {
        if (quantity - 1 >= 1) {
            setQuantity(quantity - 1)
        }
    }

    return (
        <div className="flex text-center items-center">
            <button onClick={increment} disabled={quantity == 20} className="h-10 w-10 bg-sky-400 rounded-sm">+</button>
            <span className="w-10 align-middle">{quantity}</span>
            <button onClick={decrement} disabled={quantity == 1} className="h-10 w-10 bg-sky-400 rounded-sm">-</button>
        </div>
    )
}