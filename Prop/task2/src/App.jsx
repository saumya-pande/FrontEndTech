import React, { useState } from 'react'

const App = () => {

    const pricePerItem = 100

    const [quantity, setQuantity] = useState(1)

    const increase = () => {
        setQuantity(quantity + 1)
    }

    const decrease = () => {
        if (quantity > 0) {
            setQuantity(quantity - 1)
        }
    }

    const totalPrice = quantity * pricePerItem

    return (
        <div>
            <h2>Price per item: ₹{pricePerItem}</h2>

            <button onClick={decrease}>-</button>
            <span> {quantity} </span>
            <button onClick={increase}>+</button>

            <h2>Total Price: ₹{totalPrice}</h2>
        </div>
    )
}

export default App
