import './App.css'
import Header from './components/Header'
import Home from './pages/Home'
import { BrowserRouter } from 'react-router-dom'
import AppRouter from './routes/Routes'

export default function App() {

  return (
    <>
      <div className=' bg-yellow-400 p-10'>
        <div className='bg-white p-10 rounded-xl'>
          <BrowserRouter>
            <Header />
            <AppRouter />
          </BrowserRouter>
        </div>

      </div>

    </>
  )
}
