import axios from 'axios';

const API_URL = 'https://fakestoreapi.com';

export const fetchCategories = async () => {
  try {
    const response = await axios.get(`${API_URL}/products/categories`);
    return response.data;
  } catch (error) {
    console.error('Error fetching categories:', error);
    return [];
  }
};
