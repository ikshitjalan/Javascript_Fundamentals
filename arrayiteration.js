let carId = [

  {
    carId : 334,
    style : 'convertible'
  },
  {
    carId : 364,
    style : 'convertible2'
  },
  {
    carId : 354,
    style : 'convertible3'
  },
];

carId.forEach((car , index) =>console.log(car,index))

let convertible = carId.filter(
  car => car.style === 'convertible'
);


console.log(convertible);

let find = carId.find(
  car => car.carId > 300
)

let every = carId.every(
  car => car.carId > 0
)
console.log(every);
console.log(find);
