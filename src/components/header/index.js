import { h } from 'preact';
import { Link } from 'preact-router/match';
import { useEffect, useState } from 'preact/hooks';
import getProduct from '../../service/Api/GetProduct';
import style from './style.css';

const Header = ({ currentProductId }) => {
  const [currentProduct, setCurrentProduct] = useState(null);

  useEffect(() => {
    if (currentProductId) getProductData();
    else setCurrentProduct(null);
  }, [currentProductId]);

  const getProductData = () => {
    getProduct(currentProductId).then((data) => {
      setCurrentProduct(data);
      localStorage.setItem('currentModel', data.model);
    });
  };
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
      <div>
        <img src='../../assets/cart.png' alt='cart' />
      </div>

      {/* <nav>
			<Link activeClassName={style.active} href="/">Home</Link>
			<Link activeClassName={style.active} href="/profile">Me</Link>
			<Link activeClassName={style.active} href="/profile/john">John</Link>
		</nav> */}
    </header>
  );
};

export default Header;
