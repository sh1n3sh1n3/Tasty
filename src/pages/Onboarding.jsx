import './Onboarding.css'
import frontBg from "../images/onboard-frontimg.svg"
import { NavLink } from 'react-router-dom'



const Onboarding = () => {
    return ( 
        <section className='onboard-wrapper'>
            <article className='svg-section-onboard'>
                <div className='svg-box-onboard'>
                    <img className='flying-food' src={frontBg} alt="flying-food" />
                </div>
            </article>
            <article className='content-section-onboard'>
                <section className='content-onboard'>
                    <h1>All recipe you needed</h1>
                    <article className='text-5000'>
                    <p>5000+ healthy recipes made by people for your healthy life </p>
                    </article>
                    <NavLink to="/home">Get Started</NavLink>
                </section>
            </article>
        </section>
     );
}
 
export default Onboarding;