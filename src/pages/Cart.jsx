import CartPizzaList from "../components/CartPizzaList"



export default function Cart() {

    const getCart = localStorage.getItem('cart')
    const cart = JSON.parse(getCart)



    return (
        <div className="flex gap-4 flex-col p-10 mb-10">
            <div className="flex gap-4">
                <img src="/CartPage.svg" alt="" />
                <h1 className="text-2xl font-bold">Корзина</h1>
            </div>
            <div className="flex flex-col p-4 gap-8">
                {cart.map(cart => <CartPizzaList key={cart.id} {...cart} />)}
            </div>
            <div className="flex justify-between items-center p-4">
                <h1 className="text-2xl">Всего пицц: <span className="font-bold">3 шт.</span></h1>
                <h1 className="text-2xl">Сумма заказа: <span className="font-bold text-orange-600">900 тг</span></h1>
            </div>
            <div className="flex justify-between items-center p-4">
                <button className="rounded-full border border-slate-600 p-4 flex gap-4 items-center text-slate-600">
                    <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-slate-600">
                        <path d="M7 13L1 6.93015L6.86175 1" stroke="#D3D3D3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    Вернуться назад
                </button>
                <button className="bg-orange-600 text-white w-60 p-4 rounded-full">Оплатить сейчас</button>
            </div>
        </div>
    )
}
