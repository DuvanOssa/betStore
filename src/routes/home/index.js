import { h } from 'preact';
import { useEffect, useState } from 'preact/hooks';
import { ProductCard } from '../../components/product/ProductCard';
import { SearchBar } from '../../components/SearchBar/SearchBar';
import getProducts from '../../service/Api/GetProducts';
import { normalizeString } from '../../utils/normalize';
import style from './style.css';

const Home = () => {
  const [productList, setProductList] = useState(null);
  const [productFilterList, setProductFilterList] = useState(null);
  const [textFilter, setTextFilter] = useState('');

  useEffect(() => {
    getProductsData();
  }, []);

  const getProductsData = () => {
    getProducts().then((data) => {
      setProductList(data);
      setProductFilterList(data);
    });
  };

  const handleChange = (event) => {
    setTextFilter(event.target.value);
    const searchParam = normalizeString(event.target.value);
    const productsFiltered = productList.filter(
      (item) =>
        normalizeString(item.brand).includes(searchParam) ||
        normalizeString(item.model).includes(searchParam)
    );
    setProductFilterList(productsFiltered);
  };

  return (
    <div class={style.home}>
      <div class={style.homeHeader}>
        <h2>Lista de productos</h2>
        <SearchBar value={textFilter} handleChange={handleChange} />
      </div>
      <div class={style.productList}>
        {productFilterList &&
          productFilterList.map((item, i) => (
            <ProductCard key={i} product={item} />
          ))}
      </div>
    </div>
  );
};

export default Home;
