class Elevator {
  constructor(){
    this.floor      = 0;
    this.MAXFLOOR   = 10;
    this.requests   = [];
    this.direction = "up";
    this.passengers = [];
    this.waitingList = [];
  }

  start() {
    setInterval(() => {
      this.update();
      this.stop();
    }, 1000);
  }
  stop() {
    setInterval(() => {
      if (this.floor > this.requests[this.requests.length-1]) {
        this.floorDown();
      } else {
        this.floorUp();
      };
      this.requests.splice();
    }, 1000);
  }
  update() {
    this.log();
  }
  _passengersEnter(person) {
    this.requests.push(this.waitingList[length-1].destinationFloor);
    this.passengers.push(this.waitingList[length-1]);
    console.log(`${person} enters`);
  }
  _passengersLeave(person) {
    console.log(`${person} goes down`);
  }
  floorUp() {
    if (this.floor<10) {
    this.floor++;
    this.waitingList.forEach((e,i) => {  //Check if there are passengers waiting to get on the elevator and get them on board.
      if (e.originFloor == this.floor) {
        this._passengersEnter(e);
        this.waitingList.splice(i,1);
      };
    });
    this.passengers.forEach((e,i) => {  //Check if there are passengers waiting to go down and make sure they do.
      if (e.destinationFloor == this.floor) {
        this._passengersLeave(e);
        this.passengers.splice(i,1);
      };
    });
    } else {
    console.log("Rooftop is for VIPs only.");
    }
  }
  floorDown() {
    if (this.floor>0) {
      this.floor--;
      this.waitingList.forEach((e,i) => {  //Check if there are passengers waiting to get on the elevator and get them on board.
        if (e.originFloor == this.floor) {
          this._passengersEnter(e);
          this.waitingList.splice(i,1);
        }
      });
    } else {
      console.log("You can't go underground.");
    }
  }
  call(person) {
    this.waitingList.push(person);
    this.requests.push(this.waitingList[this.waitingList.length-1].originFloor);
  }
  log() {
    console.log(`Direction: ${this.direction} | Floor: ${this.floor}`);
  }
}

module.exports = Elevator;
