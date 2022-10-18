export function formatDate(inputDate: string): string {
  return new Date(inputDate).toLocaleString().slice(0, 22);
}
