import React from 'react'
import '../styles/publicStyles.css'
import Nav from './nav'
const Banner = () => {
    return(
        <section className='banner'>
            <div style={{ flexDirection: 'row', width:'100%' }}>
                <Nav/>
            </div>
            <h2 className='title' >
                Rentils<br/>
                The platform for magnaments your rentals !!
            </h2>
        </section>
    )
}
export default Banner