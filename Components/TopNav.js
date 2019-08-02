import React from "react";

function Nav({ today, setToday }) {
  function go(offset) {
    let day2 = new Date(today);
    day2.setDate(1);
    day2.setMonth(today.getMonth() + offset);
    setToday(day2);
  }
  function nextY(kk) {
    let year = new Date(today);
    year.setFullYear(year.getFullYear() + kk);
    setToday(year);
  }
  return (
    <div class="TopNav">
      <button onClick={() => nextY(-1)}> Prev Year </button>
      <button onClick={() => go(-1)}> Prev </button>
      {today.getFullYear()} / {today.getMonth() + 1} / {today.getDate()}
      <button onClick={() => go(1)}> Next </button>
      <button onClick={() => nextY(1)}> Next Year </button>
      <button onClick={() => setToday(new Date())}> Today </button>
    </div>
  );
}

export default Nav;
