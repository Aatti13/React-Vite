import {Routes, Route} from 'react-router-dom'
import LoginPage from './Pages/LoginPage';
import Register from './Pages/Register';
import Subjects from './Pages/Subjects';
import About from './Pages/About';
import Programming from './Pages/Programming';
import Contact from './Pages/ContactPage';

function App() {
  return (
    <Routes>
      <Route path='/' element={<LoginPage />}/>
      <Route path='/home' element={<LoginPage />}/>
      <Route path='/subjects' element={<Subjects />}/>
      <Route path='/contact' element={<Contact />}/>
      <Route path='/about' element={<About />}/>
      <Route path='/programming' element={<Programming />}/>
      <Route path='/register' element={<Register />}/>
    </Routes>
  )
}

export default App;
