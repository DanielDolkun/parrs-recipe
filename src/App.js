import NavBar from './components/navbar/navbar.component'
import Pages from './pages/pages.component'
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Pages />
    </BrowserRouter>
  )
}

export default App
