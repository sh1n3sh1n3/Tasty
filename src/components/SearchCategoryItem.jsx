import { useEffect, useState } from 'react'
import './SearchCategoryItem.css'

const SearchCategoryItem = (props) => {
    // const [mealName, setMealName] = useState()
    // const [screenWidth, setScreenWidth] = useState()
    // const [mobile, setMobile] = useState(true)
    // const [desktop, setDesktop] = useState(false)

let shortMeal = props.meal.strMeal
shortMeal = shortMeal.slice(0,9)
shortMeal = `${shortMeal}...`

// let longMeal = props.meal.strMeal

// window.onresize = function () {
//     if(window.screen.width < 567){
//         // setMealName(shortMeal)
//         // setScreenWidth("mobile")
//         setMobile(true)
//         setDesktop(false)
//         // console.log({screenWidth});
//         console.log({mobile});
//     }
//     if(window.screen.width > 567){
//         // setMealName(longMeal)
//         // setScreenWidth("desktop")
//         setDesktop(true)
//         setMobile(false)
//         // console.log({screenWidth});
//         console.log({desktop});
//     }
//     console.log("resized");
// }

// console.log(window.screen.width);

    return ( 
        <article className='search-category-item'>
            <div className='categoryImageBox'>
            <img src={props.meal.strMealThumb} alt={props.meal.strMeal} />
            </div>
            <p className='meal-name-category'>{shortMeal}</p>

            {/* <p style={mobile ? {display: "block"} : {display: "none"}}>{shortMeal}</p>
            <p style={desktop ? {display: "block"} : {display: "none"}}>{longMeal}</p> */}
        </article>
     );
}

export default SearchCategoryItem;