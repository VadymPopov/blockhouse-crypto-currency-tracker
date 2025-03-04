# Challenges & Solutions

While building this project, I faced several challenges with data fetching, UI responsiveness, API integration, and documentation writing. Below are the key challenges and the solutions I implemented:

### 1. **Handling Asynchronous Data Fetching**

**Problem**: The cryptocurrency prices were fetched from the CoinGecko API, which required handling asynchronous operations, loading states, and ensuring the UI didn’t break while waiting for data.

**Solution**:  
I used **React Query** to manage data fetching. React Query automatically handles loading, error, and success states, which made the process easier. I also added a loading spinner from [react-spinners](`https://www.davidhu.io/react-spinners/`) package to improve the user experience during data loading.

### 2. **Ensuring Real-Time Data Updates**

**Problem**: Cryptocurrency prices change quickly, so the data needed to stay updated without making too many API calls.

**Solution**:  
I added a **manual refresh button** to allow users to fetch the latest data. React Query's caching feature reduced redundant API calls, improving performance.

### 3. **Filtering Data with a Search Bar**

**Problem**: A search bar was required to filter cryptocurrencies by name, which needed to be efficient without slowing down performance.

**Solution**:  
I filtered the data on the frontend after it was fetched. Given that the dataset was small (only 5 cryptocurrencies), this method worked well and kept the app fast.

### 4. **Displaying Data in a Responsive Layout**

**Problem**: The app needed to work well on both mobile and desktop, so the layout had to be flexible.

**Solution**:  
Using **Tailwind CSS**, I made the layout responsive. I used **Flexbox** for flexibility and added **sticky positioning** for table headers and **overflow-x-auto** for the table to make it accessible on mobile devices.

### 5. **Managing API Rate Limiting**

**Problem**: CoinGecko API has rate limits that could cause issues if the number of requests exceeded the allowed limit.

**Solution**:  
I implemented **caching** with React Query to minimize API calls. The data was cached and only refreshed when necessary (e.g., when the user clicked the "Refresh" button after stale time passed by).

### 6. **Ensuring Secure API Key Usage**

**Problem**: The API key for CoinGecko needed to be securely stored to prevent unauthorized access.

**Solution**:  
I stored the API key in environment variables (`NEXT_PUBLIC_COINGECKO_API_KEY`) and ensured it was only used in secure environments, protecting it from exposure in the frontend.

### 7. **Writing Documentation**

**Problem**: Writing clear and detailed documentation was a challenge, especially since it was my first time doing it with **Docusaurus**.

**Solution**:  
I used **Docusaurus** to organize and write the documentation. It helped me structure the setup guide, API integration, and project details in a user-friendly way. Writing the documentation also gave me a better understanding of the project and how to present it clearly.

### Conclusion

This project was a great learning experience. By using tools like Next.js, React Query, and Tailwind CSS, I was able to solve challenges related to data fetching, UI responsiveness, and API management.
