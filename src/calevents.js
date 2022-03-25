/**
 * Created by jannevainio on 13/01/17.
 */
import React, {useEffect, useState} from 'react';

var monthNames = ["Tammikuu", "Helmikuu", "Maaliskuu", "Huhtikuu", "Toukokuu", "Kesäkuu", "Heinäkuu", "Elokuu", "Syyskuu", "Lokakuu", "Marraskuu", "Joulukuu"];
var dayNames = ["Ma", "Ti", "Ke", "To", "Pe", "La", "Su"];

const toTimeObject = t => {
  const date = t.split("-");

  return {
    year: parseInt(date[0]),
    month: parseInt(date[1]),
    day: parseInt(date[2].split(" ")[0])
  };
};

const CalDayNames = props => {
  return (
    dayNames.map(function (dayName) {
      return <div className="day dayName" key={dayName + "_" + Math.random()}>{dayName}</div>
    })
  );
};

const CalDay = props => {

  let myClass = "day";
  if (props.reserved) {
    myClass = myClass + " " + "reserved";
  }
  else if (props.prevMonth) {
    myClass = myClass + " " + "prevMonth";
  }

  return (
    <div className={myClass}>{props.day}</div>
  );
}
const CalDays = props => {

  return (
    props.days.map((d, i) => {
      return <CalDay reserved={d.reserved} prevMonth={d.prevMonth} day={d.day} key={i} />
    })
  );
};
const CalYear = (props) => {

  return(
    <div className="year">
      <div className="yearTitle">
        {props.year}
      </div>
      {props.children}
    </div>
  );
};

const CalMonth = (props) => {

  return(
    <div className="month">
      <div className="monthTitle">{monthNames[props.month-1]}</div>
      <CalDayNames/>
      {props.children}
    </div>
  )
};

const daysInMonth = (month, year) => new Date(year, month, 0).getDate();

const CalEvents = (props) => {
  const [calData, setCalData] = useState([["","",""]]);

  useEffect(() => {

    async function fetchMyAPI() {
      let response = await fetch("https://sheets.googleapis.com/v4/spreadsheets/1lPX9h_xT2eN5ed8lG5WdiiH4kphH4IRQlDLRU2qjft0/values/Varaukset?key=AIzaSyABZeUkblAHJB7s8jRlea4jitjuqtff5k0")
      response = await (response.json());
      const finalData = response.values;
      finalData.shift();
      const data =  finalData.map(item => [toTimeObject(item[0]), toTimeObject(item[1]), parseFloat(item[2].replace(",", "."))]);
      setCalData(data);
    }

    fetchMyAPI()
  }, []);

  const startMonth = 5;
  const endMonth = 10;
  const calendar = [];

  const calDataLen = calData.length;
  const startYear = calData[0][0].year;
  let endYear = calData[calDataLen - 1][0].year;

  if(endYear - startYear < 3){
    endYear = startYear + 3;
  }

  for(let i=startYear; i<endYear;i++){

    const year={
      year: i,
      months: [ ]
    };
    for(let m=startMonth; m<endMonth;m++) {
      const month = {month: m, days: []};

      const numberOfDays = daysInMonth(m, i);
      const firstDate = new Date();
      firstDate.setDate(1);
      firstDate.setMonth(m-1);
      firstDate.setFullYear(i);
      const firstWeekDay = ((firstDate.getDay() + 6) % 7);
      const totalDays = 7 - (firstWeekDay + numberOfDays) % 7 + (firstWeekDay + numberOfDays);

      month.firstWeekDay = firstWeekDay;

      for(let d=0; d<firstWeekDay;d++) {
        month.days.push({day: "", prevMonth:true, reserved:false});
      }
        for(let d=1; d<=numberOfDays;d++) {
        month.days.push({day: d, prevMonth:false, reserved:false});
      }
      for(let d=numberOfDays+firstWeekDay; d<totalDays;d++) {
        month.days.push({day: "", prevMonth:true, reserved:false});
      }
      year.months.push(month);
    }
      calendar.push(year);
  }

  for(let i=0; i<calDataLen;i++){
    const year0 = calData[i][0].year;
    const year1 = calData[i][1].year;
    const month0 = calData[i][0].month;
    const month1 = calData[i][1].month;
    let day0 = calData[i][0].day;
    let day1 = calData[i][1].day;

    for(let y=year0 - startYear; y<=year1 - startYear;y++){

      for(let m=month0 - startMonth; m<=month1 - startMonth;m++) {
        if(month0 !== month1){
          const numberOfDays = daysInMonth(m, y);
          day1 = m!= month1 - startMonth ? numberOfDays : day1;
          day0 = m!= month0 - startMonth ? 1 : day0;
        }
        for(let d=day0; d<=day1;d++) {
          if(calendar[y].months[m]  ){
            calendar[y].months[m].days[calendar[y].months[m].firstWeekDay + d - 1].reserved = true;
          }
        }
      }
    }
  }

  return (
    <div className="jCalendar">
    {
      calendar.map(d =>
        <CalYear key={d.year} year={d.year}>
          {d.months.map( m =>
          <CalMonth key={d.year+"_"+m.month} month={m.month}>
            <CalDays month={m.month} days={m.days}/>
          </CalMonth>)}
        </CalYear>)
    }
    </div>
  )
}

export default CalEvents;
