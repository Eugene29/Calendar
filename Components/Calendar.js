import React from "react";

function Calendar({ today, setToday }) {
  let d = new Date(today);
  d.setDate(1);
  let firstDay = d.getDay();
  d.setMonth(d.getMonth() + 1);
  d.setDate(d.getDate() - 1);
  let lastDate = d.getDate();
  let week = ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"];

  return (
    // <div class="dayOfWeek cell">Mon</div>
    <div class="calendar">
      {week.map(v => (
        <div class="cell week">{v}</div>
      ))}

      {new Array(firstDay).fill(0).map(v => (
        <div class="cell" />
      ))}
      {new Array(lastDate).fill(0).map((v, i) => {
        let style = "black";
        if (
          i === new Date().getDate() &&
          d.getMonth() === new Date().getMonth() &&
          d.getFullYear() === new Date().getFullYear()
        )
          style = "white";
        return (
          <div class="cell" style={{ color: style }}>
            {i + 1}
          </div>
        );
      })}
    </div>
  );
}

export default Calendar;
