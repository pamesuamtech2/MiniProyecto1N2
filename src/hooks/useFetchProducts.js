import { useState, useEffect } from 'react';
import axios from 'axios';


export const useFetchProducts = (url) => {
  const [data, setData] = useState([]);      // Guarda los productos
  const [loading, setLoading] = useState(true); // Controla el spinner de carga
  const [error, setError] = useState(null);     // Guarda el mensaje si algo falla

  useEffect(() => {

    const fetchData = async () => {
      setLoading(true);
      
      try {
        const response = await axios.get(url);
        setData(response.data);
        setError(null);
        
      } catch (err) {
        setError('Error al cargar los productos. Intenta nuevamente.');
        
      } finally {
        setLoading(false); 
      }
    };

    fetchData();

  }, [url]); 


  return { data, loading, error };
};