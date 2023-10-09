import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { Home } from './components/home'
import { About } from './components/about'
import { Menu } from './components/menu'
import { Post } from './components/post'
import Globalstyles from './styles/Globalstyles'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <>
    <Globalstyles />
    <BrowserRouter>
      <Menu/> {/*Incluindo nav*/}
      <Routes>
        <Route path='/' element={ <Home /> }/>
        <Route path='/about' element={ <About /> }/>
        <Route path='/posts/:id' element={ <Post /> }/>
        <Route path='/posts' element={ <Post /> }/>
      </Routes>
    </ BrowserRouter>
  </>,
)
