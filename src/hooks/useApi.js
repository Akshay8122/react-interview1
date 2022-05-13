import { useEffect, useState } from "react";
import axios from "axios";

function useApi(url) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    setIsLoading(true);
    await axios.get(url).then((res) => setData(res.data));
    setIsLoading(false);
  };
  useEffect(() => {
    fetchData();
  },[]);

  return { data, isLoading };
}

export default useApi;
