<template>
    <div>
    </div>
</template>
<style>

</style>
<script>
    import Config from '../config.js';
    import Game from '../game.js';

    const PREFIX = './static/music/';

    export default{
        data(){
            return{
                eventName: ['fly', 'die', 'score', 'hit'],
                eventCallback:{}
            }
        },
        methods: {
            score () {
                this.eventCallback['score']();
            },
            fly () {
                this.eventCallback['fly']();
            },
            stateChange () {
                switch (Game.stateNow) {
                    case Game.stateList.over:
                        this.eventCallback['hit']();
                        setTimeout(this.die, 500);
                        break;
                    default:
                        break;
                }
            },
            die () {
                this.eventCallback['die']();
            }
        },
        created () {
            // Create elements and attach events
            for (let i = 0; i < this.eventName.length; i++) {
                let event = this.eventName[i];
                let el = document.createElement('audio');
                el.src = PREFIX + event + '.mp3';
                el.preload = 'preload';
                this.eventCallback[event] = function () {
                    el.play();
                };
            }
            Game.events.addListener('scoreUpdate', this.score);
            Game.events.addListener('space', this.fly);
            Game.events.addListener('stateChange', this.stateChange);
        },
        destroyed () {
            Game.events.removeListener('scoreUpdate', this.score);
            Game.events.removeListener('space', this.fly);
            Game.events.removeListener('stateChange', this.stateChange);
        }
    }

</script>
