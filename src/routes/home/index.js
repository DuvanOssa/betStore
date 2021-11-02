import { h } from 'preact';
import { useEffect, useState } from 'preact/hooks';
import { ProductCard } from '../../components/product/ProductCard';
import { SearchBar } from '../../components/SearchBar/SearchBar';
import getProducts from '../../service/Api/GetProducts';
import style from './style.css';

const Home = () => {
  const [productList, setProductList] = useState(null);

  useEffect(() => {
    getProductsData();
  }, []);

  const getProductsData = () => {
    getProducts().then((data) => {
      setProductList(data);
    });
  };

  return (
    <div class={style.home}>
      <div class={style.homeHeader}>
        <h2>Lista de productos</h2>
        <SearchBar />
      </div>
      <div class={style.productList}>
        {productList &&
          productList.map((item, i) => <ProductCard key={i} product={item} />)}
      </div>
    </div>
  );
};

export default Home;
