import VendingMachine from "../../models/VendingMachine.js";

//Private Parts

const vm = new VendingMachine()

//public to controller
class VendService {
  constructor() {

  }

  vend(foodId) {
    return vm.vend(foodId)
  }

  getItems() {
    return vm.getItems()
  }

  addMoney(type) {
    console.log('service ', type);
    return vm.addMoney(type)
  }

  giveChange() {
    vm.giveChange()
  }

}


export default VendService