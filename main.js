import VendController from './app/components/vend/VendController.js'


//used to initialize and contain all controllers
class App {
  constructor() {
    this.controllers = {
      vendController: new VendController()
    }
  }
}

//Connects app to document exposing the app class
window.app = new App();