import { useEffect, useState } from 'react'
import { formatMiles } from '../utils/formatMiles'

const Pizza = () => {
  const [pizza, setPizza] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    consultarApi();
  }, []);

  const consultarApi = async () => {
    try{
      const url = "http://localhost:5000/api/pizzas/p001";
      const response = await fetch(url);
      const data = await response.json();
      setPizza(data);
    }
    catch(e){
      setError("¡Error al cargar la pizza!");
    }
  };

  if(error){
    return(
      <div className="d-flex justify-content-center align-items-center content">
        <div className="text-center">
          <h3 className="fw-bold">{error}</h3>
        </div>
      </div>
    );
  };

  if(!pizza){
    return(
      <div className="d-flex justify-content-center align-items-center content">
        <div className="text-center">
          <h3 className="fw-bold">Cargando pizza...</h3>
        </div>
      </div>
    );
  };

  return (
    <div className="container my-4 content">
      <div className="card shadow-sm">
        <div className="row g-0 align-items-stretch">
          <div className="col-12 col-md-5 d-flex align-items-stretch">
            <img src={pizza.img} alt={`Pizza ${pizza.name}`} className="img-fluid h-100 w-100 object-fit-cover" style={{objectFit: 'cover'}}/>
          </div>
          <div className="col-12 col-md-7">
            <div className="card-body">
              <h2 className="card-title text-capitalize">{pizza.name}</h2>
              <p className="card-text">{pizza.desc}</p>
              <h5>Ingredientes:</h5>
                <ul className="list-group list-group-flush">
                  {pizza.ingredients.map((ingrediente, index) => (<li key={index} className="list-group-item fs-6">🍕 {ingrediente}</li>))}
                </ul>
              <div className="mt-4 text-center text-md-start">
                <h4 className="mt-3 fw-bold">Precio: ${formatMiles(pizza.price)}</h4>
                <div className="d-flex justify-content-center justify-content-md-start mt-2">
                  <button className="btn btn-danger mt-3">Añadir al carrito</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pizza;