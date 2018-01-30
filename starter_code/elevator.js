class Elevator {
  constructor() {
    this.floor = 0;
    this.MAXFLOOR = 10;
    this.requests = [];
    this.passengers = [];
    this.waitingList = [];
    this.direction = "up";
    this.setInterval;

  }

  start() {
   this.setInterval = setInterval(() => {
      this.update();
      this.floorUp();
    }, 1000);
  }
  stop() {
    
    clearInterval(this.setInterval);
  }
  update() {
   return this.log();
  }
  _passengersEnter() {
    for(let i =0; i<waitingList.lenth;i++)
        if(this.waitingList[i].originFloor == this.floor) {//¿Hay un pavo en la planta del ascensor?
          this.passengers.push(this.waitingList[i]); //Añado al pavo  a la lista
          this.requests.push(this.waitingList[i].destinationFloor); //Añado al pavo a la lista de plantas a las que viaja el ascensor
          this. waitingList.splice(i,1)// Le largo de la lista de espera
      
    }

  }
  _passengersLeave() {}

  floorUp() {
    if (this.floor < this.MAXFLOOR && this.direction == "up" ) {
      this.floor++;
     } else {
      this.direction = "down";
      this.floorDown()
    }
}

floorDown() {
  if (this.floor > 0 && this.direction == "down") {
    this.floor--;
  } else {
    this.direction = "up";
    this.floorUp();
  }
}
  call(person) {
    this.waitingList.push(person);
    this.request.push(originFloor);
  }
  log() {
    console.log(this.floor);
  }
}

module.exports = Elevator;
