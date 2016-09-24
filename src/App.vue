<template>
    <div id="app" :style="{width:width+'px',height:height+'px'}">
        <land></land>
        <pipe-group></pipe-group>
        <bird></bird>
        <panel></panel>
        <music></music>
    </div>
</template>

<script>
    import Config from './config.js'
    import Game from './game.js'
    import Land from './components/land.vue'
    import PipeGroup from './components/pipegroup.vue'
    import Bird from './components/bird.vue'
    import Panel from './components/panel.vue'
    import Music from './components/music.vue'

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
            PipeGroup,
            Bird,
            Panel,
            Music
        },
        methods: {

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
