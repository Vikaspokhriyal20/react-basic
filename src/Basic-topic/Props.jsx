import React from 'react'


const Props = ({ product }) => {
  function Payment(props) {
    return <button> <del> Pay {props.price}</del></button>
  }

  function Discount(props) {
    return <button> Pay {props.offer}</button>
  }

  const basicPrice = 499;
  const discountPrice = basicPrice - 69;

  return (
    <>
      <section id='dell-product'>
        <p>{product}</p>
        <Payment price={basicPrice} />
        <Discount offer={discountPrice}/>
      </section>
    </>
  )
}

export default Props
