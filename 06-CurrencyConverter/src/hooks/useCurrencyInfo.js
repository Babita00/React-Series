import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});
  //api call
  useEffect(() => {
    fetch(
      `https://v6.exchangerate-api.com/v6/227ff417209f96fb0be2aa43/latest/${currency}`
    )
      .then((res) => {
        res.json();
      })
      .then((res) => {
        console.log(res);

        setData(res[currency]);
      });
  }, [currency]);
  return data;
}

export default useCurrencyInfo;
