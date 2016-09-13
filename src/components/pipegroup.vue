<template>
    <ul class="pipe-group">
        <li v-for="pos in pipes"><pipe :position="pos"></pipe></li>
    </ul>
</template>
<style>
    .pipe-group{
        width: 100%;
        height: 100%;
        padding: 0;
        margin: 0;
    }
    .pipe-group li {
        text-decoration: none;
    }
</style>
<script>
    import Config from '../config.js'
    import Game from '../game.js'
    import Pipe from './pipe.vue'
    export default{
        data(){
            return{
                pipes:[]
            }
        },
        components:{
            Pipe
        },
        methods: {
            move: function () {
                for (let i = 0; i < this.pipes.length; i++) {
                    let pos = this.pipes[i];
                    pos -= Config.pipe.speed;
                    if (pos < -Config.pipe.width) {
                        pos += (Config.pipe.width + Config.pipe.distance) * Config.pipe.pipeCount;
                    }
                    this.pipes.splice(i, 1, pos);
                }
            }
        },
        created () {
            console.log('PipeGroup:Created');
            // add pipes
            for (let i = 0; i< Config.pipe.pipeCount;i++)
                this.pipes.push( i * (Config.pipe.width + Config.pipe.distance));
            // add event listener
            Game.events.addListener('timer', this.move);
        },
        destroyed: function () {
            console.log('PipeGroup:Destroyed');
            Game.events.removeListener('timer', this.move);
        }
    }

</script>
