import { h, Fragment } from 'preact';
import style from './style.css';
import { Link } from 'preact-router/match';

export const ProductCard = ({ product }) => {
  const { id, brand, model, price, imgUrl } = product;
  return (
    <Fragment>
      <Link className={style.productCard} href={`/product/${id}`}>
        <img src={imgUrl} alt='Product Image' className={style.productImg} />
        <div className={style.productDescription}>
          <h2>{model}</h2>
          <h3>{brand}</h3>
          <span className={style.productCardPrice}>{`Є${price}`}</span>
        </div>
      </Link>
    </Fragment>
  );
};
