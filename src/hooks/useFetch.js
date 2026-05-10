import { useState, useEffect } from "react";


export default function useFetch(apiFunction) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(()=>{apiFunction().then(res=>{
    setData(res);
    setLoading(false);

  })},[apiFunction])
  return {data, loading}
}
