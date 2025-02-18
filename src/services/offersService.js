import axios from 'axios';
import offers from '../data/offers';
const API_URL = 'https://fakestoreapi.com';

export const offersList = offers;

// export const fetchProducts = async () => {
//   try {
//     const response = await axios.get(`${API_URL}/products`);
//     return response.data;
//   } catch (error) {
//     console.error('Error fetching products:', error);
//     return [];
//   }
// };

// export const fetchProductById = async (id) => {
//   try {
//     const response = await axios.get(`${API_URL}/products/${id}`);
//     return response.data;
//   } catch (error) {
//     console.error('Error fetching product:', error);
//     return null;
//   }
// };
