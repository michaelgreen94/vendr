import VendController from './app/components/vend/VendController.js'


class App {
  constructor() {
    this.contollers = {
      vendController: new VendController()
    }
  }
}

//Connects app to document exposing the app class
window.app = new App();