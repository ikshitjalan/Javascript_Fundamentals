let car= {
  carId : 141,
  getId : function (prefix) {
    return prefix  + this.carId

  }

}

let newCar = { carId : 783}

console.log(car.getId.apply(newCar , ['ID :' ]));
