import Events from 'events';
import Config from './config.js';

let game = {
    score: {
        score: 0,
        record: 0,
        addScore: function () {
            this.score++;
            if (this.score > this.record) {
                this.record = this.score;
            }
            game.events.emit('scoreUpdate');
        },
        clearScore: function () {
            this.score = 0;
            game.events.emit('scoreUpdate');
        }
    },
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
    spaceOrTouch () {
        switch (game.stateNow) {
            case game.stateList.ready:
                game.setState(game.stateList.running);
                break;
            case game.stateList.running:
                game.events.emit('space');
                break;
            case game.stateList.stop:
                game.setState(game.stateList.reset);
                game.setState(game.stateList.ready);
                break;
            default:
                break;
        }
    },
    init () {
        this.score.clearScore();
        document.addEventListener('touchstart',this.spaceOrTouch, false);
        document.onkeydown = (e) => {
            if (e.keyCode === 32) {
                this.spaceOrTouch();
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
        if (!this.timer.isRunning) {
            this.timer.start();
        }
    },
    start () {
        this.setState(this.stateList.running);
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
