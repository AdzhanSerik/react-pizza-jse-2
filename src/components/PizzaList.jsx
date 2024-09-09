/* eslint-disable react/prop-types */
import { useState } from 'react'
const cartPizzas = []
export default function PizzaList({ id, name, imageUrl, price, sizes, types }) {

    const typePizza = ['Тонкое', 'Традиционное']
    const [activeType, setActiveType] = useState(0)
    const [activeSize, setActiveSize] = useState(0)


    function addToCart() {
        const obj = {
            id,
            name,
            imageUrl,
            price,
            size: sizes[activeSize],
            type: typePizza[activeType]
        }

        cartPizzas.push(obj)
        console.log(cartPizzas)
        localStorage.setItem('cart', JSON.stringify(cartPizzas))


    }

    return (
        <div className="flex flex-col gap-4 p-4 w-72">
            <img src={imageUrl} />
            <h1 className="font-bold text-xl text-center">{name}</h1>
            <div className="flex justify-between items-center flex-col gap-2 bg-white rounded-md">
                <div className="p-4">
                    {types.map((type, index) => (
                        <span key={index} className={index === activeType ? "m-2 font-bold bg-gray-200 p-2 rounded-xl cursor-pointer" : "m-2 font-bold p-2 rounded-xl cursor-pointer"} onClick={() => setActiveType(index)}>{typePizza[type]}</span>

                    ))}
                </div>
                <div className="p-4">
                    {sizes.map((size, index) => (
                        <span key={index} className={index === activeSize ? "font-bold m-1 p-2 bg-gray-200 rounded-xl cursor-pointer" : "font-bold m-1 p-2 bg-white rounded-xl cursor-pointer"} onClick={() => setActiveSize(index)}>{size} см.</span>
                    ))}
                </div>
            </div>
            <div className="flex justify-between items-center">
                <h1 className="font-bold text-xl">{price} тг.</h1>
                <button onClick={addToCart} className="flex gap-3 p-4 rounded-full items-center border border-orange-600"><img src="/plus.svg" /> Добавить <span className="bg-orange-600 text-white rounded-full p-1 w-7 h-7 flex items-center justify-center">1</span></button>
            </div>
        </div>
    )
}
