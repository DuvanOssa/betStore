import { query } from '../HttpService';
import cacheVerify from '../Utils/CacheVerify';

export default async function getProducts() {
  const cacheData = cacheVerify('products');
  if (!cacheData) {
    const data = await query(
      'https://front-test-api.herokuapp.com/api/product'
    );
    const storeData = { data, date: new Date().getTime() };
    const storeStringData = JSON.stringify(storeData);
    localStorage.setItem('products', storeStringData);
    return data;
  }
  return cacheData;
}
