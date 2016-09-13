<template>
    <div class="pipe" :style="{width:width+'px',left:position+'px'}">
        <div class="pipe-top" :style="{height:topHeight+'px'}"></div>
        <div class="space" :style="{height:spaceHeight+'px'}"></div>
        <div class="pipe-bottom":style="{height:bottomHeight+'px'}"></div>
    </div>
</template>
<style>
    .pipe {
        position: absolute;
        top: 0;
        bottom: 0;
        height: 100%;
    }

    .pipe-top {
        background: url("../assets/img/pipe_down.png") bottom no-repeat;
        background-size: cover;
    }

    .pipe-bottom {
        background: url("../assets/img/pipe_up.png") no-repeat;
        background-size: cover;
    }
</style>
<script>
    import Config from '../config.js';
    import Game from '../game.js';
    export default{
        data(){
            return{
                width: Config.pipe.width,
                spaceHeight: Config.pipe.spaceHeight
            }
        },
        computed: {
            topHeight: function () {
                return Config.pipe.topPipeHeightMin
                    + Math.random()*(Config.pipe.topPipeHeightMax-Config.pipe.topPipeHeightMin);
            },
            bottomHeight: function () {
                return Config.app.height - Config.land.height - this.topHeight - this.spaceHeight;
            }
        },
        props:{
            position: Number
        }
    }

</script>
