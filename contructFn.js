let Car = function (id) {
  this.carId = id,
  this.start = function () {
    return 'start  ' + this.carId;

  }

}

let car = new Car(124);

console.log(car.start());
