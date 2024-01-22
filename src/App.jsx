import './App.css'
import css from './compos/css/app.module.css'
import Navbar from './compos/Navbar'
import Cover from './compos/Cover'
import { Noticeboard } from './compos/Noticeboards/Noticeboard'
import Banner from './compos/Banner'



function App() {

  return (
    <>
		<Navbar />
		<Cover />
		<Noticeboard />
		<Banner />

    </>
  )
}

export default App
