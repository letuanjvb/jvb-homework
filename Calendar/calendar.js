let wrapper = document.querySelector(".wrapper");
let currentDate = document.querySelector(".current-date");
let currentYear = document.querySelector(".current-year")

const daysTag = document.querySelector(".days"),
monthsTag = document.querySelector(".months"),
prevNextIcon = document.querySelectorAll(".icons span");
prevNextIcon2 = document.querySelectorAll(".icons-year")

//lấy thời gian thực tế
let date = new Date(),
// năm thực tế
currYear = date.getFullYear(), 
// tháng thực tế
currMonth = date.getMonth();

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const renderCalendar = (month, year) => {
  let currDate = new Date();
  if (month == null) month = currDate.getMonth();
  if (!year) year = currDate.getFullYear();

  let firstDayofMonth = new Date(year, month, 1).getDay(), // lấy first day of month
    lastDateofMonth = new Date(year, month + 1, 0).getDate(), // lấy last date of month
    lastDayofMonth = new Date(year, month, lastDateofMonth).getDay(), // lấy last day of month
    lastDateofLastMonth = new Date(year, month, 0).getDate(); // lấy last date of previous month
  let liTag = "";

//   hiển thị ngày tháng thực vào div
  let curr_month = `${months[month]}`;
  currentDate.innerHTML = curr_month;
  currentYear.innerHTML = currYear;

  for (let i = firstDayofMonth; i > 0; i--) {
    // creating li of previous month last days
    liTag += `<li class="inactive">${lastDateofLastMonth - i + 1}</li>`;
  }

  for (let i = 1; i <= lastDateofMonth; i++) {
    // tạo li of all days of current month
    // thêm active class to li if the current day, month, and year matched
    let isToday =
      i === date.getDate() &&
      month === new Date().getMonth() &&
      year === new Date().getFullYear()
        ? "active"
        : "";
    liTag += `<li class="${isToday}">${i}</li>`;   
  }

  for (let i = lastDayofMonth; i < 13; i++) {
    // tạo li of next month first days
    liTag += `<li class="inactive">${i - lastDayofMonth + 1}</li>`;
  }

  daysTag.innerHTML = liTag;

};
renderCalendar();

// làm việc với month
//click chọn tháng
currentDate.onclick = () => {
    month_list.classList.add("show");
  };
let month_list = wrapper.querySelector(".month-list");
const month_picker = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

month_picker.forEach((e, index) => {
  let month = document.createElement("div");
  month.innerHTML = `<div data-month="${index}">${e}</div>`;
  month.querySelector("div").onclick = () => {
  month_list.classList.remove("show");
  currMonth = index;
  renderCalendar(index, currYear);
  };
  month_list.appendChild(month);
});

// làm việc với year
let year_list = document.querySelector('.year-list')
const year_picker = [currYear-8,currYear-7,currYear-6,currYear-5,currYear-4,currYear-3,currYear-2,currYear-1,currYear,currYear+1,currYear+2,currYear+3,currYear+4,currYear+5,currYear+6,currYear+7];
// click chọn year
currentYear.onclick = () => {
    year_list.classList.add("show");      
};
year_picker.forEach((e, index) => {
    let years = document.createElement("div");
    years.innerHTML = `<div data-year="${index}">${e}</div>`;
    years.querySelector("div").onclick = () => {
    year_list.classList.remove("show");
    currYear=e;
    renderCalendar(currMonth,e); 
    };
    year_list.appendChild(years);
  });

// làm việc với icon#1
prevNextIcon.forEach((icon) => {
  icon.addEventListener("click", () => {
    // thêm click event vào 2 icons
    // nếu click vào id prev thì tháng -1, else +1
    currMonth = icon.id === "prev" ? currMonth - 1 : currMonth + 1;

    if (currMonth < 0 || currMonth > 11) {
      // creating a new date of current year & month and pass it as date value
      date = new Date(currYear, currMonth);
      currYear = date.getFullYear(); // updating current year with new date year
      currMonth = date.getMonth(); // updating current month with new date month
    } else {
      date = new Date(); // pass the current date as date value
    }
    renderCalendar(currMonth, currYear); // calling renderCalendar function
  });
});

