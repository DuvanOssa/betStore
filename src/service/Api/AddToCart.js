import { post } from '../HttpService';

export default async function AddToCartService(payload) {
  const response = await post(
    'https://front-test-api.herokuapp.com/api/cart/',
    payload
  );
  return response;
}
