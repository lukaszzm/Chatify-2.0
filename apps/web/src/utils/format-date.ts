import { formatDistance, isSameWeek, formatDate as format, isSameDay } from "date-fns";

export function formatDate(timestamp: string): string {
  const now = new Date();

  if (isSameDay(timestamp, now)) {
    return formatDistance(timestamp, now, { addSuffix: true }).replace(
      "less than a minute ago",
      "just now"
    );
  }

  if (isSameWeek(timestamp, now)) {
    return format(timestamp, "cccc	kk:mm");
  }

  return format(timestamp, "dd MMM yy, kk:mm");
}
