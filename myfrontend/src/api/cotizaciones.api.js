import axios from 'axios'

const cotizacionesAPI = axios.create({
    userURL : "http://localhost:8000/cotizar/api/cotizar/",
});
export const getallcotizaciones = () => cotizacionesAPI.get('/');

export const createCotizacion = (Cotizacion) => cotizacionesAPI.post('/', Cotizacion);