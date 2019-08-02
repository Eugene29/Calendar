import React from "react";
import Calendar from "./Components/Calendar";
import Footer from "./Components/Footer";
import Nav from "./Components/TopNav.js";
import "./styles.scss";

function App() {
  let [today, setToday] = React.useState(new Date());
  return (
    <div className="App">
      <Nav today={today} setToday={setToday} />
      <Calendar today={today} setToday={setToday} />
      <Footer />
      {today.getFullYear()}/{today.getMonth() + 1}/{today.getDate()}
    </div>
  );
}

export default App;
