// function daysInMonth(month, year) {
//     let date = new Date(Date.UTC(year, month, 5))
//     let days = []
//     while (date.getUTCMonth() === month) {
//         days.push(new Date(date))
//         date.setUTCDate(date.getUTCDate() + 1)
//     }
//     return days
// }
// function daysInMonth() {
//     var dt = new Date();
//     var month = dt.getMonth();
//     var year = dt.getFullYear();
//     daysInMonth = new Date(year, month, 0).getDate();
//     return daysInMonth
// }
// function getDates() {
//     let date = new Date();
//     let firstDay = newDate(date.getFullYear)
//     for
// }

// ADJUST PARAMETERS OF DATE() IN TODAY1 AND TODAY2 EQUALLY TO TEST DIFFERENT DAYS
let dates = getDates();

function getDates(daysBefore = 35, daysAfter = 35) {
    const today1 = new Date();
    // console.log("TODAY", today1)
    const startDate = new Date(today1.setDate(today1.getDate() - daysBefore));
    // console.log("TODAY", today1)
    // console.log("STARTDATE", startDate)
    const today2 = new Date();
    const endDate = today2.setDate(today2.getDate() + daysAfter);
    // console.log("ENDDATE", endDate)

    const dates = [];
    let currentDate = startDate;
    // console.log("CURRENT DATE", currentDate)
    const addDays = function (days) {
        const date = new Date(this.valueOf());
        date.setDate(date.getDate() + days);
        return date;
    };
    while (currentDate <= endDate) {
        dates.push(currentDate);
        currentDate = addDays.call(currentDate, 1);
    }
    return dates;
}

function convertWeekday(num) {
    const weekday = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const day = weekday[num];
    return day;
}

function reverseWeekday(day) {
    const weekday = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const num = weekday.indexOf(day);
    return num;
}

function formatDates(dates) {
    const daysOfWeek = [];
    const daysOfMonth = [];
    for (let i = 0; i < dates.length; i++) {
        d = dates[i].getDay();
        daysOfWeek.push(convertWeekday(d));

        daysOfMonth.push(dates[i].getDate());
    }
    // console.log(daysOfWeek);
    // console.log(daysOfMonth);
    const formattedDates = [];
    for (let i = 0; i < daysOfWeek.length; i++) {
        formattedDates[i] = [daysOfWeek[i], daysOfMonth[i]];
    }
    return formattedDates;
}

// function isTodayWeek(date) {
//     const num = reverseWeekday(date);
//     const today = new Date();
//     // console.log('TODAY', today.getDay())
//     // console.log('DATE', date)
//     // console.log('NUM', num)
//     return num === today.getDay();
// }

// function isTodayMonth(date) {
//     const today = new Date();
//     return date === today.getDate();
// }

// function isToday(weekday, monthday) {
//     const todayWeek = isTodayWeek(weekday);
//     const todayMonth = isTodayMonth(monthday);
//     return todayWeek && todayMonth;

//     // return 15 === i
// }

function isToday(dayRaw) {
    let today = new Date()
    today = Math.floor(today.getTime() / 60000)
    dayRaw = Math.floor(dayRaw.getTime() / 60000)
    // console.log(dayRaw, typeof(dayRaw))
    // console.log(today, typeof(today))
    // console.log(dayRaw === today)
    return dayRaw === today
}

function isAdjacentDay(dayRaw) {
    
    let today = new Date();
    const yesterday = Math.floor((today.getTime() - 86400000) / 60000)
    // console.log("YESTERDAY", yesterday)
    const tomorrow = Math.floor((today.getTime() + 86400000) / 60000)
    // console.log("TOMORROW", tomorrow)

    dayRaw = Math.floor(dayRaw.getTime() / 60000)
    // console.log("TODAY", dayRaw);
    const adjacentDay = dayRaw === yesterday || dayRaw === tomorrow;
    // const adjacentDayMonth =
    // return i === 14 || i === 16
    return adjacentDay;
}

function dayBlock(day, dayRaw) {
    // console.log("DAY", day, typeof(day))
    // console.log(dayRaw)
    
    // const currentDay = isToday(day[0], day[1]) ? " current-day" : "";
    const currentDay = isToday(dayRaw) ? " current-day" : "";
    // console.log(currentDay)
    const adjacentDay = isAdjacentDay(dayRaw) ? " adjacent-day" : "";
    const dayOfWeek = day[0];
    const dayOfMonth = day[1];
    return `
                <div class="day${currentDay}${adjacentDay}">
                    <div class="day-of-week">
                        <p>${dayOfWeek}</p>
                    </div>
                    <div class="day-of-month">
                        <p>${dayOfMonth}</p>
                    </div>
                </div>
            `;
}

function dayRangeBlock() {
    // console.log(dates);

    formattedDates = formatDates(dates);
    // console.log(formattedDates);
    // console.log(isTodayWeek("Wed"))
    // console.log(isTodayMonth(26))
    // console.log(isToday())
    // console.log(isAdjacentDay(26))
    let output = [];
    for (let i = 0; i < formattedDates.length && dates.length; i++) {
        // console.log(formattedDates[i], dates[i])
        const day = formattedDates[i];
        const dayRaw = dates[i]
        // console.log(dayRaw)
        output.push(dayBlock(day, dayRaw));
    }

    // for (let i = 0; i < dates.length; i++){

    // }

    return `<div class="timeline">` + output.join("") + "</div>";
}


