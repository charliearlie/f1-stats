function calculateTimeDifference(
  leadingTime?: string,
  currentTime?: string
): string {
  if (!leadingTime || !currentTime) return "";

  const [leadingTimeMinutes, leadingTimeSeconds, leadingTimeMilliseconds] =
    leadingTime.split(/[.:]+/);

  const [currentTimeMinutes, currentTimeSeconds, currentTimeMilliseconds] =
    currentTime.split(/[.:]+/);

  const leadingTimeInMilliseconds =
    Number(leadingTimeMinutes) * 60000 +
    Number(leadingTimeSeconds) * 1000 +
    Number(leadingTimeMilliseconds);

  const currentTimeInMilliseconds =
    Number(currentTimeMinutes) * 60000 +
    Number(currentTimeSeconds) * 1000 +
    Number(currentTimeMilliseconds);

  return String((currentTimeInMilliseconds - leadingTimeInMilliseconds) / 1000);
}

export default calculateTimeDifference;
