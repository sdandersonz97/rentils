import img from '../img/1.jpg'
export const styles = {
    sectionStyle: {
        backgroundColor:'black',
        backgroundImage:`url(${img})`, 
        height:'100vh', 
        backgroundRepeat: 'norepeat', 
        backgroundSize: 'cover', 
        display:'flex', 
        flexDirection:'column',
        alignItems:'center'
    }
}