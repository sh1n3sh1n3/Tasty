import { useEffect, useContext, useState } from 'react';
import './SearchCategoryList.css'
import { CategoryFilterContext, SearchbarCategoryContext } from '../context/Context';
import SearchCategoryItem from './SearchCategoryItem';

const SearchCategoryList = () => {
    const {categoryFilter, setCategoryFilter} = useContext(CategoryFilterContext)
    const { searchInputCategory, setSearchInputCategory } = useContext(SearchbarCategoryContext)
    const [categoryData, setCategoryData] = useState([])

    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryFilter}`)
        .then((res) => res.json())
        .then((data) => setCategoryData(data.meals))
        .catch((err) => console.log(`Fehler: ${err}`))
    },[categoryFilter])

    useEffect(() => {
        if(searchInputCategory != "" && searchInputCategory != undefined){
            let filteredData = [...categoryData].filter((meal) => meal.strMeal.toLowerCase().includes(searchInputCategory.toLowerCase()))
            console.log(filteredData);
            setCategoryData(filteredData) 
        } else {
            fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryFilter}`)
            .then((res) => res.json())
            .then((data) => setCategoryData(data.meals))
            .catch((err) => console.log(`Fehler: ${err}`))
        }
    },[searchInputCategory])
    
    return ( 
        <>
        <section className="category-item-list">
            {categoryData ? (
                categoryData.map((meal, index) => {return <SearchCategoryItem meal={meal} key={index} />})
            ) : (
                <p>loading data..</p>
            )}
        </section>
        </>
     );
}

export default SearchCategoryList;