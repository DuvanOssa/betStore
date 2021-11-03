import { Fragment } from 'preact';
import style from './style.css';

export const Select = ({ options, labelText, placeHolder }) => {
  return (
    <Fragment>
      <div class={style.root}>
        <label>{labelText}</label>
        <select>
          <option value={''}>{placeHolder}</option>
          {options.map((item, i) => (
            <option key={i} value={item.code}>
              {item.name}
            </option>
          ))}
        </select>
      </div>
    </Fragment>
  );
};
