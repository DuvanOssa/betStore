import { Fragment } from 'preact';
import style from './style.css';

export const SearchBar = () => {
  return (
    <Fragment>
      <input className={style.searchBar} placeholder='Buscar...' />
    </Fragment>
  );
};
