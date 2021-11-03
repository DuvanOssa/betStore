import { h, Fragment } from 'preact';
import style from './style.css';

export const SearchBar = ({ value, handleChange }) => {
  return (
    <Fragment>
      <input
        className={style.searchBar}
        placeholder='Buscar...'
        value={value}
        onKeyUp={handleChange}
      />
    </Fragment>
  );
};
