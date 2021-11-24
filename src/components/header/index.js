import { h } from 'preact';
import { Link } from 'preact-router/match';
import { useContext, useEffect, useState } from 'preact/hooks';
import { HeaderContext } from '../../context/headerContext';
import getProduct from '../../service/Api/GetProduct';
import style from './style.css';

const Header = ({ currentProductId }) => {
  const [currentProduct, setCurrentProduct] = useState(null);
  const [headerState] = useContext(HeaderContext);

  useEffect(() => {
    const getProductData = () => {
      getProduct(currentProductId).then((data) => {
        setCurrentProduct(data);
        localStorage.setItem('currentModel', data.model);
      });
    };

    if (currentProductId) getProductData();
    else setCurrentProduct(null);
  }, [currentProductId]);

  return (
    <header class={style.header}>
      <div class={style.inLine}>
        <Link href='/'>
          <h3>Inicio</h3>
        </Link>
        {currentProduct && (
          <div class={style.inLine}>
            <span>/</span>
            <Link href={`/product/${currentProductId}`}>
              <h3>{currentProduct.model}</h3>
            </Link>
          </div>
        )}
      </div>
      <Link href='/'>
        <h1>BetStore</h1>
        <h3>Tecnología más cerca de tí</h3>
      </Link>
      <div style={{ position: 'relative' }}>
        <img src='../../assets/cart.png' alt='cart' />
        <span class={style.cartCount}>{headerState.cartCount}</span>
      </div>
    </header>
  );
};

export default Header;
