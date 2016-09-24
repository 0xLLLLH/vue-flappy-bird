# vue-flappy-bird

> A Vue.js based game. Inspired by [this repo](https://github.com/woxixiulayin/vflappybird)

[Demo](http://115.28.240.133:3000/flappybird/)

1. All configurations are saved into `config.js`
2. Game controlled by game.js, which provides event emitting and callback registration.
3. Data of components update by event callback.
Especially, `update()` method of components will be called on `timer` event, and it will call various methods according to `game.stateNow`.

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).
