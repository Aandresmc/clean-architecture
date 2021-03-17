import Axios from "axios";
import { useState, useEffect } from "react";

interface IConfig {
  token?: string;
}

export const useGet = <T>(url: string, initialValue: T, config?: IConfig) => {
  const [data, setData] = useState<T>(initialValue);
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setLoading(true);
    let cancel: any;
    const cancelToken = new Axios.CancelToken((c: any) => (cancel = c));
    const requestConfig = {
      cancelToken,
      headers: {
        authorization: config?.token,
      },
    };
    Axios.get(url, requestConfig)
      .then((response) => {
        if (response.data.error) {
          throw new Error(response.data.message);
        }
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });

    return () => cancel();
  }, [url]);

  return { data, loading, error, setData };
};
