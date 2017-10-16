import React from 'react'
import '../styles/publicStyles.css'
import { Link } from 'react-router-dom'
const Banner = () => {
    return(
        <section className='banner'>
            <div className='tableCell'>
                <h1>
                    <span className='title'> Rentils</span>
                    <span className='title'> The platform for magnaments your rentals !!</span>
                </h1>
                <div style={{display: '-webkit-inline-box'}}>
                    <Link className='btn button' to='/login' >Login</Link>
                    <Link className='btn button' to='/signup/company'>Get Started Now! </Link>
                </div> 
            </div>
        </section>
    )
}
export default Banner