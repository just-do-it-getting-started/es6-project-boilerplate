import Module from './modules/math/index.es6'

class Something2App {
    constructor() {
        console.log('test22');

        new Module();
    }
}

// global 이나 네임스페이스에 담고 싶을 경우 처리..
window.Something2App = Something2App;