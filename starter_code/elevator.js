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
    let stopSetInterval = setInterval(update, 1000);
    clearInterval(stopInterval);
  }
  update() {
   return this.log();
  }
  _passengersEnter() {
    for(let i =0; i<waitingList.lenth;i++)
        if(this.waitingList[i].originFloor == this.floor) {
          this.passengers.push(this.waitingList[i]);
          this.requests.push(this.waitingList[i].destinationFloor);
          this. waitingList.splite(i,1)
      
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
