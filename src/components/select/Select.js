import { h, Fragment } from 'preact';
import style from './style.css';

export const Select = ({
  options,
  labelText,
  placeHolder,
  value,
  handleChange,
}) => {
  return (
    <Fragment>
      <div class={style.root}>
        <label>{labelText}</label>
        <select value={value} onChange={handleChange}>
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
