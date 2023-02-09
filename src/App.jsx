import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Components/Home/Home';
import Checkoutpage from './Components/Checkoutpage/Checkoutpage';
function App() {

  return (
   <BrowserRouter>
     <div className="App">
      <Routes>
        <Route exact path='/' element = {<Home />}></Route>
        <Route exact path='/checkoutpage' element = {<Checkoutpage />}></Route>
      </Routes>
     </div>
   </BrowserRouter>
  )
}

export default App
