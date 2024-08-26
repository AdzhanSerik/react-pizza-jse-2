import './App.css'
import Header from './components/Header'
import Main from './components/Main'
import Category from './components/Category'
import Sort from './components/Sort'
import PizzaList from './components/PizzaList'

const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']


export default function App() {
  return (
    <>
      <div className=' bg-yellow-400 p-10'>
        <div className='bg-white p-10 rounded-xl'>
          <Header />
          <div className='flex items-center justify-between mt-10'>
            <Category categoryList={categories} />
            <Sort />
          </div>
          <div className='grid grid-cols-4 gap-5 mt-10'>
            <PizzaList />
            <PizzaList />
            <PizzaList />
            <PizzaList />
            <PizzaList />
            <PizzaList />
            <PizzaList />
            <PizzaList />
            <PizzaList />
          </div>
          <Main />
        </div>

      </div>

    </>
  )
}
