import './LoadingSection.css'
import logo from "../images/logo.svg"


const LoadingSection = () => {

    return ( 
        <section className='loader-section'>
            <article className='logo-section'>
            <div className="lds-heart"><div></div></div>
            <img src={logo} alt="logo" />
            </article>
        </section>
     );
}
 
export default LoadingSection;