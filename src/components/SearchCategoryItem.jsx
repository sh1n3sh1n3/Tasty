import './SearchCategoryItem.css'

const SearchCategoryItem = (props) => {
    return ( 
        <article className='search-category-item'>
            <img src={props.meal.strMealThumb} alt={props.meal.strMeal} />
            <p>{props.meal.strMeal}</p>
        </article>
     );
}

export default SearchCategoryItem;