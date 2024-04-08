/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/
enum Week{
  MONDAY,
  TUESDAY,
  WEDNESDAY,
  THURSDAY,
  FRIDAY,
  SATURDAY,
  SUNDAY
}

function isWeekend(day : Week) : boolean {
  return day === Week.SATURDAY || day === Week.SUNDAY
}

console.log(isWeekend(Week.MONDAY));
console.log(isWeekend(Week.TUESDAY));
console.log(isWeekend(Week.WEDNESDAY));
console.log(isWeekend(Week.THURSDAY));
console.log(isWeekend(Week.FRIDAY));
console.log(isWeekend(Week.SATURDAY));
console.log(isWeekend(Week.SUNDAY));
