export function formatDate(time) {
  const date = new Date(Number(time) * 1000); // 将时间戳从秒转换为毫秒

  const formattedDate = date.toLocaleString("en-US", {
    month: "2-digit",
    day: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true, // 12小时制
  });

  return formattedDate;
}
