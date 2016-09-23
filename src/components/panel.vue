<template>
    <div class="panel">
        <div class="high-score">Record: {{record}}</div>
        <div class="score">
            <div v-for="digit in digits" >
                <div :class="['digit','num_' + digit]"></div>
            </div>
        </div>
        <div v-show="state=='ready'"
             @click="startGame"
             class="start">Start</div>
    </div>
</template>
<style>
    .panel {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
    }
    .high-score {
        position: absolute;
        left: 20px;
        top: 20px;
        font-size: 2em;
        font-weight: bolder;
    }
    .score {
        position: absolute;
        left: 50%;
        top: 5%;
        transform: translateX(-50%);
    }
    .digit {
        float: left;
        width: 48px;
        height: 88px;
        margin-left: 5px;
    }
    .start {
        position: absolute;
        left: 50%;
        top: 44%;
        width: 120px;
        height: 60px;
        line-height: 60px;
        -webkit-border-radius: 5px;
        -moz-border-radius: 5px;
        border-radius: 5px;
        transform: translateX(-50%);
        background: darkcyan;
        text-align: center;
        font-weight: bolder;
        font-size: 2em;
        color: #fff;
        transition: all 0.5s;
        cursor: pointer;
    }
    .start:hover {
        background: cyan;
    }

    .num_0 {
        background: url("../assets/img/num_0.png") center no-repeat;
        background-size: contain;
    }
    .num_1 {
        background: url("../assets/img/num_1.png") center no-repeat;
        background-size: contain;
    }
    .num_2 {
         background: url("../assets/img/num_2.png") center no-repeat;
         background-size: contain;
     }
    .num_3 {
        background: url("../assets/img/num_3.png") center no-repeat;
        background-size: contain;
    }
    .num_4 {
        background: url("../assets/img/num_4.png") center no-repeat;
        background-size: contain;
    }
    .num_5 {
        background: url("../assets/img/num_5.png") center no-repeat;
        background-size: contain;
    }
    .num_6 {
        background: url("../assets/img/num_6.png") center no-repeat;
        background-size: contain;
    }
    .num_7 {
        background: url("../assets/img/num_7.png") center no-repeat;
        background-size: contain;
    }
    .num_8 {
        background: url("../assets/img/num_8.png") center no-repeat;
        background-size: contain;
    }
    .num_9 {
        background: url("../assets/img/num_9.png") center no-repeat;
        background-size: contain;
    }
</style>
<script>
    import Config from '../config.js';
    import Game from '../game.js';

    export default{
        data(){
            return{
                digits: ['0'],
                state: Game.stateList.ready,
                record: 0
            }
        },
        computed: {
        },
        methods: {
            scoreUpdate () {
                this.record = Game.score.record;
                this.digits = Game.score.score.toString().split('');
            },
            stateChange () {
                this.state = Game.stateNow;
            },
            startGame () {
                Game.start();
            }
        },
        created () {
            Game.events.addListener('scoreUpdate', this.scoreUpdate);
            Game.events.addListener('stateChange', this.stateChange);
        },
        destroyed () {
            Game.events.removeListener('scoreUpdate', this.scoreUpdate);
            Game.events.removeListener('stateChange', this.stateChange);
        }
    }

</script>