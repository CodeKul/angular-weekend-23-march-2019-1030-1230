
export class IotService {

  private rpm : number = 0
  
  constructor() { }

  inc() {
    return ++this.rpm
  }

  dec() {
    return --this.rpm
  }
}
