<template>
    <div class="land"
         :style="{width:this.style.width+'px',left:this.style.left+'px',height:this.style.height+'px'}">
    </div>
</template>
<style scoped>
    .land {
        position: absolute;
        bottom: 0;
        background: url("../assets/img/land.png") repeat-x;
        z-index: 10;
    }
</style>
<script>
    import Game from '../game.js';
    import Config from '../config.js';

    export default {
        data(){
            return {
                style: {
                    width: Config.app.width + Config.land.unitWidth*2,
                    height: Config.land.height,
                    left: 0
                }
            }
        },
        methods: {
            update() {
                if (this.hasOwnProperty(Game.stateNow))
                    this[Game.stateNow]();      // call update function according to current state
            },
            running () {
                this.style.left-=Config.land.speed;
                if (this.style.left <= - Config.land.unitWidth)
                    this.style.left += Config.land.unitWidth;
            },
            over () {

            }
        },
        created: function () {
            console.log('Land:Created');
            Game.events.addListener('timer', this.update);
        },
        destroyed: function () {
            console.log('Land:Destroyed');
            Game.events.removeListener('timer', this.update);
        }
    }

</script>
