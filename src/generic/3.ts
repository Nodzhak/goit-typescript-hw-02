/*
  У вас є функція merge, яка поєднує два об'єкти. 
  Використовуйте generics, щоб вказати, що ці об'єкти можуть бути будь-якого типу.
*/

function merge<A, B>(objA: A, objB: B): A & B {
  return { ...objA, ...objB };
}

export {}