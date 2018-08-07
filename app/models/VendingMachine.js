class VendingMachine {
  constructor() {
    this.transactionTotal = 0
    this.acceptableCurrency = {
      quarter: .25,
      dime: .1,
      nickel: .05
    }
    this.foodItems = [{
      id: 'a1',
      img: 'https://target.scene7.com/is/image/Target/51591776?wid=400&hei=400&fmt=pjpeg',
      price: 1.25,
      quantity: 10
    }, {
      id: 'a2',
      img: 'https://pbs.twimg.com/profile_images/824647153721106432/gwLIQxqy_400x400.jpg',
      price: 2.00,
      quantity: 1
    }, {
      id: 'a3',
      img: 'http://www.mountaindew.com/assets/content/38195/20881/21892-grew-dew-product.png',
      price: .75,
      quantity: 15
    }]
    this.machineTotal = 10
  }

  addMoney(coin) {
    //validate coin
    //  increase total 
    //return total
  }
  vend(foodId) {
    //find item
    //if transactionTotal >= item.price && item.quantity > 0
    //  item.quantity --
    //  transactionTotal -= item.price
    //  machineTotal += item.price
    //return item.img
  }
  giveChange() {
    //transactionTotal = 0
  }

  getItems() {
    return this.foodItems
  }
}


export default VendingMachine