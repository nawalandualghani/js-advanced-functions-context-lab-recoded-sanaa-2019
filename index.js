/* Your Code Here */

function createEmployeeRecord(array){
    return {
        firstName: array[0],
        familyName: array[1],
        title: array[2],
        payPerHour: array[3],
        timeInEvents: [],
        timeOutEvents: []
    }
}
 function createEmployeeRecords(Array){
   return Array.map(function(array){
       return createEmployeeRecord(array)
     })
 }

 function createTimeInEvent(dateStemp){
   let [date, hour] = dateStemp.split(' ')

       this.timeInEvents.push({
           type: "TimeIn",
           hour: parseInt(hour, 10),
           date,
       })

       return this
 }

 function createTimeOutEvent(dateStemp){
   let [date, hour] = dateStemp.split(' ')

       this.timeInEvents.push({
           type: "TimeOut",
           hour: parseInt(hour, 10),
           date,
       })

       return this
 }
 function hoursWorkedOnDate(soughtDate){
   let inEvent = this.timeInEvents.find(function(e){
         return e.date === soughtDate
     })
 }

 function wagesEarnedOnDate(dateSought){
   let rawWage = hoursWorkedOnDate.call(this, dateSought)
        * this.payPerHour
    return parseFloat(rawWage.toString())
 }
/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

let allWagesFor = function () {
    let eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    let payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}
