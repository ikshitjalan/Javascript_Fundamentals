class vehicle {

  constructor(){
     this.type= 'car';

  }
  start(){
    return ` start ${this.type}`;

  }
}

class car extends vehicle{
  start(){
    return 'in car start' + super.start();
  }
};

let Car = new car();


 console.log(Car.type);
 console.log(Car.start());
