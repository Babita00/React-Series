import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(
      `https://v6.exchangerate-api.com/v6/227ff417209f96fb0be2aa43/latest/${currency}`
    )
      .then((res) => res.json()) // Ensure the response is converted to JSON
      .then((res) => {
        console.log(res); // Logging full response to debug

        setData(res.conversion_rates); // Store conversion rates, not the entire response
      })
      .catch((error) => {
        console.error("Error fetching currency data: ", error);
      });
  }, [currency]);

  return data;
}

export default useCurrencyInfo;
