import React, { useState,useEffect } from "react";

function useFetch(API) {
  const[data,setData]=useState(null)
  const [loading,setLoading]=useState(false)
  const[error,setError]=useState(null)
  useEffect(() => {
    const getData = async () => {
        
      try {
        setLoading(true)
        const response = await fetch(API);
        if (!response.ok) {
            // console.log(response.status);
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`
          );
        }
        let actualData = await response.json();
        setData(actualData);
        setError(null);
      } catch (err) {
        setError(err.message);
        setData(null);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, [API]);
  return {data,loading,error}
}

export default useFetch;
