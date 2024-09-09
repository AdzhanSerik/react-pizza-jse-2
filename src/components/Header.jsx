import { NavLink } from "react-router-dom";


/* eslint-disable react/prop-types */
export default function Header() {
    return (
        <header className="flex justify-between items-center">
            <NavLink to="/">
                <div className="flex gap-4">
                    <img src="/logo.svg" alt="" />
                    <div>
                        <h1 className="font-bold text-2xl">React Pizza</h1>
                        <p className="text-slate-400">самая вкусная пицца во вселенной</p>
                    </div>
                </div>
            </NavLink>

            <NavLink to="/cart">
                <div className="flex gap-4 items-center bg-orange-600 text-white p-4 rounded-full">
                    <span>520тг</span>
                    <hr className="w-0.5 h-6 bg-orange-400" />
                    <div className="flex gap-2 items-center cursor-pointer">
                        <img src="/cart.svg" alt="" />
                        <span>3</span>
                    </div>
                </div>
            </NavLink>
        </header>
    )
}