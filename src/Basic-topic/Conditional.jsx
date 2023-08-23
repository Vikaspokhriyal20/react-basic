import React from 'react'

const Conditional = () => {
    const message = false;
    const greet = true;
   
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
