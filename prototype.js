let Car = function (id) {

  this.carId = id

}

Car.prototype.start = function () {
  return 'start :  ' + this.carId;
};

let car = new Car(473);

console.log(car.start());
