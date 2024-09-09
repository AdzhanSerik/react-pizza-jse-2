export default function CartPizzaList() {
    return (
        <div className="flex gap-4 items-center justify-around border-t border-slate-300 p-4">
            <img src="/pizzas/1.svg" alt="" className="w-24 h-24" />
            <div className="flex flex-col gap-1 items-center justify-center">
                <h1 className="text-xl font-bold">Маргарита</h1>
                <p className="text-slate-400">традиционное, 32 см.</p>
            </div>
            <div className="flex gap-4 items-center">
                <img src="/MinusCart.svg" alt="" />
                <span className="font-bold">2</span>
                <img src="/PlusCart.svg" alt="" />
            </div>
            <div>
                <h1 className="text-xl font-bold">520тг</h1>
            </div>
            <img src="/Cross.svg" alt="" />
        </div>
    )
}