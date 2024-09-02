import './App.css'
import Header from './components/Header'
import Category from './components/Category'
import Sort from './components/Sort'
import PizzaList from './components/PizzaList'
import { useEffect, useState } from 'react'
import axios from 'axios'

const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']



export default function App() {

  const [activeCategory, setActiveCategory] = useState(0)
  const [data, setData] = useState([])

  useEffect(() => {
    axios.get(`https://c12550f372786959.mokky.dev/items?category=${activeCategory === 0 ? '*' : activeCategory}`)
      .then(res => {
        setData(res.data)
      })

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
              data.map((pizza) => (
                <PizzaList key={pizza.id} {...pizza} />
              ))
            }

          </div>
        </div>

      </div>

    </>
  )
}
