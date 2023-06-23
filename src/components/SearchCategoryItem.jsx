import './SearchCategoryItem.css'

const SearchCategoryItem = (props) => {

let shortMeal = props.meal.strMeal
shortMeal = shortMeal.slice(0,9)
shortMeal = `${shortMeal}...`

    return ( 
        <article className="search-category-item">
            <div className="categoryImageBox">
                <img src={props.meal.strMealThumb} alt={props.meal.strMeal} />
            </div>
            <p className="meal-name-category">{shortMeal}</p>
        </article>
     );
}

export default SearchCategoryItem;