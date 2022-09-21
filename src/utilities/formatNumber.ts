const numberFormatter = Intl.NumberFormat("en-US");

export function formatNumber(number: number) {
  return numberFormatter.format(number);
}
