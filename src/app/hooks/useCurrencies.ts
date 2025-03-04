import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchCurrencies = async () => {
  const { data } = await axios.get(
    "https://api.coingecko.com/api/v3/coins/markets",
    {
      params: {
        vs_currency: "usd",
        per_page: 5,
      },
      headers: {
        "x-cg-demo-api-key": process.env.NEXT_PUBLIC_COINGECKO_API_LEY,
      },
    }
  );
  return data;
};

export function useCurrencies() {
  return useQuery({
    queryKey: ["crypto-currencies"],
    queryFn: fetchCurrencies,
    staleTime: 30000,
  });
}
