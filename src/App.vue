<template>
    <div id="app" :style="{width:width+'px',height:height+'px'}">
        <land></land>
        <pipe-group></pipe-group>
    </div>
</template>

<script>
    import Config from './config.js'
    import Game from './game.js'
    import Land from './components/land.vue'
    import PipeGroup from './components/pipegroup.vue'

    export default {
        data () {
            return {
                width: Config.app.width,
                height: Config.app.height,
                pipes:[]
            }
        },
        components:{
            Land,
            PipeGroup
        },
        methods: {
            move: function () {
                this.pipes.map(function (pos) {
                    pos -= Config.pipe.speed;
                    if (pos < Config.pipe.width)
                        pos += Config.pipe.width;
                    return pos;
                });
            }
        },
        created () {
            // add pipes
            for (let i = 0; i< Config.pipe.pipeCount;i++)
                this.pipes.push( i * (Config.pipe.width + Config.pipe.distance));
            // add event listener
            Game.events.addListener('timer', this.move);
        },
        destroyed: function () {
            console.log('Pipes:Destroyed');
            Game.events.removeListener('timer', this.move);
        }
    }
</script>

<style>
@import "assets/css/normalize.css";

* {
    box-sizing: border-box;
}

html, body {
    height: 100%;
}

#app {
    display: block;
    border: 5px solid #000;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    background: url("./assets/img/bg_day.png") 100% 100% no-repeat;
    background-size: 100% 100%;
    overflow: hidden;
}
</style>
