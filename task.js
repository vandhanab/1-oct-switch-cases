function findDayOfWeek(dayNumber) {
    switch (dayNumber) {
      case 1:
        return "Monday";
      case 2:
        return "Tuesday";
      case 3:
        return "Wednesday";
      case 4:
        return "Thursday";
      case 5:
        return "Friday";
      case 6:
        return "Saturday";
      case 0:
        return "Sunday";
      default:
        return "Invalid day number";
    }
  }
  
  // Example usage:
  console.log(findDayOfWeek(3));
  console.log(findDayOfWeek(5));


  function findMonthOfYear(monthNumber) {
    switch (monthNumber) {
      case 1:
        return "January";
      case 2:
        return "February";
      case 3:
        return "March";
      case 4:
        return "April";
      case 5:
        return "May";
      case 6:
        return "June";
      case 7:
        return "July";
      case 8:
        return "August";
      case 9:
        return "September";
      case 10:
        return "October";
      case 11:
        return "November";
      case 12:
        return "December";
      default:
        return "Invalid month number";
    }
  }

  //Even Numbers in First 10 Numbers using While Loop


let i = 1;
while (i <= 10) {
  if (i % 2 === 0) {
    console.log(i + " is even");
  }
  i++;
}
  
  // Example usage:
  console.log(findMonthOfYear(10)); 
  console.log(findMonthOfYear(5));


  //Countdown Timer using While Loop
let countdown = 10;
while (countdown >= 0) {
  console.log(countdown);
  countdown--;
}

console.log("Countdown over!");