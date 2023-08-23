import React from 'react'


function Car(props) {
    return <p>this is {props.brand}</p>
}

const List = () => {
    const cars = [
        { id: 1, brand: 'audi' },
        { id: 2, brand: 'range rover' },
        { id: 3, brand: 'defender' },
    ];
    
    return (
        <>
            <section className='list'>
                {
                    cars.map((car) => <Car key={car.id} brand={car.brand} />)
                }
            </section>
        </>
    )
}

export default List
