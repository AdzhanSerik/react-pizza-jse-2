import { useState } from "react"

export default function Sort() {
    const objects = ["популярности", "цене", "алфавиту"]
    const [transform, setTransform] = useState(0)
    const [activeSort, setActiveSort] = useState('популярности')
    function handleClickTransform(value) {
        if (!value) {
            setTransform(1)
        }
        else {
            setTransform(0)
        }
    }

    return (
        <div onClick={() => handleClickTransform(transform)} className="flex items-center gap-2 cursor-pointer relative">
            <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg" className={transform ? "transform rotate-180 transition" : "transform rotate-0 transition"}>
                <path d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z" fill="#2C2C2C" />
            </svg>
            <span className="font-bold">Сортировка по:</span>
            <span className="text-orange-600 border-dashed border-b border-orange-600">{activeSort}</span>
            {
                transform ?
                    <>
                        <ul className="absolute top-10 right-0 bg-white p-3 bg-white rounded-xl">
                            {
                                objects.map((object, index) => <li key={index} onClick={() => setActiveSort(object)} className={activeSort === object ? 'text-orange-600 font-bold' : 'font-bold'}>{object}</li>)
                            }
                        </ul>
                    </> : <></>
            }
        </div>
    )
}
