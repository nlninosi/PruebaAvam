import axios from 'axios'

const productAPI = axios.create({
    productURL : "http://localhost:8000/cotizar/api/products/",
});
export const getallproducts = () => productAPI.get('/');