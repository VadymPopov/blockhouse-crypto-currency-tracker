# API integration details

### Fetching Cryptocurrency Data

In this project, cryptocurrency data is fetched from the **CoinGecko API** using the `axios` library. Below is a breakdown of how data is fetched and updated.

#### 1. Setting up the API Request

The API request to CoinGecko is made using the following endpoint:

```
https://api.coingecko.com/api/v3/coins/markets
```

The request parameters include:

- `vs_currency`: The target currency (in this case, USD).
- `per_page`: Number of results per page (set to 5 for this project).

Example API request using **axios**:

```js
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
```

#### 2. Handling API Requests with React Query

To handle data fetching and updates, we use **React Query**. React Query helps manage the fetching, caching, and updating of data in the application.

- **`useQuery`:** We use `useQuery` to fetch the latest cryptocurrency data from the CoinGecko API.

- **Refetching:** The `refetch` function provided by React Query allows for manual data refresh, ensuring the data is updated when the "Refresh" button is clicked.

Example of fetching and updating data using **React Query**:

```js
import { useQuery } from "@tanstack/react-query";

export function useCurrencies() {
  return useQuery({
    queryKey: ["crypto-currencies"],
    queryFn: fetchCurrencies,
    staleTime: 30000,
  });
}
```

```js
import { useCurrencies } from "../hooks/useCurrencies";

const { data, isLoading, isFetching, isError, refetch } = useCurrencies();
```

- **`data`:** : Contains the fetched cryptocurrency data (e.g., name, price, market cap).
- **`isLoading`:** Boolean flag to show loading indicator while data is being fetched (for the first time).

* **`isFetching`:** Boolean flag to show loading indicator whenever the query is actively fetching data, regardless of whether there's cached data.

- **`isError`:** : Boolean flag to handle any errors that occur during the data fetch.
- **`refetch`:** : Function to manually trigger a refetch of the data, used in the "Refresh" button.

#### 3. Updating Data

When a user clicks the **"Refresh"** button, the data is updated by manually triggering the `refetch` using the refetch function.

```jsx
<Button isProcessing={isLoading} onClick={() => refetch()}>
  {isLoading ? "Refreshing" : "Refresh"}
</Button>
```

This ensures that the latest cryptocurrency data is fetched and displayed on the dashboard.

**Error Handling**
In case of an error while fetching data, we handle the error state and display an appropriate message to the user.

Example error handling:

```js
if (isError) {
  return <div>Error fetching data. Please try again later.</div>;
}
```
