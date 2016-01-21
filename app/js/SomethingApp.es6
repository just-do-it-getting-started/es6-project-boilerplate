import Module from './modules/math/index.es6'

class MainApp {
    constructor() {
        console.log('something');

        new Module();
    }
}

// global 이나 네임스페이스에 담고 싶을 경우 처리..
window.MainApp = MainApp;