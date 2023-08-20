import React from 'react'

const Conditional = () => {
    const message = false;
   
    return (
        <>
            <section className="condition">
                {
                    message ? <kbd>Hello vikas</kbd> : <kbd>Not show any msg</kbd>
                }
            </section>
        </>
    )
}

export default Conditional
