let appSettings = {
    width: 600,
    height: 800,
    speed: 4,
    refreshInterval: 20
};

let landSettings = {
    srcWidth: 336,
    height: 112,
    unitCount: 14,
    speed: appSettings.speed
};

landSettings.unitWidth = (landSettings.srcWidth / landSettings.unitCount);

let pipeSettings = {
    pipeCount: 3,
    width: 100,
    distance: 200,
    spaceHeight: 200,
    topPipeHeightMax: 400,
    topPipeHeightMin: 50,
    speed: appSettings.speed
};

let birdSettings = {
    width: 48,
    height: 48,
    imgPadding: 5,
    left: 100,
    bottom: 300,
    gravity: -5,
    flyVector: 15
};

export default {
    app: appSettings,
    land: landSettings,
    pipe: pipeSettings,
    bird: birdSettings
};
