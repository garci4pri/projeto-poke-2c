import {Routes, Route} from 'react-router-dom'
import Home from './Home'
import PokeGrid from './PokeGrid'
import PokeFlex from './PokeFlex'
import Menu from './Menu'


const App = () => {

  return (
    <Routes>
        <Route index element={<Menu/>} />
        <Route path ="home" element={<Home/>} />
        <Route path ="pokerflex" element={<PokeFlex/>} />
        <Route path ="pokergrig" element={<PokeGrid/>} />
    </Routes>
  )
}

export default App