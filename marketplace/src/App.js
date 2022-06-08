import './App.css';
import {Navbar} from './Components/Navbar'
import {Home} from './Components/Home'
import {SignUp} from './Components/SignUp'
import {SignIn} from './Components/SignIn'
import {Route, Routes} from 'react-router-dom'

function App() {
  return (
    <div className='App container'>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path='/SignIn' element={<SignIn />}></Route>
        <Route path='/SignUp' element={<SignUp />}></Route> 
      </Routes>
    </div>
  );
}

export default App;