import React from 'react'
import '../styles/publicStyles.css'
import PropTypes from 'prop-types'
const Feature = ({img, title, description}) => {
    return(
        <section className='featureContainer  col-sm-4 col-md-4'>
            <span className='icon'><img src={img} className='img-responsive imageFeature'/></span>
            <h3>{title}</h3>
            <p>{description}</p>
        </section>
    )
}

Feature.propTypes = {
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string
}
export default Feature