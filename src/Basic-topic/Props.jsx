import React from 'react'
import Car from './Car';


const Props = ({ firstP, secoundP }) => {

  const macBookPrice = 1050;
  const googlePixelPrice = 1000;

  return (
    <>
      <section id='product-card'>
        <div className="product-list">
          <div className="product">
            <p> <strong>{firstP}</strong></p>
            <ul>
              <li>Good built qaulity</li>
              <li>Fast in work</li>
              <li>Lightweight</li>
              <li>New software</li>
            </ul>
            <p>{macBookPrice}</p>
          </div>
          <div className="product">
            <p><strong>{secoundP}</strong></p>
            <ul>
              <li>Good built qaulity</li>
              <li>Fast in work</li>
              <li>Lightweight</li>
              <li>New software</li>
            </ul>
            <p>{googlePixelPrice}</p>
          </div>
        </div>
      </section>
      <Car/>
    </>
  )
}

export default Props

