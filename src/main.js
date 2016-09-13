import Vue from 'vue';
import App from './App.vue';
import Config from './config.js';
import Game from './game.js';

// set viewport width to game window width
document.querySelector('meta[name=viewport]').setAttribute('content',
    'width=' + Config.app.width + ',user-scalable=no');


let vm = new Vue({
    el: '#app',
    render: (h) => (h(App)),
    created: function () {
        Game.start();
    }
});
