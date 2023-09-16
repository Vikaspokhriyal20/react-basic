import React, { useEffect, useState } from 'react'
import './bgchanger.css'
import axios from 'axios'

const DateFetchingOne = () => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [post, setPost] = useState({});
    const [textcolor, setTextcolor] = useState('red');


    useEffect(() => {
        setTimeout(() => {
            axios.get('https://jsonplaceholder.typicode.com/posts/1')
            .then(response => {
                setLoading(false)
                setPost(response.data)
                setError('')
            })
            .catch(error => {
                setLoading(false)
                setPost({})
                setError('something went wrong')
            })
        }, 3000);
       
    }, [])

    return (
        <>
            <section id='fetchingdata'>
                <h2>Fetching-Data</h2>
                {loading ? <p style={{color: textcolor }}>Loading..</p> : <p>{post.title}</p>}
                {error ? <p>{error}</p> : null}

            </section>
        </>
    )
}

export default DateFetchingOne
