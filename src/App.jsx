import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Footer from './components/Footer'
import Pizza from './components/Pizza'
//import Cart from './components/Cart'
//import Register from './components/Register'
//import Login from './components/Login'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      {/*<Home/>*/}
      {/*<Register/>*/}
      {/*<Login/>*/}
      {/*<Cart/>*/}
      <Pizza/>
      <Footer/>
    </>
  )
}

export default App
