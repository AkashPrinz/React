import React from 'react'
import { Link } from 'react-router-dom'

const Contact = () => {
    return (
        <div>
            contact
            <button style={{backgroundColor:black}}><Link style={{textDecoration:'none', color:'white'}} to="/Contact">Contact</Link></button>
            <button><Link to="/Services">Services</Link></button>
        </div>
    )
}

export default Contact