import Category from '../components/Category'
import Sort from '../components/Sort'
import PizzaList from '../components/PizzaList'
import Skeleton from '../components/Skeleton'
import { useEffect, useState } from 'react'
import axios from 'axios'

const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']

export default function Home() {
    const [activeCategory, setActiveCategory] = useState(0)
    const [activeSort, setActiveSort] = useState('id')
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const skelet = Array(8).fill(0)


    useEffect(() => {
        axios.get(`https://c12550f372786959.mokky.dev/items?category=${activeCategory === 0 ? '*' : activeCategory}&&sortBy=${activeSort}`)
            .then(res => {
                setLoading(false)
                setData(res.data)
            })

    }, [activeCategory, activeSort])


    return (

        <>
            <div className='flex items-center justify-between mt-10'>
                <Category categoryList={categories} activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
                <Sort activeSort={activeSort} setActiveSort={setActiveSort} />
            </div>
            <div className='grid grid-cols-4 gap-4 mt-10 justify-items-center'>


                {
                    loading ? skelet.map((value, index) => (<Skeleton key={index} />)) :
                        data.map((pizza) => (
                            <>
                                <PizzaList key={pizza.id} {...pizza} />
                            </>

                        ))
                }

            </div>
        </>
    )
}