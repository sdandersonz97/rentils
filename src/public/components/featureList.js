import React from 'react'
import strategy from '../img/2.svg'
import expertise from '../img/3.svg'
import explore from '../img/1.svg'
import Feature from './feature'
import '../styles/publicStyles.css'
const Features = () => {
    return(
        <section className='featureListContainer row'>
            <Feature 
                img={strategy} 
                title='Explore'
                description='Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.' />
            <Feature 
                img={expertise} 
                title='Gain'
                description='Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.' />
            <Feature 
                img={explore} 
                title='Strategy'
                description='Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.' />
        </section>         
    )
}

export default Features