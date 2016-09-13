let appSettings = {
    width: 600,
    height: 800,
    speed: 2,
    refreshInterval: 20
};

let landSettings = {
    srcWidth: 336,
    height: 112,
    unitCount: 14,
    speed: appSettings.speed
};

landSettings.unitWidth = appSettings.width + (landSettings.srcWidth / landSettings.unitCount);

let pipeSettings = {
    pipeCount: 3,
    width: 75,
    distance: 200,
    spaceHeight: 200,
    topPipeHeightMax: 400,
    topPipeHeightMin: 50,
    speed: appSettings.speed
};

export default {
    app: appSettings,
    land: landSettings,
    pipe: pipeSettings
};
