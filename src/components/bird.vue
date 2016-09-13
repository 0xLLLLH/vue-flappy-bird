<template>
    <div :class="['bird',classList[state]]"
        :style="{left:style.left+'px',top:style.top+'px'}">
    </div>
</template>
<style>
    .bird {
        position: absolute;
        width: 48px;
        height: 48px;
    }

    .bird-0 {
        background: url("../assets/img/bird0_0.png");
    }
    .bird-1 {
        background: url("../assets/img/bird0_1.png");
    }
    .bird-2 {
        background: url("../assets/img/bird0_2.png");
    }

</style>
<script>
    import Config from '../config.js';
    import Game from '../game.js';

    export default {
        data(){
            return{
                state:0,
                stateChangeCounter: 0,
                stateChangeCountMax: 10,    //indicates how much time circle does state change after
                classList:['bird-0', 'bird-1', 'bird-2'],
                style:{
                    left:Config.bird.left,
                    top:Config.bird.top
                }
            }
        },
        methods: {
            move:function () {
                this.stateChangeCounter++;
                if (this.stateChangeCounter == this.stateChangeCountMax)
                {
                    this.stateChangeCounter = 0;
                    this.state = (this.state + 1) % this.classList.length;
                }
            }
        },
        components:{
        },
        created () {
            // add event listener
            Game.events.addListener('timer', this.move);
        },
        destroyed: function () {
            console.log('Pipes:Destroyed');
            Game.events.removeListener('timer', this.move);
        }
    }
</script>
