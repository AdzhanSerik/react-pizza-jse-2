import './App.css'
import Header from './components/Header'
import Category from './components/Category'
import Sort from './components/Sort'
import PizzaList from './components/PizzaList'
import pizzas from './pizzas.json'
import { useEffect, useState } from 'react'

const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']



export default function App() {

  const [activeCategory, setActiveCategory] = useState(0)

  useEffect(() => {
    console.log('Ты нажал на какую то категорию')
  }, [activeCategory])

  return (
    <>
      <div className=' bg-yellow-400 p-10'>
        <div className='bg-white p-10 rounded-xl'>
          <Header />
          <div className='flex items-center justify-between mt-10'>
            <Category categoryList={categories} activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
            <Sort />
          </div>
          <div className='grid grid-cols-4 gap-4 mt-10 justify-items-center'>
            {
              pizzas.map((pizza) => (
                <PizzaList key={pizza.id} {...pizza} />
              ))
            }

          </div>
        </div>

      </div>

    </>
  )
}
