import React from 'react'
import { useLocation } from 'react-router-dom';

function Test(props) {

    console.log(window.location.href)

    const location = useLocation();
    const { id } = location.state
    const { title } = location.state
    const { text } = location.state
    const { image } = location.state

    return (
        <div>
            { id }
            { title }
            { text }
            { image }
        </div>
    )
}

export default Test