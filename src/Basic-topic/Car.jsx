import React from 'react'


const CarName = (props) => {
   
    return (
        <>
            <h4>{props.brand.name}</h4>
        </>
    )
}
const Car = () => {
    const carinfo = { name: 'Range-Rover', model: 'top-d' };
  return (
    <>
    <section>
        <h4>Whice is the  best SUV.</h4>
        <CarName brand={carinfo}/>      
    </section>
    </>
  )
}

export default Car
