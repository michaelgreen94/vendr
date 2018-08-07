import VendService from './VendService.js'
//PRIVATE PARTS

//variables outside of the exported class
const vendService = new VendService()


//PUBLIC PARTS
// Controllers are used for getting user input
// Updatingscreen 
// Sending and recieving data from Service
class VendController {
  constructor() {

  }

  draw() {
    //updates screen
  }

  addMoney(cur) {
    console.log('controller: ', cur)
    vendService.addMoney(cur)
    //used to send money to service
  }

}

export default VendController