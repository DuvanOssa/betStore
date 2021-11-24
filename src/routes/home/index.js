import { h } from 'preact';
import { useEffect, useMemo, useState } from 'preact/hooks';
import { ProductCard } from '../../components/product/ProductCard';
import { SearchBar } from '../../components/SearchBar/SearchBar';
import getProducts from '../../service/Api/GetProducts';
import { normalizeString } from '../../utils/normalize';
import style from './style.css';

const Home = () => {
  const [productList, setProductList] = useState([]);
  const [textFilter, setTextFilter] = useState('');

  useEffect(() => {
    const getProductsData = () => {
      getProducts().then((data) => {
        setProductList(data);
      });
    };

    getProductsData();
  }, []);

  const handleChange = (event) => {
    setTextFilter(event.target.value);
  };

  const productFilterList = useMemo(() => {
    const searchParam = normalizeString(textFilter);
    return productList.filter(
      (item) =>
        normalizeString(item.brand).includes(searchParam) ||
        normalizeString(item.model).includes(searchParam)
    );
  }, [textFilter, productList]);

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
