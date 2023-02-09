var curr = new Date();
const first = curr.getDate() - curr.getDay() + 1;
var last = first + 6;

export const firstDayOfWeek = (curr) => {
  return new Date(curr.setDate(first)).toUTCString();
};

export const lastDayOfWeek = (curr) => {
  return new Date(curr.setDate(last)).toUTCString();
};

export const DaysOfWeek = (firstday) => {
  console.log(firstday);
  let days = [];
  firstday.setDate(firstday.getDate() - firstday.getDay() + 1);
  for (let i = 0; i < 7; i++) {
    days[i] = new Date(firstday).toUTCString();
    firstday.setDate(firstday.getDate() + 1);
  }
  return days;
};
// console.log(DaysOfWeek(new Date()));

export const formattedDate = (date) => {
  let data = date?.split(",")[1].split(" ");
  let returnedDate = data?.slice(0, 3).join(" ");
  return returnedDate;
};

//////////////////////////////
//// current year
//////////////////////////////
export const currentYear = new Date().getFullYear();

//////////////////////////////
//// current time
//////////////////////////////

let hour = (curr.getHours() < 10 ? "0" : "") + curr.getHours();
let minutes = (curr.getMinutes() < 10 ? "0" : "") + curr.getMinutes();
export const now = hour + ":" + minutes;

//////////////////////////////
//// next month
//////////////////////////////
export const nextMonth = (date, cb) => {
  const month = date.getMonth();
  if (month < 11) {
    date.setMonth(month + 1);
  } else {
    date.setMonth(0);
    date.setFullYear(date.getFullYear() + 1);
  }
  cb(new Date(date));
};

//////////////////////////////
//// previous month
//////////////////////////////
export const prevMonth = (date, cb) => {
  const month = date.getMonth();
  if (month > 0) {
    date.setMonth(month - 1);
  } else {
    date.setMonth(11);
    date.setFullYear(date.getFullYear() - 1);
  }
  cb(new Date(date));
};
