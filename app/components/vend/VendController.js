import VendService from './VendService.js'
//PRIVATE PARTS

//variables outside of the exported class
const vendService = new VendService()

function drawTotal(total) {
  //updates screen
  document.getElementById('total').innerText = total
}

function safeBox(total) {
  document.getElementById('total2').innerText = total
}

function drawItems() {
  let items = vendService.getItems()
  //draw the items to the page
  let template = ''
  for (let index = 0; index < items.length; index++) {
    const item = items[index];
    template += `
            <div class="food-item" onclick="app.controllers.vendController.vend('${item.id}')">
              <img src="${item.img}" alt = "">
              <h3> ${item.price}</h3> 
            </div>
            `
  }
  document.getElementById('food').innerHTML = template
}

function drawVend(img) {
  document.getElementById('vended-item').setAttribute('src', img)
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

  vend(foodId) {
    var result = vendService.vend(foodId)
    if (result) {
      drawTotal(result.total)
      drawVend(result.img)
      safeBox(result.safe)
    }
  }

  giveChange() {
    vendService.giveChange()
    drawTotal('0.00')
  }

  steal() {
    vendService.steal()
    safeBox('0.00')
  }
}


export default VendController