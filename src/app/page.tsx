"use client";
import Footer from "./components/Footer";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import Button from "./components/Button";
import CurrenciesTable from "./components/CurrenciesTable";

const mockedData = [
  {
    id: "bitcoin",
    symbol: "btc",
    name: "Bitcoin",
    image:
      "https://coin-images.coingecko.com/coins/images/1/large/bitcoin.png?1696501400",
    current_price: 85761,
    market_cap: 1720387532573,
    market_cap_rank: 1,
    fully_diluted_valuation: 1720387532573,
    total_volume: 69978172540,
    high_24h: 94902,
    low_24h: 85928,
    price_change_24h: -7792.087636715471,
    price_change_percentage_24h: -8.32904,
    market_cap_change_24h: -133725873549.05396,
    market_cap_change_percentage_24h: -7.21239,
    circulating_supply: 19831790,
    total_supply: 19831790,
    max_supply: 21000000,
    ath: 108786,
    ath_change_percentage: -20.13317,
    ath_date: "2025-01-20T09:11:54.494Z",
    atl: 67.81,
    atl_change_percentage: 128029.83249,
    atl_date: "2013-07-06T00:00:00.000Z",
    roi: null,
    last_updated: "2025-03-03T19:57:38.354Z",
  },
  {
    id: "ethereum",
    symbol: "eth",
    name: "Ethereum",
    image:
      "https://coin-images.coingecko.com/coins/images/279/large/ethereum.png?1696501628",
    current_price: 2137.78,
    market_cap: 262573003967,
    market_cap_rank: 2,
    fully_diluted_valuation: 262573003967,
    total_volume: 32078399008,
    high_24h: 2542.79,
    low_24h: 2147.72,
    price_change_24h: -350.86015202314456,
    price_change_percentage_24h: -14.09848,
    market_cap_change_24h: -37755245670.09967,
    market_cap_change_percentage_24h: -12.57133,
    circulating_supply: 120587727.2185716,
    total_supply: 120587727.2185716,
    max_supply: null,
    ath: 4878.26,
    ath_change_percentage: -55.4175,
    ath_date: "2021-11-10T14:24:19.604Z",
    atl: 0.432979,
    atl_change_percentage: 502199.41169,
    atl_date: "2015-10-20T00:00:00.000Z",
    roi: {
      times: 32.314979153700165,
      currency: "btc",
      percentage: 3231.4979153700165,
    },
    last_updated: "2025-03-03T19:57:40.536Z",
  },
  {
    id: "tether",
    symbol: "usdt",
    name: "Tether",
    image:
      "https://coin-images.coingecko.com/coins/images/325/large/Tether.png?1696501661",
    current_price: 0.999186,
    market_cap: 142318394268,
    market_cap_rank: 3,
    fully_diluted_valuation: 142318394268,
    total_volume: 107404558661,
    high_24h: 1,
    low_24h: 0.999168,
    price_change_24h: -0.000792388806425071,
    price_change_percentage_24h: -0.07924,
    market_cap_change_24h: -91824560.3664856,
    market_cap_change_percentage_24h: -0.06448,
    circulating_supply: 142435921724.0118,
    total_supply: 142435921724.0118,
    max_supply: null,
    ath: 1.32,
    ath_change_percentage: -24.48251,
    ath_date: "2018-07-24T00:00:00.000Z",
    atl: 0.572521,
    atl_change_percentage: 74.52082,
    atl_date: "2015-03-02T00:00:00.000Z",
    roi: null,
    last_updated: "2025-03-03T19:57:36.655Z",
  },
  {
    id: "ripple",
    symbol: "xrp",
    name: "XRP",
    image:
      "https://coin-images.coingecko.com/coins/images/44/large/xrp-symbol-white-128.png?1696501442",
    current_price: 2.39,
    market_cap: 140835727983,
    market_cap_rank: 4,
    fully_diluted_valuation: 242997750784,
    total_volume: 14346587875,
    high_24h: 2.94,
    low_24h: 2.4,
    price_change_24h: -0.4873418451421725,
    price_change_percentage_24h: -16.93188,
    market_cap_change_24h: -25799883554.23178,
    market_cap_change_percentage_24h: -15.48282,
    circulating_supply: 57949738512,
    total_supply: 99986390660,
    max_supply: 100000000000,
    ath: 3.4,
    ath_change_percentage: -28.58589,
    ath_date: "2018-01-07T00:00:00.000Z",
    atl: 0.00268621,
    atl_change_percentage: 90249.43965,
    atl_date: "2014-05-22T00:00:00.000Z",
    roi: null,
    last_updated: "2025-03-03T19:57:34.898Z",
  },
  {
    id: "binancecoin",
    symbol: "bnb",
    name: "BNB",
    image:
      "https://coin-images.coingecko.com/coins/images/825/large/bnb-icon2_2x.png?1696501970",
    current_price: 573.64,
    market_cap: 84687941480,
    market_cap_rank: 5,
    fully_diluted_valuation: 84687941480,
    total_volume: 1492067968,
    high_24h: 627.93,
    low_24h: 575.41,
    price_change_24h: -52.12116395347755,
    price_change_percentage_24h: -8.32925,
    market_cap_change_24h: -6698517889.907684,
    market_cap_change_percentage_24h: -7.32988,
    circulating_supply: 145887575.79,
    total_supply: 145887575.79,
    max_supply: 200000000,
    ath: 788.84,
    ath_change_percentage: -26.70328,
    ath_date: "2024-12-04T10:35:25.220Z",
    atl: 0.0398177,
    atl_change_percentage: 1452009.39027,
    atl_date: "2017-10-19T00:00:00.000Z",
    roi: null,
    last_updated: "2025-03-03T19:57:35.578Z",
  },
];

export const HEADERS = [
  "Coin",
  "Price",
  "Market Cap",
  "Total Volume",
  "Circulating Supply",
  "24h %",
];

export default function Home() {
  const isProcessing = false;
  return (
    <>
      <Header />
      <main className='mx-auto px-8 py-12 max-w-[1280px] min-h-screen'>
        <div className='flex flex-col justify-between gap-12 px-4 py-6 md:flex-row xl:px-0'>
          <h2 className='text-xl font-semibold'>Crypto Prices</h2>

          <SearchBar query={""} onSearch={() => console.log("Hello")} />
        </div>

        <CurrenciesTable
          headers={HEADERS}
          currencies={mockedData}
          isLoading={isProcessing}
        />

        <div className='flex justify-center'>
          <Button isProcessing={isProcessing} onClick={() => {}}>
            {isProcessing ? "Refreshing" : "Refresh"}
          </Button>
        </div>
      </main>
      <Footer />
    </>
  );
}
