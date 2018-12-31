import { useState, useEffect } from "react";

import axios from "../config/axios";

const useFetchApi = (intialUrl, intialOpts = {}) => {
  const [url, setUrl] = useState(intialUrl);
  const [opts, setOpts] = useState(intialOpts);
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

  const GET = (url, opts) => {
    setUrl(url);
    setOpts(opts);
  };

  useEffect(
    () => {
      fetchData();
    },
    [url, opts]
  );

  return { data, isError, isLoading, GET };
};

export default useFetchApi;
