import './App.css'
import Header from './components/Header'
import Main from './components/Main'
import Category from './components/Category'
import Sort from './components/Sort'

const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']


export default function App() {
  return (
    <>
      <div className=' bg-yellow-400 h-screen p-10'>
        <div className='bg-white p-10 rounded-xl'>
          <Header />
          <div className='flex items-center justify-between mt-10'>
            <Category categoryList={categories} />
            <Sort />
          </div>
          <Main />
        </div>

      </div>

    </>
  )
}
