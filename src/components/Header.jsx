import React from 'react'

const Header = () => {
  return (
    <header class="position-relative text-white bg-img d-flex flex-column align-items-center justify-content-center">
      <div class="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-75"></div>
      <h1 class="position-relative z-1 fs-1 fw-bold">¡Pizzería Mamma Mia!</h1>
      <p class="position-relative z-1 fs-6">¡Tenemos las mejores pizzas que podrías encontrar!</p>
      <hr class="z-1 w-50"/>
    </header>
  )
}

export default Header