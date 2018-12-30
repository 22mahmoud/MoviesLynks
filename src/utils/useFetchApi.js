import { useState, useEffect } from "react";

import axios from "../config/axios";

const useFetchApi = (url, opts = {}) => {
  const [data, setData] = useState([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    setIsError(false);
    setIsLoading(true);

    try {
      const { data } = await axios(url, {
        params: opts
      });
      setData(data);
    } catch (error) {
      setIsError(true);
    }

    setIsLoading(false);
  };

  useEffect(
    () => {
      fetchData();
    },
    [url]
  );

  return { data, isError, isLoading };
};

export default useFetchApi;
