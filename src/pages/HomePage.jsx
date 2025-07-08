import { useEffect, useState } from 'react'
import Header from '../components/Header'
import CardPizza from '../components/CardPizza'

const HomePage = () => {
  const [pizzas, setPizzas] = useState([])
  const [error, setError] = useState(null)

  useEffect(() => {
    consultarApi()
  }, [])

  const consultarApi = async () => {
    try{
      const url = "http://localhost:5000/api/pizzas"
      const response = await fetch(url)
      const data = await response.json()
      setPizzas(data)
    }
    catch(e){
      setError("¡Error al cargar las pizzas!")
    }
  }

  if(error){
    return(
      <div className="d-flex justify-content-center align-items-center content">
        <div className="text-center">
          <h3 className="fw-bold">{error}</h3>
        </div>
      </div>
    )
  }

  if(!pizzas){
    return(
      <div className="d-flex justify-content-center align-items-center content">
        <div className="text-center">
          <h3 className="fw-bold">Cargando pizzas...</h3>
        </div>
      </div>
    )
  }

  return (
    <main>
      <Header/>
      <div className="container my-4 mb-5 mt-5">
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {pizzas.map(pizza => (<CardPizza key={pizza.id} pizza={pizza}/>))}
        </div>
      </div>
    </main>
  )
}

export default HomePage