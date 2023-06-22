import './Instructions.css'
/* import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; */

const Instructions = () => {
    
/*     const [instructionData, setInstructionData] = useState();
    const params = useParams();
    const idDish = params.id;

    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idDish}`)
            .then(res => res.json())
            .then(instructionData => {
                setInstructionData(instructionData.meals[0])
                console.log(instructionData.meals);
            })
            .catch(error => {
                console.error("Fehler beim Fetch", error);
            });
    }, []);  */
    

    return ( 
        <>
        <h1>Instructions</h1>
        </>
     );
}
 
export default Instructions;