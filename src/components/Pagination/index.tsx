import ReactPaginate from 'react-paginate';
import {useDispatch, useSelector} from 'react-redux';

import styles from './Pagination.module.scss';
import { currentPageSelector } from '../../redux/pagination/selectors';
import { changePageCount } from '../../redux/pagination/slice';


export const Pagination: React.FC = () => {
  const dispatch = useDispatch();
  const currentPage = useSelector(currentPageSelector);
 
  const changePage = (event: {selected: number}) => {
    const page = event.selected + 1;
    dispatch(changePageCount({page}))
  }
  return (
    <>
      <ReactPaginate

        className={styles.root}
        breakLabel="..."
        nextLabel=">"
        previousLabel="<"
        onPageChange={changePage}
        pageRangeDisplayed={4}
        pageCount={3} 
        forcePage={currentPage - 1}
        renderOnZeroPageCount={null}
      />
    </>
  );
}