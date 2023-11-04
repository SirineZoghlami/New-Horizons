import { format } from "date-fns";

export const GetTime = (date) => {
  let real_date = new Date(date);
  let time = format(real_date, "h:mm a");
  return time;
};
