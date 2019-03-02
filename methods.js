class car {

  constructor(id){
    return this.id = id;
    }
    method(){
    return `ID : ${this.id}`
}

  
}

let Car = new car(384);

console.log(Car.id);
console.log(Car.method());
