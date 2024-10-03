/* eslint-disable react-refresh/only-export-components */
import { useState, useEffect } from "react";

// Hook générique pour les requêtes API
const UseApi = (url, method = 'GET', bodyData = null) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortCont = new AbortController();
    
    // Configuration de la requête en fonction de la méthode (GET, POST, PUT, DELETE)
    const options = {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
      signal: abortCont.signal,
    };

    // Ajout du corps de la requête pour POST et PUT
    if (bodyData && (method === 'POST' || method === 'PUT')) {
      options.body = JSON.stringify(bodyData);
    }

    setIsLoading(true);

    fetch(url, options)
      .then((res) => {
        if (!res.ok) {
          throw new Error(
            "Impossible de récupérer les données pour cette ressource."
          );
        }
        return res.json();
      })
      .then((data) => {
        setData(data);
        setIsLoading(false);
      })
      .catch((err) => {
        if (err.name === "AbortError") {
          console.log("Fetch aborted");
        } else {
          setError(err.message);
          setIsLoading(false);
        }
      });

    // Cleanup function to abort fetch
    return () => abortCont.abort();
  }, [url, method, bodyData]);

  return { data, isLoading, error };
};

// Méthode GET
export const useGet = (url) => {
  return UseApi(url, 'GET');
};

// Méthode POST
export const usePost = (url, bodyData) => {
  return UseApi(url, 'POST', bodyData);
};

// Méthode PUT
export const usePut = (url, bodyData) => {
  return UseApi(url, 'PUT', bodyData);
};

// Méthode DELETE
export const useDelete = (url) => {
  return UseApi(url, 'DELETE');
};

export default UseApi;
