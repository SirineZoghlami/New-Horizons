import { format } from "date-fns";

export const GetTime = (date) => {
  let real_date = new Date(date);
  let time = format(real_date, "h:mm a");
  return time;
};

export const GetHM = (time = "00:00:00") => {
  let [h, m, _] = time.split(":");
  return [h, m].join(":");
};
