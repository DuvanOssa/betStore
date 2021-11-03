import { query } from '../HttpService';
import cacheVerify from '../Utils/CacheVerify';

export default async function getProduct(id) {
  const cacheData = cacheVerify(`product_${id}`);
  if (!cacheData) {
    const data = await query(
      `https://front-test-api.herokuapp.com/api/product/${id}`
    );
    const storeData = { data, date: new Date().getTime() };
    const storeStringData = JSON.stringify(storeData);
    localStorage.setItem(`product_${id}`, storeStringData);
    return data;
  }
  return cacheData;
}
