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
            console.log('game.js:timer start');
            this.id = setInterval(() => {
                game.events.emit('timer');
            }, Config.app.refreshInterval);
        },
        stop () {
            clearInterval(this.id);
        }
    },
    init () {
        this.stateNow = this.stateList.ready;
    },
    start () {
        // TODO: game start
        this.init();
        this.timer.start();
    },
    setState (state) {
        if (this.stateList[state]) {
            // TODO: trigger hooks before state change
            this.stateNow = state;
            // TODO: trigger hooks after state change
        }
    }
};

export default game;
