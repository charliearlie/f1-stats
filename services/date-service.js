import dayjs from "dayjs";
  export function getRaceWeekendDates(date) {
    return `${dayjs(date).subtract(2, "day").format("DD")} - ${dayjs(
      date
    ).format("DD")} ${dayjs(date).format("MMM")}`;
  }

  export function getRaceWeekendDatesObject(date) {
    return {
      days: `${dayjs(date).subtract(2, "day").format("DD")}-${dayjs(
        date
      ).format("DD")}`,
      month: `${dayjs(date).format("MMM")}`,
      year: `${dayjs(date).format("YYYY")}`,
    };
  }
