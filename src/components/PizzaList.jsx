export default function PizzaList() {
    return (
        <div className="flex flex-col gap-4 p-4 w-72 p-4">
            <img src="/pizzas/1.svg" />
            <h1 className="font-bold text-xl text-center">Чизбургер-пицца</h1>
            <div className="flex justify-between items-center flex-col gap-2 bg-gray-100 rounded-md">
                <div className="p-4">
                    <span className="m-2 font-bold bg-white p-2 rounded-xl">тонкое</span>
                    <span className="m-2 font-bold">традиционное</span>
                </div>
                <div className="p-4">
                    <span className="font-bold m-1 p-2 bg-white rounded-xl">26 см.</span>
                    <span className="font-bold m-1 p-2">30 см.</span>
                    <span className="font-bold m-1 p-2">40 см.</span>
                </div>
            </div>
            <div className="flex justify-between items-center">
                <h1 className="font-bold text-xl">от 395 ₽</h1>
                <button className="flex gap-3 p-4 rounded-full items-center border border-orange-600"><img src="/plus.svg" /> Добавить <span className="bg-orange-600 text-white rounded-full p-1 w-7 h-7 flex items-center justify-center">2</span></button>
            </div>
        </div>
    )
}
