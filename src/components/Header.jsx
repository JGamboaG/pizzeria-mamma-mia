const Header = () => {
  return (
    <header className="position-relative text-white bg-img d-flex flex-column align-items-center justify-content-center">
      <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-75"></div>
      <h1 className="position-relative z-1 fs-1 fw-bold">¡Pizzería Mamma Mia!</h1>
      <p className="position-relative z-1 fs-6">¡Tenemos las mejores pizzas que podrías encontrar!</p>
      <hr className="z-1 w-50"/>
    </header>
  )
}

export default Header