export interface Currency {
  id: string;
  symbol: string;
  name: string;
  image: string;
  current_price: number;
  market_cap: number;
  circulating_supply: number;
  price_change_percentage_24h: number;
  total_volume: number;
}
