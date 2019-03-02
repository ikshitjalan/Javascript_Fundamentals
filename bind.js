
let car = {
  carId : 3472,
  getId  : function () {
    return  this.carId

  }

}

let newCar = {carId : 738}


let newFn = car.getId.bind(newCar)

console.log(newFn());
