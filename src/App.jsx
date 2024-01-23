import './App.css'
import css from './compos/css/app.module.css'
import Navbar from './compos/Navbar'
import Cover from './compos/Cover'
import { Noticeboard } from './compos/Noticeboards/Noticeboard'
import Banner from './compos/Banner'
import News from './compos/News'
import Milestones from './compos/Milestones'
import Focus from './compos/Focus'
import Gallery from './compos/Gallery'
function App() {

  return (
    <>
		<Navbar />
		<Cover />
		<Noticeboard />
		<Banner />
		<News />
		<Milestones />
		<Focus />
		<Gallery />
    </>
  )
}

export default App
