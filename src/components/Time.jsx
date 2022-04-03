import React from "react";
import Hour from "./Hour";
import Minute from "./Minute";
import AmPm from "./AmPm";
import Month from "./Month";
import Day from "./Day";

export default function Time() {
  return (
    <div>
      {" "}
      <section className="time-container">
        Time?
        <Hour />
        :
        <Minute />
        <AmPm />
      </section>
      <section className="time-container">
        <h3>Date</h3>
        <Month />
        /
        <Day />
      </section>
    </div>
  );
}
