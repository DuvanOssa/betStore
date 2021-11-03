import { h } from 'preact';
import { Link } from 'preact-router/match';
import { useEffect } from 'preact/hooks';
import style from './style.css';

const Header = ({ currentUrl }) => {
  // const [currentProduct, setCurrentProduct] = useState(null)
  // useEffect(() => {

  // }, [currentUrl])
  return (
    <header class={style.header}>
      <div class={style.inLine}>
        <Link href='/'>
          <h3>Inicio</h3>
        </Link>
        {currentUrl && (
          <div class={style.inLine}>
            <span>/</span>
            {/* <Link href={currentUrl}><h3>{currentModel}</h3></Link> */}
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
