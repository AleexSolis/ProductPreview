import api from './';
import { Product } from '../types';

const wait = () =>
  new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve();
    }, 1000);
  });

export const getProducts = async (): Promise<Array<Product>> => {
  // This is only to test, it can be deleted at any time.
  await wait();
  const response = await api.get<Array<Product>>('products');
  return response.data;
};
