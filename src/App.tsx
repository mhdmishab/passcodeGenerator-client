
 
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import "./App.css"
import Router from './routes/Router'
import Background from './Components/Background'


function App() {
  
  
  
  
  return (
    <>
    <div className='home'>
   <Background/>
      <BrowserRouter>
      <Routes>
        <Route  path='/*' element={<Router/>}></Route>
      </Routes>
      </BrowserRouter>
      
    </div>
    </>
  )
}

export default App
