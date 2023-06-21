import Ingredients from '../components/Ingredients';
import Instructions from '../components/Instructions';
import Nav from '../components/Nav';
import Toggle from '../components/Toggle';
import './Details.css'

const Details = () => {
    return ( 
        <>
        <h1>Details</h1>
        <Toggle/>
        <Ingredients/>
        <Instructions/>
        <Nav/>
        </>
     );
}
 
export default Details;