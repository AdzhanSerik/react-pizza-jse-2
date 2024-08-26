/* eslint-disable react/prop-types */
import { useState } from 'react'
export default function Category({ categoryList }) {

    const [activeCategory, setActiveCategory] = useState(0)

    return (
        <ul className="flex items-center gap-6">
            {
                categoryList.map((category, index) => (
                    <li key={index} onClick={() => setActiveCategory(index)} className={index === activeCategory ? "bg-black text-white transition cursor-pointer py-3 px-6 rounded-full font-bold" : "bg-grey-100 text-black transition cursor-pointer hover:text-white hover:bg-black py-3 px-6 rounded-full font-bold"} >{category}</li>
                ))
            }
        </ul>
    )
}