import {Routes, Route} from 'react-router-dom'
import Home from './Home'
import PokeGrid from './PokeGrid'
import PokeFlex from './PokeFlex'
import Menu from './Menu'


const App = () => {

  return (
    <Routes>
       <Route path ="/" element={<Home/>} />
    </Routes>
  )
}

export default App