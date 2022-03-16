import { useEffect, useState } from "react";

export default function useFetch(URL) {
  const [data, setData] = useState(undefined);
  const [error, setError] = useState(undefined);

  useEffect(() => {
    async function getData(URL) {
      setError(null);
      if (URL === `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=`) {
        URL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=mojito";
      }
      try {
        const response = await fetch(URL);
        const json = await response.json();
        setData(json);
      } catch (e) {
        await setError(e);
      }
    }
    getData(URL);
  }, [URL]);
  return [data, error];
}
