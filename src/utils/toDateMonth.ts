export function formatDateToDayMonth(timestamp: string): string {
  const date = new Date(timestamp);
  const day = date.getUTCDate(); // Get the day of the month
  const month = date.getUTCMonth() + 1; // Get the month (0-indexed, so add 1)

  return `${day.toString().padStart(2, "0")} - ${month
    .toString()
    .padStart(2, "0")}`;
}
