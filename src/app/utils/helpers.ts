export const formatCurrency = (value: number) =>
  value.toLocaleString("en-US", { style: "currency", currency: "USD" });

export function formatNumberWithCommas(value: number) {
  return value.toLocaleString("en-US");
}

export function formatCurrencyRepresentation(value: number) {
  const num = typeof value === "string" ? parseFloat(value) : value;

  if (isNaN(num)) {
    return "Invalid input";
  }

  if (num >= 1000000000000) {
    return `$${(num / 1000000000000).toFixed(1)}T`;
  } else if (num >= 1000000000) {
    return `$${(num / 1000000000).toFixed(1)}B`;
  } else if (num >= 1000000) {
    return `$${(num / 1000000).toFixed(1)}M`;
  } else if (num >= 1000) {
    return `$${(num / 1000).toFixed(1)}K`;
  } else {
    return `$${num.toFixed(2)}`;
  }
}
