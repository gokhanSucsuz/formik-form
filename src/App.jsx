import { Route, Routes } from 'react-router-dom'
import './App.css'
import GeneralForm from './GeneralForm'
import PortalForm from './PortalForm'

function App() {

  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<GeneralForm />} />
        <Route path='/portal' element={<PortalForm />} />
      </Routes>
    </div>
  )
}

export default App
