import dayjs from "dayjs";
export function getRaceWeekendDates(date: string) {
  return `${dayjs(date).subtract(2, "day").format("DD")} - ${dayjs(date).format(
    "DD"
  )} ${dayjs(date).format("MMM YYYY")}`;
}

export function getRaceWeekendDatesObject(date: string) {
  return {
    days: `${dayjs(date).subtract(2, "day").format("DD")}-${dayjs(date).format(
      "DD"
    )}`,
    month: `${dayjs(date).format("MMM")}`,
    year: `${dayjs(date).format("YYYY")}`,
  };
}

export function getLegibleDate(date: string) {
  return dayjs(date).format("dddd D MMMM YYYY");
}
