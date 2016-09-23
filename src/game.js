import Events from 'events';
import Config from './config.js';

let game = {
    events: new Events.EventEmitter(),
    limits: {
        maxHeight: Config.app.height,
        minHeight: Config.bird.height
    },
    // current state of game
    stateNow: null,
    // available game states list
    // reset->ready -> running->pause->running->over->stop
    stateList: {
        reset: 'reset',
        ready: 'ready',
        running: 'running',
        pause: 'pause',
        over: 'over',
        stop: 'stop'
    },
    timer: {
        isRunning: false,
        timerId: 0,
        start () {
            console.log('game.js:timer start');
            this.timerId = setInterval(() => {
                game.events.emit('timer');
            }, Config.app.refreshInterval);
            this.isRunning = true;
        },
        stop () {
            console.log('game.js:timer stop');
            clearInterval(this.timerId);
            this.isRunning = false;
        }
    },
    init () {
        document.onkeydown = (e) => {
            if (e.keyCode === 32) {
                switch (this.stateNow) {
                    case this.stateList.ready:
                        this.setState(this.stateList.running);
                        break;
                    case this.stateList.running:
                        this.events.emit('space');
                        break;
                    case this.stateList.stop:
                        this.setState(this.stateList.reset);
                        this.setState(this.stateList.ready);
                        break;
                }
            }
            if (e.keyCode === 27) {
                // this.events.emit('esc');
                if (this.timer.isRunning) {
                    this.timer.stop();
                } else {
                    this.timer.start();
                }
            }
        };
        this.setState(this.stateList.reset);
        this.setState(this.stateList.ready);
    },
    start () {
        // TODO: game start
        this.init();
        this.timer.start();
        this.setState('running');
    },
    setState (state) {
        if (this.stateList[state] && this.stateNow !== state) {
            this.stateNow = state;
            // emit event to alert components
            this.events.emit('stateChange', state);
            console.log('Game: state change to ' + state);
        }
    }
};

export default game;
