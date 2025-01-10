import React from 'react';
import qs from 'qs';
import {useNavigate} from 'react-router-dom';

import { useSelector, useDispatch} from 'react-redux';



import {Categories, Sort, PizzaBlock, Skeleton, Pagination} from '../components'


import { useAppDispatch } from '../redux/store';
import { searchValueSelector } from '../redux/search/selectors';
import { pizzaDataSelector } from '../redux/pizza/selectors';
import { categoryIdSelector } from '../redux/filter/selectors';
import { currentPageSelector } from '../redux/pagination/selectors';
import { sortTypeSelector } from '../redux/sort/selectors';
import { fetchPizzas } from '../redux/pizza/asyncFetchData';
import { findSortType } from '../redux/sort/slice';
import { setCategory } from '../redux/filter/slice';
import { setPageCount } from '../redux/pagination/slice';



export default function Home(){
  const  searchValue  = useSelector(searchValueSelector);

  const dispatch = useDispatch();
  const appDispatch = useAppDispatch();
  const navigate = useNavigate();

  const isSearch = React.useRef(false);
  const isMounted = React.useRef(false);

  const { items, status } = useSelector(pizzaDataSelector);
  const categoryId = useSelector(categoryIdSelector);
  const currentPage = useSelector(currentPageSelector)
  const sortType = useSelector(sortTypeSelector);


  const getPizzas = async () => {
    

    const order = sortType.sortProperty.includes('-') ? 'asc': 'desc';
    const sortBy = sortType.sortProperty.replace('-', '');
    const category = categoryId !== 0 ? `&category=${categoryId}` : '';
    const search = searchValue ? `&search=${searchValue}` : '';
    
    appDispatch(
      fetchPizzas({
        order,
        sortBy,
        category,
        search,
        currentPage
    }));
  
    window.scrollTo(0, 0);
  }

  React.useEffect(() => {
    if(window.location.search){
      const params = qs.parse(window.location.search.substring(1));

      const sortProperty  = typeof params.sortProperty === 'string' ? params.sortProperty : '';
      const categoryIdStr = typeof params.categoryId === 'string' ? params.categoryId : '';
      const currentPageStr = typeof params.currentPage=== 'string' ? params.currentPage : '';

      const categoryId = parseInt(categoryIdStr);
      const currentPage = parseInt(currentPageStr);

      dispatch(findSortType({sortProperty}));
      dispatch(setCategory({categoryId}));
      dispatch(setPageCount({currentPage}));

      isSearch.current = true;

    }
  }, []);


  React.useEffect(() => {
    if(!isSearch.current){
      getPizzas();
    }

    isSearch.current = false;

  }, [categoryId, sortType, searchValue, currentPage]);

  React.useEffect(() => {
    if(isMounted.current){
      const queryString = qs.stringify({
        sortProperty: sortType?.sortProperty,
        categoryId,
        currentPage
      });

      navigate(`?${queryString}`);

    }

    isMounted.current = true;
  }, [categoryId, sortType?.sortProperty, currentPage]);

  const pizzas = items
  .map(item =>(<PizzaBlock key={item.id} {...item}/>));
  const skeletons = [...new Array(5)].map((_, i) => <Skeleton key={i}/>);

  const contentRender = status === 'error' ? 
  (
    <div className="content__error-info">
      <h2>Загрузка не удалась 😕</h2>
      <p>К сожалениюб не удалось получить питцы! Попробуйте повторить попытку позже.</p>
    </div>
  ) : 
  (
    <div className="content__items">
      {status === 'loading' ? skeletons : pizzas}
    </div>
  );

  return (
    <div className="container">
      <div className="content__top">
        <Categories />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      { contentRender }
      <Pagination />
    </div>
  );
}

