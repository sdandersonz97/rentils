import React from 'react'

const info = [7,4]
const warning = [3,0]
const alert = -1
const errorStyle = color => {
    return {
        fontSize: 18,
        position: 'relative',
        top: 2,
        left: 20,
        color
    }
}
const getAlert = days => {
    return days <= info[0] && days >= info[1] 
        ? <i className="material-icons" style={errorStyle('#19c6f4')}>error</i>
        : days <= warning[0] && days >= warning[1]
            ? <i className="material-icons" style={errorStyle('#f6ab2b')}>error</i>
            : days <= alert && <i className="material-icons" style={errorStyle('#ea432c')}>error</i>
}
export const dayLeft = paymentDate => {
    if(paymentDate){
        const oneDay = 1000*60*60*24
        const days = Math.floor(( paymentDate -  Date.now()) / oneDay)
        return <span>{days} Days left {days <= info[0] && getAlert(days)} </span>
    } else {
        return <span>---</span>
    }
    
}
