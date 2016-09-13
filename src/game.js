import Events from 'events';
import Config from './config.js';

let game = {
    events: new Events.EventEmitter(),
    // current state of game
    stateNow: null,
    // available game states list
    // ready -> running->pause->running->over->stop
    stateList: {
        ready: 'ready',
        running: 'running',
        pause: 'pause',
        over: 'over',
        stop: 'stop'
    },
    timer: {
        id: 0,
        start () {
            this.id = setInterval(this.func, Config.app.refreshInterval);
            console.log('game.js:timer start');
        },
        stop () {
            clearInterval(this.id);
        },
        func () {
            game.events.emit('timer');
            console.log('timer');
        }
    },
    init () {
        this.stateNow = this.stateList.ready;
    },
    start () {
        // TODO: game start
        this.init();
        this.timer.start();
    }
};

export default game;
