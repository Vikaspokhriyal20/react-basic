import React, { useReducer , useEffect , useState } from 'react'
import './bgchanger.css'
import axios from 'axios'


const initailState = {
    loading: true,
    error: '',
    post: {}
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'FETCH_SUCCESS':
            return {
                loading: false,
                post: action.payload,
                error: ''
            }
        case 'FETCH_ERROR':
            return {
                loading: false,
                post: {},
                error: 'opps Not found '
            }
        default:
            return state
    }
}


const DataFetchingTwo = () => {
    const [state, dispatch] = useReducer(reducer, initailState)
    const [textcolor, setTextcolor] = useState('blue');


    useEffect(() => {
        setTimeout(() => {
            axios.get('https://jsonplaceholder.typicode.com/posts/1')
                .then(response => {
                    dispatch({ type: 'FETCH_SUCCESS', payload: response.data })
                })
                .catch(error => {
                    dispatch({ type: 'FETCH_ERROR' })
                })
        }, 3000);

    }, [])
    return (
        <>
            <section id='fetchingdata'>
                <h2>Fetching Data-2...</h2>
                {state.loading ? <p style={{ color: textcolor }}>Loading..</p> : <p>{state.post.title}</p>}
                {state.error ? <p>{state.error}</p> : null}
            </section>
        </>
    )
}

export default DataFetchingTwo
