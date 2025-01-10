import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { filterSelector } from '../redux/filter/selectors';
import { changeCategory } from '../redux/filter/slice';



const Categories = React.memo(() => {
  const dispatch = useDispatch();
  const { categories, value } = useSelector(filterSelector);


  return (
    <div className="categories">
      <ul>
        {categories.map((categoryName, index) => (
          <li 
            className={value === index ? "active" : ""} 
            key={index}
            onClick={() => dispatch(changeCategory({index}))}
          >
            {categoryName}
          </li>
        ))}
      </ul>
    </div>
  );
})


export default Categories;