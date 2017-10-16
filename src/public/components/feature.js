import React from 'react'
import '../styles/publicStyles.css'
const Feature = ({img, title, description}) => {
    return(
        <section className='featureContainer'>
            <span className='icon'><img src={img} className='img-responsive imageFeature'/></span>
            <h3>{title}</h3>
            <p>{description}</p>
        </section>
    )
}
export default Feature