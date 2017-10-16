import React from 'react'
import '../styles/publicStyles.css'
const Banner = () => {
    return(
        <section className='banner'>
            <div className='tableCell'>
                <h1>
                    <span className='title'> Rentils</span>
                    <span className='title'> The platform for magnaments your rentals !!</span>
                </h1>
                <div style={{display: '-webkit-inline-box'}}>
                    <a className='btn button' to='/login' >Login</a>
                    <a className='btn button' to='/signup/company'>Get Started Now! </a>
                </div> 
            </div>
        </section>
    )
}
export default Banner