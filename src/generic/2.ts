/*
  У вас є тип AllType. Існує функція compare, яка приймає два об'єкти. Ці об'єкти містять поля AllType. 
  Ваше завдання – використовувати Pick та generics для вказівки, що поля цих об'єктів належать AllType.
  Функція compare повинна повертати AllType.
*/

type AllType = {
  name: string;
  position: number;
  color: string;
  weight: number;
}

function compare <A extends keyof AllType, B extends keyof AllType> (
  top: Pick <AllType, A> , bottom: Pick <AllType, B> ): AllType {
  const result: Partial<AllType> = {}; 


  if ('name' in top) {
    result.name = top.name as string;
  }
  if ('color' in top) {
    result.color = top.color as string;
  }
  if ('position' in bottom) {
    result.position = bottom.position as number;
  }
  if ('weight' in bottom) {
    result.weight = bottom.weight as number;
  }

  return result as AllType;
}

export {};