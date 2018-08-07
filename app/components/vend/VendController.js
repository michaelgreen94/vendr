import VendService from './VendService.js'
//PRIVATE PARTS

//variables outside of the exported class
const vendService = new VendService()

function drawTotal(total) {
  //updates screen
  document.getElementById('total').innerText = total
}

function drawItems() {
  let items = vendService.getItems()
  //draw the items to the page
  let template = ''
  for (let index = 0; index < items.length; index++) {
    const item = items[index];
    template += `
            <div class="food-item" onclick>
              <img src="${item.img}" alt = "">
              <h3> ${item.price}</h3> 
            </div>
            `
  }
  document.getElementById('food').innerHTML = template
}

function drawVend() {

}

//PUBLIC PARTS
// Controllers are used for getting user input
// Updatingscreen 
// Sending and recieving data from Service
class VendController {
  constructor() {
    drawItems()
  }

  //used to send money to service
  addMoney(cur) {
    console.log('controller: ', cur)
    let total = vendService.addMoney(cur)
    console.log('returned to controller', total)
    drawTotal(total)
    //used to send money to service
  }

}

export default VendController