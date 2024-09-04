import './App.css'
import Header from './components/Header'
import Category from './components/Category'
import Sort from './components/Sort'
import PizzaList from './components/PizzaList'
import Skeleton from './components/Skeleton'
import { useEffect, useState } from 'react'
import axios from 'axios'

const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']



export default function App() {

  const [activeCategory, setActiveCategory] = useState(0)
  const [activeSort, setActiveSort] = useState('id')
  const [data, setData] = useState([])

  useEffect(() => {
    axios.get(`https://c12550f372786959.mokky.dev/items?category=${activeCategory === 0 ? '*' : activeCategory}&&sortBy=${activeSort}`)
      .then(res => {
        setData(res.data)
      })

  }, [activeCategory, activeSort])

  return (
    <>
      <div className=' bg-yellow-400 p-10'>
        <div className='bg-white p-10 rounded-xl'>
          <Header />

          <div className='flex items-center justify-between mt-10'>
            <Category categoryList={categories} activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
            <Sort activeSort={activeSort} setActiveSort={setActiveSort} />
          </div>
          <div className='grid grid-cols-4 gap-4 mt-10 justify-items-center'>


            {
              data.map((pizza) => (
                <>
                  <Skeleton /><PizzaList key={pizza.id} {...pizza} />
                </>

              ))
            }

          </div>
        </div>

      </div>

    </>
  )
}
